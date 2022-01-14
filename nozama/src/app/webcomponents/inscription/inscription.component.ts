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
  confirme = "";
  brutal = false;
  reussite = false;
  constructor(private info: InfoService) { }

  ngOnInit(): void {
    this.brutalCheck();
  }

  tentative() {
    this.info.inscription(this.data);
  }

  brutalCheck() {
      let l = !this.vide(this.data.login);
      let p = !this.vide(this.data.pass);
      let m = !this.vide(this.data.mail);
      let n = !this.vide(this.data.nom);
      let pr = !this.vide(this.data.prenom);
      let c = !this.vide(this.confirme);
      let vide = (l && p && m && n && pr && c);

      let mdp = (this.data.pass == this.confirme)
      let res = vide && mdp;
      //this.info.debugerr(l + " " + p + " " + m + " " + n + " " + pr + " " + c + " = " + vide + " & " + mdp + " = " + res + JSON.stringify(this.data) + " " + this.confirme)
      this.brutal = !res;
      //return vide;
    
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
