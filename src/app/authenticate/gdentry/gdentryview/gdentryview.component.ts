import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { TimeoutService } from 'src/app/services/timeout.service';
import { SharedService } from 'src/app/services/shared.service';
import { GdeditService } from 'src/app/services/gdedit.service';

@Component({
  selector: 'app-gdentryview',
  templateUrl: './gdentryview.component.html',
  styleUrls: ['./gdentryview.component.css']
})


export class GdentryviewComponent {

  general_diary: any = [];

  constructor(private timeoutServ: TimeoutService, private sharedServ: SharedService,
    private gdServ: GdeditService) { }

  ngOnInit() {
    // this.timeoutServ.stopIdle();
    // this.timeoutServ.configureIdleLogout();
    this.general_diary = this.sharedServ.getMessage();
    this.getGdEntries();
  }

  allGdData: any[] = [];
  gdEntries: any[] = [];

  getGdEntries() {
    let arrayLength = 0;
    let subArrayLength = 0;
    this.gdServ.getAll().subscribe((resp) => {
      for (let i of resp) {
        this.allGdData.push(i.entries);
      }
      //console.log(this.allGdData);
      arrayLength = this.allGdData.length;
      for (let i = 0; i < arrayLength; i++) {
        subArrayLength = this.allGdData[i].length;
        for (let k = 0; k < subArrayLength; k++) {
          this.gdEntries.push(this.allGdData[i][k]);
        }
      }
    })

  }

}

