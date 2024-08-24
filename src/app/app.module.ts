import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faFileAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
// PrimeNG Modules
import { StepsModule } from 'primeng/steps';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    NavBarComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    StepsModule,
    InputTextModule,
    PasswordModule,
    InputTextModule,
    NgApexchartsModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    RippleModule
    

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
