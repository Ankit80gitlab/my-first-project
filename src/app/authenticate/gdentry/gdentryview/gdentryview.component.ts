import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { TimeoutService } from 'src/app/services/timeout.service';
import { SharedService } from 'src/app/services/shared.service';
import { GdeditService } from 'src/app/services/gdedit.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-gdentryview',
  templateUrl: './gdentryview.component.html',
  styleUrls: ['./gdentryview.component.css']
})


export class GdentryviewComponent {

  general_diary: any = [];
  routerEvents: any;

  constructor(private timeoutServ: TimeoutService, private sharedServ: SharedService,
    private gdServ: GdeditService, private router:Router) {
     }

  ngOnInit() {
    this.getGdEntries();
  }

  allGdData: any[] = [];
  gdEntries: any[] = [];
  usergdEntries: any[] = [];

  getGdEntries() {
    this.allGdData.length=0;
    this.gdEntries.length=0;
    this.usergdEntries.length=0;
    let arrayLength = 0;
    let subArrayLength = 0;
    let arrayLength2 = 0;
    let subArrayLength2 = 0;
    let tempArray: any[] = [];
    tempArray.length=0;

    let userId = localStorage.getItem('userId');
    this.gdServ.getAll().subscribe((resp) => {
      for (let i of resp) {
        this.allGdData.push(i.entries);
        if (i.userId == userId) {
          tempArray.push(i.entries);
        }
      }
      //console.log(this.allGdData);
      //console.log(tempArray);

      arrayLength = this.allGdData.length;
      for (let i = 0; i < arrayLength; i++) {
        subArrayLength = this.allGdData[i].length;
        for (let k = 0; k < subArrayLength; k++) {
          this.gdEntries.push(this.allGdData[i][k]);
        }
      }
      //console.log(this.gdEntries);
      

      arrayLength2 = tempArray.length;
      for (let i = 0; i < arrayLength2; i++) {
        subArrayLength2 = tempArray[i].length;
        for (let j = 0; j < subArrayLength2; j++) {
          this.usergdEntries.push(tempArray[i][j]);
        }
      }
      //console.log(this.usergdEntries);
    })
  }

  updateGd(gdData:any){
    this.sharedServ.setMessage(gdData);
    this.router.navigateByUrl('cctns/gdmain/edit');
  }
}

