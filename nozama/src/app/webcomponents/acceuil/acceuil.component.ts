import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/article';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
nbAritcles:number
article:Article
tabArticles:any
  
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<Article>("http://localhost:8080/tp/api/article").subscribe(
      response => {
        this.tabArticles= response;
        
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


