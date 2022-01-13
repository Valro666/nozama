import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  message = "";
  ckeckEntry = "";
  //  data: Client;
  data = { login: "", mail: "", pass: "", nom: "", prenom: "" };

  reussite = false;
  constructor(private info: InfoService) { }

  ngOnInit(): void {
  }

  tentative() {
    this.info.inscription(this.data);
  }

  brutalCheck() {
    return this.vide(this.data.login) || this.vide(this.data.pass) || this.vide(this.data.mail) || this.vide(this.data.nom) || this.vide(this.data.prenom)
  }

  vide(txt) {
    if (txt == "") {
      return true;
    }
    return false;
  }

  autrelog() {
    if (localStorage.getItem("error_inscription") == "echec") {
      return true;
    }
    return false;

  }

  stringy() {
    return JSON.stringify(this.data)
  }

  debug() {
    return localStorage.getItem("error_inscription");
  }

}
