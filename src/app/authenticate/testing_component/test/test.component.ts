import { Component } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private idle: Idle){}

  idleTime: number = 5;
  urlSetTimeout = ["/cctns/dashboard"];

    configureIdleLogout() {
        var urlPath = location.pathname;
        if (this.urlSetTimeout.includes(urlPath)) {
            console.log("session logout called");
            this.idle.setIdle(this.idleTime);
            this.idle.setTimeout(5); // This is the time it takes to trigger the timeout event
            this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
            this.idle.onIdleEnd.subscribe(() => console.log('No longer idle.'));
            this.idle.onTimeout.subscribe(() => { window.location.href = "cctns/login"; });
            //this.idle.onInterrupt.subscribe(() => console.log("no more idle"));
            this.idle.watch();
        } else {
            console.log("path not assigned for set timeout");
        }
    }

}
