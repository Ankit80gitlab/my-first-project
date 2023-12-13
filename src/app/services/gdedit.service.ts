import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GdeditService {

  constructor(private httpClient: HttpClient) { }

  private apiServer = "http://localhost:3400";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addGdEntry(gdData: any) {
    return this.httpClient.post<any>(this.apiServer + '/gdentries/', JSON.stringify(gdData), this.httpOptions);
  }
  getById(id: any) {
    return this.httpClient.get<any>(this.apiServer + '/gdentries/' + id);
  }
  getAll() {
    return this.httpClient.get<any[]>(this.apiServer + '/gdentries/');
  }
  update(gdData: any, id: any) {
    return this.httpClient.put<any>(this.apiServer + '/gdentries/' + id, JSON.stringify(gdData), this.httpOptions);
  }
  delete(id: any) {
    return this.httpClient.delete<any>(this.apiServer + '/gdentries/' + id, this.httpOptions);
  }

  addGdData(gdNewEntry: any) {
    let notifyIdOfUser = 0;
    let updatedGdArray: any[] = [];
    let c = 0;
    let n = 0;
    let j = 0;
    let userId = localStorage.getItem('userId');
    this.getAll().subscribe((resp) => {
      for (let i of resp) {
        if (i.userId == userId) {
          notifyIdOfUser = i.id;
          break;
        }
      }
      //console.log(notifyIdOfUser);
      if (notifyIdOfUser != 0) {
        this.getById(notifyIdOfUser).subscribe((resp) => {
          c = resp.entries.length;
          if (c != 0) {
            //console.log(c);
            while (c > n) {
              updatedGdArray.push(resp.entries[j]);
              n++;
              j++;
            }
            updatedGdArray.push(gdNewEntry[0]);

            let gdData = {
              "userId": localStorage.getItem('userId'),
              "entries": updatedGdArray
            }
            this.update(gdData, notifyIdOfUser).subscribe((resp) => {
              //console.log(resp);
            })
          }else{
            updatedGdArray.push(gdNewEntry[0]);
            let gdData = {
              "userId": localStorage.getItem('userId'),
              "entries": updatedGdArray
            }
            this.update(gdData, notifyIdOfUser).subscribe((resp) => {
              console.log(resp);
            })
          }
        })
      } else {
        console.log("notification id is 0");
      }
    })
  }


}


