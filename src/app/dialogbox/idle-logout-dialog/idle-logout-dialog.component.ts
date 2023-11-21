import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { idleLogout } from 'src/app/app.component';


@Component({
  selector: 'app-idle-logout-dialog',
  templateUrl: './idle-logout-dialog.component.html',
  styleUrls: ['./idle-logout-dialog.component.css']
})
export class IdleLogoutDialogComponent {
  
  constructor(private dialogRef: MatDialogRef<IdleLogoutDialogComponent> ,@Inject(MAT_DIALOG_DATA) public data: idleLogout) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
