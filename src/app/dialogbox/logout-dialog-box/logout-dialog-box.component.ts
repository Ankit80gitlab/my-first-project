import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { logout } from 'src/app/redirection/navigation/nav.component';

@Component({
  selector: 'app-logout-dialog-box',
  templateUrl: './logout-dialog-box.component.html',
  styleUrls: ['./logout-dialog-box.component.css']
})
export class LogoutDialogBoxComponent {

  constructor(
    private dialogRef: MatDialogRef<LogoutDialogBoxComponent>,@Inject(MAT_DIALOG_DATA) public data: logout){
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
