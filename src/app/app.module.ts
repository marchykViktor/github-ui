import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, EventEmitter } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { GetInfoService, InfoService, UserListComponent, AppRoutingModule, UserDetailsModule, MaterialModule } from "./index";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent, FooterComponent } from './index';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpModule,
    UserDetailsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [GetInfoService, InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
