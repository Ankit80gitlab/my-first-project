import {Injectable } from '@angular/core';
``
@Injectable({
    providedIn: 'root'
})
export class TimeoutService {

    //routes where idle logout will not be applicable

    idleTime: number = 300;

    excludeUrlSetTimeout = [
        "/cctns/login",
        "/cctns/home",
        "/cctns/onlineservices",
        "/cctns/citizeninformation",
        "/cctns/gallery",
        "/cctns/aboutus",
        "/cctns/register",
        "/cctns/gdmain/view"
      ];

}
