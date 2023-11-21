import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { TimeoutService } from 'src/app/services/timeout.service';
import { DashboardComponent } from '../../common/dashboard/dashboard.component';

@Component({
  selector: 'app-gd-main',
  templateUrl: './gd-main.component.html',
  styleUrls: ['./gd-main.component.css']
})
export class GdMainComponent {

  @ViewChild(DashboardComponent) msgFromDashboard !: DashboardComponent

  // message will be sent to child component -> gd-entry-add
  message = "this is testing";
  msgFromViewChild = "";

  constructor(private timeoutServ: TimeoutService, private sharedServ: SharedService,
    private cd: ChangeDetectorRef) { }

  // ngAfterViewInit() {
  //   this.msgFromViewChild = this.msgFromDashboard.childData;
  //   this.cd.detectChanges();
  //   console.log(this.msgFromDashboard.childData);
  // }
  ngOnInit() {

  }

}
