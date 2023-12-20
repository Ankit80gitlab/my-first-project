import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { gdAddDialog } from 'src/app/authenticate/gdentry/gdentryadd/gdentryadd.component';

@Component({
  selector: 'app-gd-add-dialog-box',
  templateUrl: './gd-add-dialog-box.component.html',
  styleUrls: ['./gd-add-dialog-box.component.css']
})
export class GdAddDialogBoxComponent {

  constructor(
    private dialogRef: MatDialogRef<GdAddDialogBoxComponent>,@Inject(MAT_DIALOG_DATA) public data: gdAddDialog){
      
  }

}
