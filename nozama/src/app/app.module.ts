import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './webcomponents/nav/nav.component';
import { Nav2Component } from './webcomponents/nav2/nav2.component';
import { FooterComponent } from './webcomponents/footer/footer.component';
import { ArticleComponent } from './webcomponents/article/article.component';
import { ConnexionComponent } from './webcomponents/connexion/connexion.component';
import { InscriptionComponent } from './webcomponents/inscription/inscription.component';
import { DeconnexionComponent } from './webcomponents/deconnexion/deconnexion.component';
import { ConfigCompteComponent } from './webcomponents/config-compte/config-compte.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Nav2Component,
    FooterComponent,
    ArticleComponent,
    ConnexionComponent,
    InscriptionComponent,
    DeconnexionComponent,
    ConfigCompteComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
