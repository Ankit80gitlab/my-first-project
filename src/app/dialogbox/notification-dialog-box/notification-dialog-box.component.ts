import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notify } from 'src/app/redirection/header/int-header.component';

@Component({
  selector: 'app-notification-dialog-box',
  templateUrl: './notification-dialog-box.component.html',
  styleUrls: ['./notification-dialog-box.component.css']
})
export class NotificationDialogBoxComponent {

  constructor(
    private dialogRef: MatDialogRef<NotificationDialogBoxComponent>,@Inject(MAT_DIALOG_DATA) public data: notify){
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
