import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    ListRestoComponent,
    HeaderComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
