import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GdeditService } from 'src/app/services/gdedit.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-gdentryedit',
  templateUrl: './gdentryedit.component.html',
  styleUrls: ['./gdentryedit.component.css']
})
export class GdentryeditComponent {

  datePipe: DatePipe = new DatePipe('en-US');
  incomingGdData: any = "";
  defaultVisible: boolean = true;

  constructor(private sharedServ: SharedService, private gdServ: GdeditService,
    private router: Router, private notifyServ:NotificationService) { }


  ngOnInit() {
    this.defaultVisible = true;
    this.incomingGdData = this.sharedServ.getMessage();
    this.puttingValues();
    this.switch='on';
  }

  GdId: any = "";
  Date_Time: any = "";
  Select: any = "";
  GeneralDiaryType: any = "";
  GeneralDiarySubtype: any = "";
  Entry: any = "";
  Subject: any = "";
  BriefGeneralDiary: any = "";


  getFormattedDate() {
    var date = new Date();
    var transformDate = this.datePipe.transform(date, "dd/MM/yyyy, h:mm");
    return transformDate;
  }

  puttingValues() {
    this.GdId = this.incomingGdData.GdId;
    this.Date_Time = this.incomingGdData.Date_Time;
    this.Select = this.incomingGdData.Select;
    this.GeneralDiaryType = this.incomingGdData.GeneralDiaryType;
    this.GeneralDiarySubtype = this.incomingGdData.GeneralDiarySubtype;
    this.Entry = this.incomingGdData.Entry;
    this.Subject = this.incomingGdData.Subject;
    this.BriefGeneralDiary = this.incomingGdData.BriefGeneralDiary;
  }

  switch:any=false;
  submit(op1: any, gdt: any, gds: any, efo: any, sub: any, summ: any) {
    // console.log(op1, gdt, gds, efo, sub, summ);
    let gdNewData = [
      {
        "GdId": this.GdId,
        "Date_Time": this.getFormattedDate(),
        "Select": op1,
        "GeneralDiaryType": gdt,
        "GeneralDiarySubtype": gds,
        "Entry": efo,
        "Subject": sub,
        "BriefGeneralDiary": summ
      }
    ]

    this.gdServ.updatingGdData(gdNewData);
    this.notifyServ.addNotification('Updated '+this.GdId+" on "+this.getFormattedDate());
    this.switch='off';
    setTimeout(() => {
      this.switch='on';
      this.router.navigateByUrl('/cctns/gdmain/view');
    }, 400);


  }


}
