import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  client: Client;
  message = "";
  info = { login: "", pass: "" }
  constructor(private http: HttpClient, private router: Router, private session: InfoService) { }

  ngOnInit(): void {
    this.brutal()
  }

  tentative() {


    this.http.get<Client>("http://localhost:8080/tp/client/" + this.info.login + "/" + this.info.pass).subscribe(reponse => {

      if (reponse == null) {
        this.message = "error";

      } else {
        this.client = reponse;
        this.router.navigate(["/", "acceuil"]);
        let j = JSON.stringify(["true", ""]);
        localStorage.setItem("etat_service", j)
        localStorage.setItem("infoclient", JSON.stringify(this.client));
        //sessionStorage.setItem("etat_service", "JSON.stringify(this.session)")
        //this.session.toSession()
      }
    }, err => {
      this.message = "erreur login/mot de passe";
    })
  }

  brutal() {
    let l = !(this.info.login == "");
    let p = !(this.info.pass == "");
    let lp = !(l&&p);
    this.session.debugerr(l+" & "+p+" = "+lp)

    return lp
  }

  error() {
    if (this.message == "error")
      return true;

    return false;
  }

}
