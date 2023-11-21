import { Component, Injectable, RendererFactory2 } from '@angular/core';
import { userData } from 'src/app/models/user';
import { RegistrationService } from './registration.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TimeoutService } from './timeout.service';

@Injectable({
  providedIn: 'root'
})

export class DownloadService {

  constructor(private sanitizer: DomSanitizer) {
  }

  fileUrl!: any;

  download(data: any) {
    const blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    //var fileOfBlob = new File([blob], 'userdata.txt');
    //this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
