import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './webcomponents/article/article.component';
import { ConnexionComponent } from './webcomponents/connexion/connexion.component';
import { DeconnexionComponent } from './webcomponents/deconnexion/deconnexion.component';
import { InscriptionComponent } from './webcomponents/inscription/inscription.component';
import { PanierComponent } from './webcomponents/panier/panier.component';
import { AcceuilComponent } from './webcomponents/acceuil/acceuil.component';
import { SouscategorieComponent } from './webcomponents/souscategorie/souscategorie.component';
import { CategorieComponent } from './webcomponents/categorie/categorie.component';
import { ProfilComponent } from './webcomponents/profil/profil.component';
import { ConInsComponent } from './webcomponents/con-ins/con-ins.component';
import { AchatwinComponent } from './webcomponents/achatwin/achatwin.component';

const routes: Routes = [
  { path: 'article/:id', component: ArticleComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'souscategorie/:souscat', component: SouscategorieComponent },
  { path: 'categorie/:categorie', component: CategorieComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'con-ins', component: ConInsComponent },
  { path: 'con-ins/:select', component: ConInsComponent },
  { path: 'achatwin', component: AchatwinComponent },
  //{ path: 'achatok', component: AchatokComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
