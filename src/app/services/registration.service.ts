import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userData } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

    baseUrl = "http://localhost:3000/user";

    fetchAllUser() {
      return this.http.get<userData[]>(this.baseUrl);
  }

    register(user: any) {
      return this.http.post("http://localhost:3000/user", user);
  }
}
