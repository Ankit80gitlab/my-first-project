import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-complaint-add',
  templateUrl: './complaint-add.component.html',
  styleUrls: ['./complaint-add.component.css']
})
export class ComplaintAddComponent {
  
  @Input() data:string = "";
  @Output() event = new EventEmitter<string>();

  // message will be sent to parent component
  message = "this is for parent component";
  show=true;

  sendMessage(msgForParent:any){
    this.event.emit(msgForParent);
  }


}
