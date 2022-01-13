import { Component, OnInit } from '@angular/core';
import { Article } from './class/article';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  activation ="active";
  title = 'nozama';
  
  ngOnInit(): void {
    this.createPanier();
  }

  createPanier(){


  }
}
