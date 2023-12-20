import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { DatePipe } from '@angular/common';
import { TimeoutService } from 'src/app/services/timeout.service';
import { SharedService } from 'src/app/services/shared.service';
import { NotificationService } from 'src/app/services/notification.service';
import { GdeditService } from 'src/app/services/gdedit.service';
import { GdAddDialogBoxComponent } from 'src/app/dialogbox/gd-add-dialog-box/gd-add-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';


export interface gdAddDialog {
  "gdData": any
}

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


  gdType: any[] = ['Departure', 'Arrival' ,'Administrative', 'Inquiry / Registration', 'Preventive Action'];
  gdSubType: any[] = ['Arrival','Departure', 'Administrative', 'Inquiry / Registration', 'Preventive Action'];
  gdEntry: any[] = ['option 1', 'option 2', 'option 3', 'option 4'];

  constructor(
    private sharedServ: SharedService,
    private notifyServ: NotificationService,
    private gdeditServ: GdeditService,
    private dialog: MatDialog,
    private router: Router
  ) { }


  ngOnInit() {

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

  generateGdId() {
    let prefix: any = "GD"
    let suffix: any = "";
    let generatedGdId: any = "";
    suffix = Math.floor(10000 + Math.random() * 90000);
    generatedGdId = prefix + suffix;
    return generatedGdId;
  }

  general_diary: any[] = [];
  submit(op1: any, gdt: any, gds: any, efo: any, sub: any, summ: any) {

    let allGdId: any[] = [];
    let duplicateGdId = false;

    //generating gdId
    let generatedGdId = this.generateGdId();
    console.log(generatedGdId);

    //checking duplicate status
    this.gdeditServ.getAllGdId().subscribe((resp) => {
      for (let i of resp) {
        allGdId.push(i.gdId);
      }
      for (let i of allGdId) {
        if (i === generatedGdId) {
          duplicateGdId = true;
          break;
        }
      }
      console.log(duplicateGdId);
      if (duplicateGdId) {
        console.log("Something went wrong, please try again");
      } else if (!duplicateGdId) {
        if (this.gdType.includes(gdt)) {
          if (this.gdSubType.includes(gds)) {
            if (this.gdEntry.includes(efo)) {
              if (sub.length >= 5) {
                this.general_diary = [
                  {
                    "GdId": generatedGdId,
                    "Date_Time": this.getFormattedDate(),
                    "Select": op1,
                    "GeneralDiaryType": gdt,
                    "GeneralDiarySubtype": gds,
                    "Entry": efo,
                    "Subject": sub,
                    "BriefGeneralDiary": summ
                  }
                ]
                this.gdeditServ.addGdData(this.general_diary);
                this.gdeditServ.addGdId({"gdId":generatedGdId}).subscribe((res)=>{console.log(res);})
                //this.sharedServ.setMessage(this.general_diary);
                this.notifyServ.addNotification('GD Added ' + this.getFormattedDate());
                setTimeout(() => {
                  this.openDialogForGdAdd(this.general_diary);
                  this.router.navigateByUrl('/cctns/gdmain/view');
                }, 500);

              }
              else {
                alert("General diary subject is required");
              }
            }
            else {
              alert("General diary entry type is required");
            }
          }
          else {
            alert("General diary sub type is required");
          }
        }
        else {
          alert("General diary type is required");
        }
      }
    })
  }

  openDialogForGdAdd(data: any): void {
    const dialogRef = this.dialog.open(GdAddDialogBoxComponent, {
      data: {
        "gdData": data
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("clicked");

      } else {
        console.log("denied");
      }
    });
  }

}


