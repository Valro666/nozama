import { Component, OnInit } from '@angular/core';


import { Article } from 'src/app/class/article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: Array<Article>
  prixtttab:number[]
  prixtt = 0
  span : any[]
  login:any
 
  constructor() { }


  ngOnInit(): void {
    this.panier = JSON.parse(localStorage.getItem('panier'));
    this.login = JSON.parse(localStorage.getItem("infoclient")).nom;
    
  }

  sendpanier(){
    var sp
    var ligne
    this.panier.forEach(element => {
      ligne = ligne + [element , element.quantite]
    });

    var date = "2022-01-13T23:00:00.000+00:00"
     this.span = [this.panier , date ,this.login ];

  }

  deletearticle(x) {

    this.panier.splice(x, 1);
    localStorage.setItem("panier", JSON.stringify(this.panier));


  }

  majpanier(){
    localStorage.setItem("panier", JSON.stringify(this.panier));
  }

  prixligne(x){
    x.prixtotal = x.prix*x.quantite
    
   
    return x.prixtotal
  }

  prixPanier(){
    let sum = 0;
    this.panier.forEach(element => {
      sum += (element.prix*element.quantite)
    });
    return sum;
  }

 

 

}
