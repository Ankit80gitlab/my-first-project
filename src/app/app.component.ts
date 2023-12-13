import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { elementAt, first } from 'rxjs/operators';
import { TimeoutService } from './services/timeout.service';
import { MatDialog } from '@angular/material/dialog';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { IdleLogoutDialogComponent } from './dialogbox/idle-logout-dialog/idle-logout-dialog.component';
import { IntHeaderComponent } from './redirection/header/int-header.component';
import { NotificationService } from './services/notification.service';
import { gdAddNotify } from './models/gdNotification';

export interface idleLogout {
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {





  title1 = 'Angular 16 Crud example';
  pageType = false;
  login = false;
  currentRoute: string = "";
  form!: FormGroup;
  loading = false;
  submitted = false;
  ret = false;

  urlListInt = [
    "/cctns/dashboard",
    "/cctns/gdmain/add",
    "/cctns/gdmain/view"
  ];

  urlListExt = [
    "/cctns/login"
  ];

  url = "";
  routerEvents: any;

  constructor(private idle: Idle,
    private router: Router,
    private timeoutServ: TimeoutService,
    private dialog: MatDialog,
    private notifyServ: NotificationService) {
    this.sessionManagment();

  }

  sessionManagment() {
    this.routerEvents = this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          console.log("url changed " + event.url);
          this.check();
          if (!this.timeoutServ.excludeUrlSetTimeout.includes(event.url)) {
            console.log("assigned path for idle logout : called");
            this.idle.setIdle(this.timeoutServ.idleTime);
            this.idle.setTimeout(5); // This is the time it takes to trigger the timeout event
            this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
            this.idle.watch();
            this.idle.onIdleEnd.subscribe(() => console.log('No longer idle.'));
            this.idle.onTimeout.subscribe(() => {
              console.log("Session expired : idle for too long");
              //alert("Session expired : idle for too long");
              window.location.href = "cctns/login";
              //this.openDialogForIdleLogout();
            });
            //this.idle.onInterrupt.subscribe(() => console.log("no more idle"));
          } else {
            console.log("idle logout stopped");
            this.idle.stop();
          }
        }
      });
  }

  ngOnInit() {
    var urlPath = location.pathname;
    var lv = sessionStorage.getItem("LoginValue");

    if (lv != null && lv == "True") { // loggedin user
      if (this.urlListInt.includes(urlPath))
        this.pageType = true;

    } else { // not logged in
      if (!this.urlListExt.includes(urlPath))
        this.router.navigateByUrl('cctns/home');
    }


  }

  openDialogForIdleLogout() {
    this.dialog.open(IdleLogoutDialogComponent, {
      data: {
        name: localStorage.getItem('name'),
        role: localStorage.getItem('role')
      },
    });
  }

  messageForIntHead:string="";
  notifications: gdAddNotify[] = [];

  check() {
    this.messageForIntHead="this is from parent";
    
  }


}

