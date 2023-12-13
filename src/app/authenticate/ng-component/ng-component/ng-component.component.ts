import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-component',
  templateUrl: './ng-component.component.html',
  styleUrls: ['./ng-component.component.css']
})
export class NgComponentComponent {

  hidden = false;

  ngOnInit(){
    this.hidden=true;
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  notification:string[]=[];
  


}
