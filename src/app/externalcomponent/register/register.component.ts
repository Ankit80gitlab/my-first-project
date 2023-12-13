import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userData } from 'src/app/models/user';
import { NotificationService } from 'src/app/services/notification.service';
import { RegistrationService } from 'src/app/services/registration.service';


interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  constructor(private regServ: RegistrationService, private router: Router, private notifyServ: NotificationService) { }

  ngOnInit() {
    this.isUserRegistered = false;
  }

  location: Location[] = [
    { value: 'mumbai', viewValue: 'Mumbai' },
    { value: 'delhi', viewValue: 'Delhi' },
    { value: 'bangalore', viewValue: 'Bangalore' },
  ];

  signUpForm = new FormGroup({
    "name": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required]),
    "location": new FormControl('', [Validators.required])
  })

  generatedUserId: any;
  isUserRegistered: boolean = false;

  register() {
    let prefix = "";
    let suffix = 0;
    let duplicate = false;

    if (this.signUpForm.getRawValue().location == 'bangalore') {
      prefix = "KA";
    } else if (this.signUpForm.getRawValue().location == 'delhi') {
      prefix = "DL";
    } else if (this.signUpForm.getRawValue().location == 'mumbai') {
      prefix = "MH";
    }
    suffix = Math.floor(100000000 + Math.random() * 900000000);
    this.generatedUserId = prefix + suffix;

    let userData: Array<userData> = [];
    //let duplicateUserId = "KA597962656";
    this.regServ.fetchAllUser().subscribe(resp => {
      for (let i of resp) {
        userData.push(i);
      }
      for (let i of userData) {
        if (i.userid == this.generatedUserId) {
          duplicate = true;
          break;
        }
      }
      if (!duplicate) {
        console.log(this.generatedUserId);
        this.regServ.register({
          "name": this.signUpForm.getRawValue().name,
          "email": this.signUpForm.getRawValue().email,
          "userid": this.generatedUserId,
          "password": this.signUpForm.getRawValue().password,
          "role": "user",
          "location": this.signUpForm.getRawValue().location
        }).subscribe(resp => {
          console.log(resp);
          this.isUserRegistered = true;
          alert("You have successfully registered with user id " + this.generatedUserId);
          this.router.navigateByUrl("cctns/login");
        })
        this.notifyServ.addUser({
          "userId": this.generatedUserId,
          "notification": [
            "this is begining",
          ]
        }).subscribe((resp) => {
          console.log(resp);
        })

      } else {
        alert("Duplicate user id found")
        this.signUpForm.reset();
      }
    })
  }


}
