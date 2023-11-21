import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-complaint-view',
  templateUrl: './complaint-view.component.html',
  styleUrls: ['./complaint-view.component.css']
})

export class ComplaintViewComponent {

  @Input() data:string = "";
  @Output() event = new EventEmitter<string>();

  message = "this is for parent component";
  show=true;

  sendMessage(msgForParent:any){
    this.event.emit(msgForParent);
  }

}
