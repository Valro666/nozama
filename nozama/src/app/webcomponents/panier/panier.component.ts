import { Component, OnInit } from '@angular/core';


import { Article } from 'src/app/class/article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: Array<Article>
  prixtttab:number
  prixtt = 0
  constructor() { }


  ngOnInit(): void {
    this.panier = JSON.parse(localStorage.getItem('panier'));
    
    
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
    this.prixtt=this.prixtt+x.prixtotal
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
