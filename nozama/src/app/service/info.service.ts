import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ANALYZE_FOR_ENTRY_COMPONENTS, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Catesous } from '../model/catesous';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class InfoService {



  logged = false;
  client: Client;
  readonly adresse_serv = "http://localhost:8080/tp/";

  catesous: any;
  constructor(private http: HttpClient, private router: Router,) { }


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
        this.debugerr("victoire")
        //this.router.navigate(["/", "connexion"]);
      },
      err => {
        let tr = JSON.stringify(err)
        this.debugerr("error update")
        //localStorage.setItem("error_inscription", "echec")
      })
  }

  getAllCateSous() {
    this.http.get("http://localhost:8080/tp/api/article/catesous").subscribe(
      rep => {
        //alert(rep)
        this.debugerr("win " + JSON.stringify(rep))
      }, err => {
        //alert()
        this.debugerr("error " + JSON.stringify(err))
      }
    );
  }

  debugerr(txt) {
    localStorage.setItem("debug", txt)
  }
  private inscription2(json) {

    const body = JSON.stringify(json);
    this.http.post(this.adresse_serv + "client/", body, {

      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(
      reponse => {
        //alert("victoire " + JSON.stringify(reponse))
        localStorage.setItem("error_inscription", "win")
        this.router.navigate(["/", "connexion"]);
      },
      err => {
        let tr = JSON.stringify(err)

        localStorage.setItem("error_inscription", "echec")
      })
  }
  inscription(json) {

    this.http.get<Client>(this.adresse_serv + "client/" + json.login).subscribe(
      rep => {
        this.debugerr(JSON.stringify(rep) + " " + json.login)
        localStorage.setItem("error_inscription", "echec")
      },
      err => {
        this.inscription2(json);
      }
    );

    return "win";
  }

  infoclient() {
    return localStorage.getItem("infoclient")
  }
  toinfoclient(json) {
    return localStorage.setItem("infoclient",JSON.stringify(json))
  }


}
