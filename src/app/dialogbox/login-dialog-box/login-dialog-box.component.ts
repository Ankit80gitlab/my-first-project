import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loginMsg } from 'src/app/authenticate/common/dashboard/dashboard.component';



@Component({
  selector: 'app-login-dialog-box',
  templateUrl: './login-dialog-box.component.html',
  styleUrls: ['./login-dialog-box.component.css']
})
export class LoginDialogBoxComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: loginMsg) { }

  ngOnInit() {
  }

}
