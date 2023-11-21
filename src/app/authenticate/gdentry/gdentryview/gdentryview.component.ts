import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { TimeoutService } from 'src/app/services/timeout.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-gdentryview',
  templateUrl: './gdentryview.component.html',
  styleUrls: ['./gdentryview.component.css']
})


export class GdentryviewComponent {

  general_diary:any=[];

  constructor(private timeoutServ:TimeoutService, private sharedServ:SharedService){}

  ngOnInit() {
    // this.timeoutServ.stopIdle();
    // this.timeoutServ.configureIdleLogout();
    this.general_diary = this.sharedServ.getMessage();     
  }
  
}

