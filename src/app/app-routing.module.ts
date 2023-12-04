import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './authenticate/common/dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {GdentryaddComponent} from './authenticate/gdentry/gdentryadd/gdentryadd.component';
import {GdentryviewComponent} from './authenticate/gdentry/gdentryview/gdentryview.component';
import {AboutUsComponent} from './externalcomponent/about-us/aboutus.component';
import {HomeComponent} from './externalcomponent/home/home.component';
import{CitizenInformationComponent} from './externalcomponent/citizen-info/citizeninformation.component';
import {OnlineServicesComponent} from './externalcomponent/online-services/onlineservices.component';
import {GalleryComponent} from './externalcomponent/gallery/gallery.component';
import {ContactUsComponent} from './externalcomponent/contact-us/contactus.component';
import { RegisterComponent } from './externalcomponent/register/register.component';
import { dataLossGuard } from './guard/data-loss.guard';
import { GdEntryGuard } from './guard/gd-entry-guard';
import { GdMainComponent } from './authenticate/gdentry/gd-main/gd-main.component';
import { ComplaintMainComponent } from './authenticate/complaint/complaint-main/complaint-main.component';
import { ChatbotComponent } from './externalcomponent/chatbot/chatbot.component';
import { TestComponent } from './authenticate/testing_component/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: 'cctns/home', pathMatch: 'full' },
  { path: 'cctns/home',component:HomeComponent},
  { path: 'cctns/dashboard', component: DashboardComponent },
  { path: 'cctns/login', component: LoginComponent },
  { path: 'cctns/register', component: RegisterComponent, canDeactivate:[dataLossGuard] },
  {
    path: 'cctns/gdmain', component: GdMainComponent, canActivateChild:[GdEntryGuard], children: [
      { path: 'add', component: GdentryaddComponent,},
      { path: 'view', component: GdentryviewComponent,}
    ]
  },
  { path:'cctns/complaint',component:ComplaintMainComponent} ,
  { path:'cctns/aboutus',component:AboutUsComponent} ,
  { path:'cctns/citizeninformation',component:CitizenInformationComponent} ,
  { path:'cctns/onlineservices',component:OnlineServicesComponent} ,
  { path:'cctns/gallery',component:GalleryComponent} ,
  { path:'cctns/contactus',component:ContactUsComponent} , 
  { path:'cctns/chatbot',component:ChatbotComponent},
  { path:'cctns/test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }