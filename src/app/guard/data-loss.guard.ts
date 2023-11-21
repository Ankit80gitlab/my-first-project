import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../externalcomponent/register/register.component';

@Injectable({
  providedIn: 'root'
})

export class dataLossGuard {

  canDeactivate(
    component: RegisterComponent,
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.isUserRegistered===true){
      return true;
    }
    else {
      if (window.confirm("You might have some unsaved data")) {
        return true;
      }
      else return false;
    }
  }
}

