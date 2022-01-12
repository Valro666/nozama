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
message:string
  
  constructor(private http : HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      
    });
    this.init();
  }
  
  init()
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
  

}
