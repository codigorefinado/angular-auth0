import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { Auth } from './services/auth.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,  ProfileComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    // appRoutingProviders,
    // AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

