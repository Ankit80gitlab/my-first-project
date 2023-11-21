import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private dialogData: boolean | undefined;

  setDialogData(dialogData:boolean){
    this.dialogData=dialogData;
  }
  getDialogData(){
    return this.dialogData;
  }

  hasDialogData(){
    return this.dialogData;
  }
}
