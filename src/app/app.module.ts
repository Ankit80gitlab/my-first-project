import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideUserIdleConfig } from 'angular-user-idle';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './authenticate/common/dashboard/dashboard.component';
import { IntFooterComponent } from './redirection/footer/int-footer.component';
import { IntHeaderComponent } from './redirection/header/int-header.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './redirection/navigation/nav.component';
import { ExtHeaderComponent } from './redirection/header/ext-header.component';
import { ExtFooterComponent } from './redirection/footer/ext-footer.component';
import { GdentryaddComponent } from './authenticate/gdentry/gdentryadd/gdentryadd.component';
import { GdentryviewComponent } from './authenticate/gdentry/gdentryview/gdentryview.component';
import { ExtNavComponent } from './redirection/navigation/ext-nav.component';
import { HomeComponent } from './externalcomponent/home/home.component';
import { CitizenInformationComponent } from './externalcomponent/citizen-info/citizeninformation.component';
import { OnlineServicesComponent } from './externalcomponent/online-services/onlineservices.component';
import { GalleryComponent } from './externalcomponent/gallery/gallery.component';
import { ContactUsComponent } from './externalcomponent/contact-us/contactus.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { TestComponent } from './authenticate/testing_component/test/test.component';
import { RegisterComponent } from './externalcomponent/register/register.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginDialogBoxComponent } from './dialogbox/login-dialog-box/login-dialog-box.component';
import { GdMainComponent } from './authenticate/gdentry/gd-main/gd-main.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { DataService } from './services/data.service';
import { IdleLogoutDialogComponent } from './dialogbox/idle-logout-dialog/idle-logout-dialog.component';
import { LogoutDialogBoxComponent } from './dialogbox/logout-dialog-box/logout-dialog-box.component';
import { ComplaintMainComponent } from './authenticate/complaint/complaint-main/complaint-main.component';
import { ComplaintAddComponent } from './authenticate/complaint/complaint-add/complaint-add.component';
import { ComplaintViewComponent } from './authenticate/complaint/complaint-view/complaint-view.component';
import { ChatbotComponent } from './externalcomponent/chatbot/chatbot.component';
import { MatIconModule } from '@angular/material/icon'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RecaptchaModule} from 'ng-recaptcha';
import { NgComponentComponent } from './authenticate/ng-component/ng-component/ng-component.component'
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { NotificationDialogBoxComponent } from './dialogbox/notification-dialog-box/notification-dialog-box.component';
import { GdAddDialogBoxComponent } from './dialogbox/gd-add-dialog-box/gd-add-dialog-box.component';
import {MatTabsModule} from '@angular/material/tabs';
import { GdentryeditComponent } from './authenticate/gdentry/gdentryedit/gdentryedit.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IntFooterComponent,
    IntHeaderComponent,
    LoginComponent,
    NavComponent,
    ExtHeaderComponent,
    ExtFooterComponent,
    GdentryaddComponent,
    GdentryviewComponent,
    ExtNavComponent,
    HomeComponent,
    CitizenInformationComponent,
    OnlineServicesComponent,
    GalleryComponent,
    ContactUsComponent,
    TestComponent,
    RegisterComponent,
    LoginDialogBoxComponent,
    GdMainComponent,
    IdleLogoutDialogComponent,
    LogoutDialogBoxComponent,
    ComplaintMainComponent,
    ComplaintAddComponent,
    ComplaintViewComponent,
    ChatbotComponent,
    NgComponentComponent,
    NotificationDialogBoxComponent,
    GdAddDialogBoxComponent,
    GdentryeditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatAutocompleteModule,
    RecaptchaModule,
    MatBadgeModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    MatProgressBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgIdleKeepaliveModule.forRoot(),

  ],
  providers: [BnNgIdleService, provideUserIdleConfig({ idle: 10, timeout: 10, ping: 10 }),
    DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }