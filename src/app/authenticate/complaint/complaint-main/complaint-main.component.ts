import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint-main',
  templateUrl: './complaint-main.component.html',
  styleUrls: ['./complaint-main.component.css']
})
export class ComplaintMainComponent {

  constructor(private router: Router) { }

  messageForAdd = "";
  messageForView = "";

  ngOnInit() {
    this.clicked = true;
    this.add = true;
    this.view = true;
  }

  clicked = true;
  add = true;
  view = true;

  forAddCalled(msg:any){
    this.messageForAdd=msg;
  }

  forViewCalled(msg:any){
    this.messageForView=msg;
  }

  // received message from child component
  receivedMsgAdd:string='';
  receivedMsgView:string='';

  receiveMessageForAdd($event:any){
    this.receivedMsgAdd=$event;
  }

  receiveMessageForView($event:any){
    this.receivedMsgView=$event;
  }

}
