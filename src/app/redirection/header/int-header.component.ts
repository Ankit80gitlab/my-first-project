import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { catchError, first, takeUntil } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared.service';
import { gdAddNotify } from 'src/app/models/gdNotification';
import { Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification.service';
// import 'rxjs/add/operator/takeUntil';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'int-header',
  templateUrl: './int-header.component.html',
  styleUrls: ['./int-header.component.css']
})
export class IntHeaderComponent {
  title = 'Angular 16 Crud example';
  form!: FormGroup;

  @Input() data: string = "";

  componentDestroy$: Subject<Boolean> = new Subject();
  //private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  userId: any = "";
  name: any = "";
  role: any = "";
  location: any = "";
  visible = false;

  general_diary: string = "";
  routerEvents: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private sharedServ: SharedService,
    private httpClient: HttpClient,
    private notifyServ: NotificationService
  ) { }


  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.role = localStorage.getItem('role');
    this.location = localStorage.getItem('location');
    this.userId = localStorage.getItem('userId');

    // this.sharedServ.getMessage().takeUntil(this.componentDestroy$).subscribe((data: any) =>{
    //   this.showinfo(data);
    // }) 
    // this.sharedServ.getMessage().pipe(takeUntil(this.destroyed$));
    //this.changes();

    this.routerEvents = this.router.events.subscribe(
      (event: any) => {
        this.getAllNotification();
      })
  }


  notifications: any[] = [];
  notificationLength:number=0;

  getAllNotification() {
    let notifyIdOfUser = 0;
    let userId = localStorage.getItem('userId');
    this.notifyServ.getAll().subscribe((resp) => {
      for (let i of resp) {
        if (i.userId == userId) {
          notifyIdOfUser = i.id;
          break;
        }
      }
      if (notifyIdOfUser != 0) {
        //console.log(notifyIdOfUser);
        this.notifyServ.getById(notifyIdOfUser).subscribe((resp) => {
          this.notifications = resp.notification;
          this.notificationLength=this.notifications.length;
          //console.log(this.notifications);
        })
      } else {
        console.log("notification id is 0");
      }
    });
  }
}







