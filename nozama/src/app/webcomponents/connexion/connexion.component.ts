import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  message = "";
  info = { login: null, pass: null }
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  tentative() {


    this.http.get<Client>("http://localhost:8080/tp/client/" + this.info.login + "/" + this.info.pass).subscribe(reponse => {

      if (reponse == null) {
        this.message = "error"
        sessionStorage.setItem("client_logged", "false");
        sessionStorage.setItem("client_stringifier", "");
      } else {
        this.message = JSON.stringify(reponse);
        sessionStorage.setItem("client_stringifier", JSON.stringify(reponse));
        sessionStorage.setItem("client_logged", "true");
        this.router.navigate(["/", "deconnexion"]);
      }
    }, err => {
      this.message = "erreur login/mot de passe";
    })
  }

}
