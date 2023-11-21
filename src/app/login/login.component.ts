import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MenuService } from '../services/menu.service';
import { userData } from '../models/user';
import { RegistrationService } from '../services/registration.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogBoxComponent } from '../dialogbox/login-dialog-box/login-dialog-box.component';

export interface loginMsg {
  name: string;
  role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Angular 16 Crud example';
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private menuservice: MenuService, private regServ: RegistrationService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userid: ['KA340066302', Validators.required],
      password: ['Ankit@123', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } { return this.form.controls; }

  onSubmit() {
    let isUserAuthorized: boolean;
    let userDataArray: Array<userData> = [];
    this.regServ.fetchAllUser().subscribe(resp => {
      for (let i of resp) {
        userDataArray.push(i);
      }
      for (let i of userDataArray) {
        if (this.f.userid.value == i.userid && this.f.password.value == i.password) {
          isUserAuthorized = true;
          localStorage.setItem('name', i.name);
          localStorage.setItem('role', i.role);
          localStorage.setItem('location', i.location);
          break;
        }
      }

      if (isUserAuthorized) {
        sessionStorage.setItem("LoginValue", "True");
        sessionStorage.setItem("userMenu", JSON.stringify(this.menuservice.getMenu()));
        window.location.href = "cctns/dashboard";
        //this.openDialogForLogIn();
      }
      else {
        this.router.navigateByUrl('cctns/login');
        this.form.reset();
      }
    })
  }

  openDialogForLogIn() {
    //alert("console called");
    this.dialog.open(LoginDialogBoxComponent, {
      data: {
        name: localStorage.getItem('name'),
        role: localStorage.getItem('role')
      },
    });
  }
  

  // onSubmit1() {
  //   if (this.f.username.value == 'Test' && this.f.password.value == 'Test@123') {
  //     sessionStorage.setItem("LoginValue", "True");
  //     sessionStorage.setItem("role", "user");
  //     sessionStorage.setItem("userMenu", JSON.stringify(this.menuservice.getMenu()));
  //     window.location.href = "cctns/dashboard";
  //   }
  //   else if (this.f.username.value == 'Admin' && this.f.password.value == 'Test@123') {
  //     sessionStorage.setItem("LoginValue", "True");
  //     sessionStorage.setItem("role", "admin");
  //     sessionStorage.setItem("userMenu", JSON.stringify(this.menuservice.getMenu()));
  //     window.location.href = "cctns/dashboard";
  //   }
  //   else {
  //     this.router.navigateByUrl('cctns/login');
  //     this.form.reset();
  //   }
  // }

}