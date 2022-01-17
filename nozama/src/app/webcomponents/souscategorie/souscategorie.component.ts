import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/class/article';

@Component({
  selector: 'app-souscategorie',
  templateUrl: './souscategorie.component.html',
  styleUrls: ['./souscategorie.component.css']
})
export class SouscategorieComponent implements OnInit {
  souscat:string
  nbAritcles:number
  article:Article
  tabArticles:any
    
    constructor(private http : HttpClient, private route: ActivatedRoute, private router : Router ) { }
  
    ngOnInit(): void {

      this.route.params.subscribe(params => {
        this.souscat = params['souscat'];
        
  
      });

      this.http.get<Article>("http://localhost:8080/tp/api/articleSousCatCon/"+this.souscat).subscribe(
        response => {
          this.tabArticles= response;
          this.article=this.tabArticles[0];
          
        },
        err => {
          console.log("**********KO")
        }
      );
    };
  
    buildArr(theArr: Article[]): Article[][]{
  
      var arrOfarr = [];
      for(var i = 0; i < theArr.length ; i+=5) {
          var row = [];
  
          for(var x = 0; x < 5; x++) {
            var value = theArr[i + x];
              if (!value) {
                  break;
              }
              row.push(value);
          }
          arrOfarr.push(row);
      }
       return arrOfarr;
    }
}
