import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Article } from 'src/app/class/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id: number
  article: Article
    ;
  panier: Array<Article>;
  avis: any
  newavis = { articleId: 0, auteurId: null, commentaire: null, titre: null, note: NaN }
  message: string
  moyenne: any
  


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.newavis.articleId = params['id'];

    });
    this.initarticle();
    this.initavis();
    this.initCalcul();

  }

  addpanier() {
    let trouver=false;
    this.panier = JSON.parse(localStorage.getItem('panier'));
    this.panier.forEach(element => {
      if(element.id == this.id){
        element.quantite = element.quantite + this.article.quantite;
        trouver=true;
      }
      
      
    });
    if(trouver == false){
      this.panier.push(this.article);
    }
    localStorage.setItem("panier", JSON.stringify(this.panier));
    this.router.navigate(["/", "panier"]);
  }

  initarticle() {

    this.http.get<Article>("http://localhost:8080/tp/api/article/" + this.id).subscribe(

      response => {
        this.article = response
      }, err => {
        console.log("ID inexistant");

        this.message = "ID inexistant";
      }
    )
  }

  initavis() {

    this.http.get("http://localhost:8080/tp/api/avisArticleId/" + this.id).subscribe(

      response => {
        this.avis = response
      }, err => {
        console.log("ID inexistant");

        this.message = "ID inexistant";
      }
    )
  }

  initCalcul() {

  }

  addavis() {

    
    let b = JSON.parse(localStorage.getItem('infoclient'));
    this.newavis.auteurId = b.nom + " " + b.prenom;

    const body = JSON.stringify(this.newavis);
    this.http.post("http://localhost:8080/tp/api/avis", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })



    }).
      subscribe(response => {

        console.log("crud service post OK");


      },

        err => {
          console.log("crud service post KO")

        });

        
        this.newavis.commentaire=null;
        this.newavis.titre=null;
        
        
  }

  unetoile() {
    this.newavis.note = 1;
  }
  detoile() {
    this.newavis.note = 2;
  }
  troitoile() {
    this.newavis.note = 3;
  }
  quatoile() {
    this.newavis.note = 4;
  }
  cintoile() {
    this.newavis.note = 5;
  }

  test(note) {

    let toile;
    switch (note) {

      case 1: toile = "★"; break;
      case 2: toile = "★★"; break;
      case 3: toile = "★★★"; break;
      case 4: toile = "★★★★"; break;
      case 5: toile = "★★★★★"; break;
    }
    return toile
  }


}


