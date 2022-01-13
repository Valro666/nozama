import { HttpClient } from '@angular/common/http';
import { ANALYZE_FOR_ENTRY_COMPONENTS, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class InfoService {



  logged = false;
  client: Client;
  readonly adresse_serv = "http://localhost:8080/tp";
  constructor(private http: HttpClient, private router: Router,) { }


 // toSession() {
    // let txt = "{logged :" + JSON.stringify(this.logged) + "}";
    // sessionStorage.setItem("etat_service", JSON.stringify([this.logged, this.client]))// <---


  //}

  //fromSession() {
    /* if (sessionStorage.getItem("etat_service") != null) {
       let j = JSON.parse(sessionStorage.getItem("etat_service"));
       this.logged = j[0];
       this.client = j[1];
     } else {
 
     }//*/

  //}

}
