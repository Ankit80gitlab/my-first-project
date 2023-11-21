import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Menu } from '../../models/Menu';
import { AppComponent } from '../../app.component';
import { MenuService } from '../../services/menu.service';
import { IdleLogoutDialogComponent } from 'src/app/dialogbox/idle-logout-dialog/idle-logout-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogBoxComponent } from 'src/app/dialogbox/logout-dialog-box/logout-dialog-box.component';

export interface logout {
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  form!: FormGroup;
  name = 'Angular ';
  menu: Menu[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appcom: AppComponent,
    private menuservice: MenuService,
    private dialog: MatDialog
  ) {
    this.menu = JSON.parse(sessionStorage.getItem("userMenu") || "");
  }

  logout() {
    this.openDialogForLogout();
  }

  openDialogForLogout(): void {
    const dialogRef = this.dialog.open(LogoutDialogBoxComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("download req confirmed " + result);
        sessionStorage.removeItem("LoginValue");
        localStorage.removeItem("welcome");
        localStorage.removeItem("name");
        localStorage.removeItem("role");
        window.location.href = "cctns/login";
        this.form.reset();
      } else {
        console.log("download req denied " + result);
      }
    });
  }

}
