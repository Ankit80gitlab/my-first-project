import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { loginMsg } from 'src/app/authenticate/common/dashboard/dashboard.component';



@Component({
  selector: 'app-login-dialog-box',
  templateUrl: './login-dialog-box.component.html',
  styleUrls: ['./login-dialog-box.component.css']
})
export class LoginDialogBoxComponent {

  constructor(private dialogRef: MatDialogRef<LoginDialogBoxComponent>,@Inject(MAT_DIALOG_DATA) public data: loginMsg) { }

  ngOnInit() {
  }

  onOkClick(): void {
    this.dialogRef.close();
  }

}
