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

const routes: Routes = [
  { path: 'article/:id', component: ArticleComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'souscatégorie/:souscat', component: SouscategorieComponent },
  { path: 'categorie/:categorie', component: CategorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
