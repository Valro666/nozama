import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { tap } from 'rxjs';
import { Article } from '../class/article';
import { Catesous } from '../model/catesous';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  truc: Catesous[];

  logged = false;
  client: Client;
  readonly adresse_serv = "http://localhost:8080/tp/";
  conins = "log";

  catesous: any;
  constructor(private http: HttpClient, private router: Router,) { }

  getConins() {
    return this.conins;
  }

  setConins(ci) {
    this.conins = ci;
  }

  updateClient(json) {
    const body = JSON.stringify(json);
    this.http.put(this.adresse_serv + "client/", body, {

      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(
      reponse => {
        //alert("victoire " + JSON.stringify(reponse))
        //localStorage.setItem("error_inscription", "win")
        //this.debugerr("victoire")
        //this.router.navigate(["/", "connexion"]);
      },
      err => {
        let tr = JSON.stringify(err)
        //this.debugerr("error update")
        //localStorage.setItem("error_inscription", "echec")
      })
  }

  getAllCateSous() {
    this.http.get<Article>("http://localhost:8080/tp/api/article/").subscribe(
      rep => {
        let arr: [] = JSON.parse(JSON.stringify(rep));
        let txt = "";
        let cate: Array<string> = [];
        let sous: Array<string> = [];
        let catesous: Catesous[] = [];
        // recherche des categorie
        for (let index = 0; index < arr.length; index++) {
          let element: Article = arr[index];
          if (!cate.includes(element.categorie, 0)) {
            cate.push(element.categorie)
          }
        }
        // recherche et lien entre categorie et sous categorie
        for (let index = 0; index < cate.length; index++) {
          let element2: string = cate[index];
          let tmp = new Catesous(element2, []);
          for (let index = 0; index < arr.length; index++) {
            let element3: Article = arr[index];
            if (element3.categorie == element2) {
              if (!tmp.sous.includes(element3.sousCategorie, 0)) {
                sous.push(element3.sousCategorie)
                tmp.sous.push(element3.sousCategorie)
              }
            }
          }
          //txt += " " + JSON.stringify(tmp);
          catesous.push(tmp)
        }
        localStorage.setItem("catesous", JSON.stringify(catesous))
        //this.debugerr(JSON.stringify(catesous) + " " + txt)
      }, err => {
        //this.debugerr("error " + JSON.stringify(err))
      }
    );
  }

  debugerr(txt) {
    localStorage.setItem("debug", JSON.stringify(txt))
  }
  inscription(json) {

    const body = JSON.stringify(json);
    this.http.post(this.adresse_serv + "client/", body, {

      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(
      reponse => {
        //this.debugerr("rep "+reponse)
        //alert("victoire " + JSON.stringify(reponse))
        localStorage.setItem("error_inscription", "win")
        this.setConins("log")
        //this.router.navigate(["/con-ins/log"]);
      },
      err => {
        //let tr = JSON.stringify(err)
        let ify = JSON.stringify(err);
        //let json = JSON.parse(err)
        let tmp = JSON.stringify(err.error.error);
        //this.debugerr(tmp+"<------->"+ify)
        localStorage.setItem("error_inscription", "echec")
      })
  }
  private inscription3(json) {

    this.http.get<Client>(this.adresse_serv + "client/" + json.login).subscribe(
      rep => {
        //this.debugerr(JSON.stringify(rep) + " " + json.login)
        localStorage.setItem("error_inscription", "echec")
      },
      err => {
        this.inscription(json);
      }
    );

    return "win";
  }

  infoclient() {
    return localStorage.getItem("infoclient")
  }
  toinfoclient(json) {
    return localStorage.setItem("infoclient", JSON.stringify(json))
  }


}
