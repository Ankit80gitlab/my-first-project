import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TimeoutService } from 'src/app/services/timeout.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogBoxComponent } from 'src/app/dialogbox/login-dialog-box/login-dialog-box.component';
import { DataService } from 'src/app/services/data.service';
import { DownloadService } from 'src/app/services/download.service';
import { userData } from 'src/app/models/user';
import { RegistrationService } from 'src/app/services/registration.service';
import { ThisReceiver } from '@angular/compiler';

export interface loginMsg {
  name: string;
  role: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  childData: string = 'this msg is from dashboard component';

  form!: FormGroup;
  name = 'Angular ';
  pageType: boolean = true;
  url: string = "";

  constructor(
    private dialog: MatDialog,
    private ds: DataService,
    private downServ: DownloadService,
    private regServ: RegistrationService) {

  }

  ngOnInit() {
    this.openDialogForLogIn();
  }

  openDialogForLogIn() {
    if (localStorage.getItem('welcome') === 'true') {
      console.log("welcome dialog box called second time");
    }
    else {
      console.log("welcome dialog box calling first time");
      localStorage.setItem("welcome", "true");
      this.dialog.open(LoginDialogBoxComponent, {
        data: {
          name: localStorage.getItem('name'),
          role: localStorage.getItem('role')
        },
      });
    }
  }

  download() {
    let userData: Array<userData> = [];
    let data: String;
    let downloadEmpData: string = "";

    this.regServ.fetchAllUser().subscribe(resp => {
      for (let i of resp) {
        userData.push(i);
      }
      for (let j of userData) {
        data = "Id : " + j.id + " | Name : " + j.name + " | email : " + j.email + " | Role : " + j.role + " | Location : " + j.location + " |";
        downloadEmpData += '\n' + data;
      }
      this.downServ.download(downloadEmpData);
    })
  }

}

