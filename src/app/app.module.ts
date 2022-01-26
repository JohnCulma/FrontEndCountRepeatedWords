import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Usuario/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TextComponent } from './Usuario/text/text.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
