import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './webcomponents/article/article.component';
import { ConnexionComponent } from './webcomponents/connexion/connexion.component';
import { DeconnexionComponent } from './webcomponents/deconnexion/deconnexion.component';
import { InscriptionComponent } from './webcomponents/inscription/inscription.component';
import { PanierComponent } from './webcomponents/panier/panier.component';

const routes: Routes = [
  { path: 'article/:id', component: ArticleComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'panier', component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
