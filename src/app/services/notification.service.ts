import { Injectable } from '@angular/core';
import { gdAddNotify } from '../models/gdNotification';
import { SharedService } from './shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private sharedServ: SharedService, private httpClient: HttpClient) { }

  general_diary: any[] = [];

  private apiServer = "http://localhost:3200";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addUser(user: any) {
    return this.httpClient.post<any>(this.apiServer + '/user/', JSON.stringify(user), this.httpOptions);
  }
  getById(id: any) {
    return this.httpClient.get<any>(this.apiServer + '/user/' + id);
  }
  getAll() {
    return this.httpClient.get<any[]>(this.apiServer + '/user/');
  }
  update(user: any, id: any) {
    return this.httpClient.put<any>(this.apiServer + '/user/' + id, JSON.stringify(user), this.httpOptions);
  }
  delete(id: any) {
    return this.httpClient.delete<any>(this.apiServer + '/user/' + id, this.httpOptions);
  }

  notifications2: any[] = [];

  findUserNotificationId() {
    this.notifications2.length == 0;
    let notifyIdOfUser = 0;
    let userId = localStorage.getItem('userId');
    this.getAll().subscribe((resp) => {
      for (let i of resp) {
        if (i.userId == userId) {
          notifyIdOfUser = i.id;
          break;
        }
      }
      if (notifyIdOfUser != 0) {
        this.findNotificationFromId(notifyIdOfUser);
        return notifyIdOfUser;
      } else { return "id is 0" }
    });
  }

  findNotificationFromId(notifyIdOfUser: any) {
    console.log(notifyIdOfUser);
    return notifyIdOfUser;
  }

  notifications: any[] = [];
  addNotification(message: any) {
    this.notifications.length == 0;
    let notifyIdOfUser = 0;
    let updatedNotifyArray: any[] = [];
    let userId = localStorage.getItem('userId');
    this.getAll().subscribe((resp) => {
      for (let i of resp) {
        if (i.userId == userId) {
          notifyIdOfUser = i.id;
          break;
        }
      }
      if (notifyIdOfUser != 0) {
        //console.log(notifyIdOfUser);
        this.getById(notifyIdOfUser).subscribe((resp) => {
          this.notifications = resp.notification;
          //console.log(this.notifications.length);
          for (let k of this.notifications) {
            updatedNotifyArray.push(k);
          }
          updatedNotifyArray.push(message);
          //console.log(updatedNotifyArray);
          //console.log(updatedNotifyArray);
          
          let addNotification = {
            "userId": localStorage.getItem('userId'),
            "notification": updatedNotifyArray,
          }
          this.update(addNotification, notifyIdOfUser).subscribe((resp) => {
            console.log(resp);
          })

        })
      } else {
        console.log("notification id is 0");
      }
    })
  }




}
