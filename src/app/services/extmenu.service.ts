import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, forkJoin } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { Menu } from '../models/Menu';
@Injectable({
  providedIn: 'root'
})
export class ExtMenuService {
  menu = [
    { href: "/cctns/home", label: "Home" },
    { href: "/cctns/onlineservices", label: "Online Services" },
    { href: "/cctns/citizeninformation", label: "Citizen Information" },
    { href: "/cctns/gallery", label: "Gallery" },
    { href: "/cctns/aboutus", label: "About Us" },
    { href: "/cctns/register", label: "Register" },
    { href: "/cctns/login", label: "Sign In" },
    
  ]
  constructor(private httpClient: HttpClient) { }
  getExtMenu() {
    return this.menu;

  }





}
