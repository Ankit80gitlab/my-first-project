import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gdIdData } from '../models/gdId';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GdeditService {

  constructor(private httpClient: HttpClient) { }

  private apiServer = "http://localhost:3400";
  private apiServer2 = "http://localhost:3600";

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

  addGdId(gdId: any) {
    return this.httpClient.post<any>(this.apiServer2 + '/allGdId/', JSON.stringify(gdId), this.httpOptions);
  }

  getAllGdId() {
    return this.httpClient.get<gdIdData[]>(this.apiServer2 + '/allGdId/');
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
          } else {
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

  updatingGdData(gdNewEntry: any) {
    let gdIdOfUser = 0;
    let tempArray: any[] = [];
    let found = false;
    let indexOfeditingGd = 0;
    let c = 0;
    let n = 0;
    let j = 0;

    let userId = localStorage.getItem('userId');
    this.getAll().subscribe((resp) => {
      for (let i of resp) {
        if (i.userId == userId) {
          gdIdOfUser = i.id;
          break
        }
      }
      //console.log(gdIdOfUser);
      //console.log(tempArray);
      if (gdIdOfUser != 0) {
        this.getById(gdIdOfUser).subscribe((resp) => {
          c = resp.entries.length;
          if (c != 0) {
            //console.log(c);
            while (c > n) {
              tempArray.push(resp.entries[j]);
              n++;
              j++;
            }
            //console.log(tempArray);

            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i].GdId == gdNewEntry[0].GdId) {
                indexOfeditingGd = i;
                console.log("found");
                found = true;
                break;
              }
            }
            //console.log(indexOfeditingGd);

            if (found) {
              tempArray[indexOfeditingGd] = gdNewEntry[0];
              //console.log(tempArray);

              let gdData = {
                "userId": localStorage.getItem('userId'),
                "entries": tempArray
              }
              this.update(gdData, gdIdOfUser).subscribe((resp) => {
               // console.log(resp);
              })

            } else {
              console.log("gd with gdId not found for current user in db, maybe another user");
              alert("Edit request denied : " + gdNewEntry.GdId + " added by other user!");
            }
          }
        })
      } else {
        console.log("gd id is 0");
      }
    })

  }

  datePipe: DatePipe = new DatePipe('en-US');
  getFormattedDate() {
    var date = new Date();
    var transformDate = this.datePipe.transform(date, "dd/MM/yyyy, h:mm");
    return transformDate;
  }

}














   // if(gdIdOfUser != 0){

      // }

      // if (gdIdOfUser != 0) {
      //   let arrayLength = 0;
      //   let subArrayLength = 0;
      //   arrayLength = tempArray.length;
      //   let indexOfEditedGd = 0;
      //   let found = false;

      //   for (let i = 0; i < arrayLength; i++) {
      //     subArrayLength = tempArray[i].length;
      //     for (let j = 0; j < subArrayLength; j++) {
      //       console.log(gdNewEntry.GdId)
      //       if (tempArray[i][j].GdId == gdNewEntry[0].GdId) {
      //         indexOfEditedGd = j;
      //         console.log("found");
      //         found = true;
      //         break;
      //       }
      //     }
      //   }
      //   console.log(indexOfEditedGd);
      //   console.log(gdIdOfUser);
      //   if (found) {
      //     let general_diary =
      //     {
      //       "GdId": gdNewEntry.GdId,
      //       "Date_Time": this.getFormattedDate(),
      //       "Select": gdNewEntry.Select,
      //       "GeneralDiaryType": gdNewEntry.GeneralDiaryType,
      //       "GeneralDiarySubtype": gdNewEntry.GeneralDiarySubtype,
      //       "Entry": gdNewEntry.Entry,
      //       "Subject": gdNewEntry.Subject,
      //       "BriefGeneralDiary": gdNewEntry.BriefGeneralDiary
      //     }

      //     tempArray[0][indexOfEditedGd] = gdNewEntry[0];
      //     //console.log(tempArray);
      //     // let gdData = {
      //     //   "userId": localStorage.getItem('userId'),
      //     //   "entries": tempArray,
      //     // }
      //     // this.update(gdData, gdIdOfUser).subscribe((resp) => {
      //     //   console.log(resp);
      //     // })

      //   } else {
      //     console.log("gd with gdId not found for current user in db, maybe another user");
      //     alert("Edit request denied : "+gdNewEntry.GdId+" added by other user!");

      //   }

      // } else {
      //   console.log("unable to find user with userid");

      // }

