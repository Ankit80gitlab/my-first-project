import { Injectable } from '@angular/core';
import { gdAddNotify } from '../models/gdNotification';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  message:any='';

  constructor() { }

  setMessage(data:any){
    this.message=data;

  }
  getMessage(){
    return this.message;
  }

  
}
