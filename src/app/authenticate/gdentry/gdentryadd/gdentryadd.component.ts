import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { DatePipe } from '@angular/common';
import { TimeoutService } from 'src/app/services/timeout.service';
import { SharedService } from 'src/app/services/shared.service';
import { NotificationService } from 'src/app/services/notification.service';
import { GdeditService } from 'src/app/services/gdedit.service';
@Component({
  selector: 'app-gdentryadd',
  templateUrl: './gdentryadd.component.html',
  styleUrls: ['./gdentryadd.component.css']
})
export class GdentryaddComponent {

  //declare the input decorator along with a property called data with return type as string
  //we expect to receive a string from parent component
  @Input() data: string = "";

  url: string = "";
  receivedMessage = "";
  datePipe: DatePipe = new DatePipe('en-US');
  routerEvents: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appcom: AppComponent,
    private timeoutServ: TimeoutService,
    private sharedServ: SharedService,
    private notifyServ: NotificationService,
    private gdeditServ:GdeditService
  ) { }

  ngOnInit() {
    // this.timeoutServ.stopIdle();
    // this.timeoutServ.configureIdleLogout();
    //this.receivedMessage = this.sharedServ.getMessage()
    this.routerEvents = this.router.events.subscribe(
      (event: any) => {
        // this.notifyServ.getAllNotification();
      })
  }

  getFormattedDate() {

    var date = new Date();
    var transformDate = this.datePipe.transform(date, "dd/MM/yyyy, h:mm");
    return transformDate;

  }

  send(data: any) {
    console.log(data);
    this.sharedServ.setMessage(data);
  }

  general_diary: any[] = [];

  submit(op1: any, gdt: any, gds: any, efo: any, sub: any, summ: any) {
    this.general_diary = [
      {
        "Date_Time": this.getFormattedDate(),
        "Select": op1,
        "GeneralDiaryType": gdt,
        "GeneralDiarySubtype": gds,
        "Entry(For Officer)": efo,
        "Subject": sub,
        "BriefGeneralDiary": summ
      }
    ]


    this.gdeditServ.addGdData(this.general_diary);
    this.sharedServ.setMessage(this.general_diary);
    this.notifyServ.addNotification('GD Added ' + this.getFormattedDate())
    this.router.navigateByUrl('/cctns/gdmain/view')
  }

  

  
}


