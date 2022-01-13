import { Component, OnInit } from '@angular/core';

import { Article } from 'src/app/class/article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
panier:Array<Article>
  constructor() { }


  ngOnInit(): void {
    this.panier = JSON.parse(sessionStorage.getItem('panier'));
  }

  deletearticle(x){

     this.panier.splice(x,1);
     sessionStorage.setItem("panier", JSON.stringify(this.panier));
    

  }
  
}
