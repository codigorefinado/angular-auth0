import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { Auth } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent, ProfileComponent, HomeComponent
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
export class AppModule{
}

