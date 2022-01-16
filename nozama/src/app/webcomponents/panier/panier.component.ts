import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Article } from 'src/app/class/article';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: Array<Article>
  prixtttab: number[]
  prixtt = 0
  span: any[]
  login: any
  spa: any[]

  constructor(private http: HttpClient, private info: InfoService, private route: Router) { }


  ngOnInit(): void {
    this.panier = JSON.parse(localStorage.getItem('panier'));
    this.login = JSON.parse(localStorage.getItem("infoclient")).login;
    this.spa = []

  }

  tmp() {
    let txt = '{"ligne" : [';
    let liste: any[] = []
    this.panier.forEach(element => {
      let art = { "article": { "id": element.id }, "quantity": element.quantite }
      liste.push(art);
    });

    return { "ligne": liste, "client": { "login": this.login } }
    return txt;
  }

  sendpanier() {

    let body = this.tmp();

    this.http.post("http://localhost:8080/tp/panier", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })



    }).
      subscribe(response => {

        console.log("crud service post OK");
        //this.info.debugerr("victoire")
        localStorage.removeItem("panier");
        this.route.navigate(["/achatwin"])

      },

        err => {
          console.log("crud service post KO")
          this.info.debugerr(err)
        });




  }

  deletearticle(x) {

    this.panier.splice(x, 1);
    localStorage.setItem("panier", JSON.stringify(this.panier));


  }

  majpanier() {
    localStorage.setItem("panier", JSON.stringify(this.panier));
  }

  prixligne(x) {
    x.prixtotal = x.prix * x.quantite


    return x.prixtotal
  }

  prixPanier() {
    let sum = 0;
    this.panier.forEach(element => {
      sum += (element.prix * element.quantite)
    });
    return sum;
  }





}
