import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './webcomponents/nav/nav.component';
import { Nav2Component } from './webcomponents/nav2/nav2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Nav2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
