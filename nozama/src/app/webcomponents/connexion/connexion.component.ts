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
  message = "";
  info = { login: null, pass: null }
  constructor(private http: HttpClient, private router: Router, private session: InfoService) { }

  ngOnInit(): void {
  }

  tentative() {


    this.http.get<Client>("http://localhost:8080/tp/client/" + this.info.login + "/" + this.info.pass).subscribe(reponse => {

      if (reponse == null) {
        this.message = "error";

      } else {
        this.message = JSON.stringify(reponse);
        this.session.logged = true;
        this.session.client = reponse;
        this.router.navigate(["/", "deconnexion"]);
      }
    }, err => {
      this.message = "erreur login/mot de passe";
    })
  }

}
