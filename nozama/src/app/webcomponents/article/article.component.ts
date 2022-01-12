import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
id:number
article:any
avis:any
newavis ={articleId:0 , auteur_id : NaN , commentaire : null , titre : null , note : NaN}
message:string
moyenne:any
  
  constructor(private http : HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      this.newavis.articleId = params['id'];
      
    });
    this.initarticle();
    this.initavis();
    this.initCalcul();
    
  }
  
  initarticle()
  {

    this.http.get("http://localhost:8080/tp/api/article/" + this.id).subscribe(
     
      response => {
        this.article = response
      }, err => {
        console.log("ID inexistant");
        
        this.message = "ID inexistant";
      }
    )
  }

  initavis(){

    this.http.get("http://localhost:8080/tp/api/avisArticleId/" + this.id).subscribe(
     
      response => {
        this.avis = response
      }, err => {
        console.log("ID inexistant");
        
        this.message = "ID inexistant";
      }
    )
  }

  initCalcul(){
  
  }

  addavis(){
    
  
    const body = JSON.stringify(this.newavis);
    this.http.post("http://localhost:8080/tp/api/avis", body,{
      headers : new HttpHeaders({
        "Content-Type": "application/json"
      })

      

    }).
    subscribe(response => {

      console.log("crud service post OK");
      

    },

      err => {
        console.log("crud service post KO")
        
      });

  }

  unetoile(){
    this.newavis.note = 1;
  }
  detoile(){
    this.newavis.note = 2;
  }
  troitoile(){
    this.newavis.note = 3;
  }
  quatoile(){
    this.newavis.note = 4;
  }
  cintoile(){
    this.newavis.note = 5;
  }
}


