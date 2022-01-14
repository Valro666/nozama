import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/class/article';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorie: string
  nbAritcles: number
  article: Article
  tabArticles: any

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.init()
  };
  ngOnChanges() {
    this.init();
  }
  init() {
    this.route.params.subscribe(params => {
      this.categorie = params['categorie'];
    });

    this.http.get<Article>("http://localhost:8080/tp/api/articleCatCon/" + this.categorie).subscribe(
      response => {
        this.tabArticles = response;
      },
      err => {
        console.log("**********KO")
      }
    );
  }

  buildArr(theArr: Article[]): Article[][] {

    var arrOfarr = [];
    for (var i = 0; i < theArr.length; i += 5) {
      var row = [];

      for (var x = 0; x < 5; x++) {
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
