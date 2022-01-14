import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  message = "";
  ckeckEntry = "";
  //  data: Client;
  data = { login: "", mail: "", pass: "", nom: "", prenom: "" };
  confirme = "";
  brutal = true;

  reussite = false;
  constructor(private info: InfoService) { }

  ngOnInit(): void {
    let ic = JSON.parse(this.info.infoclient());

    this.data.login = ic.login;
    this.data.mail = ic.mail;
    this.data.pass = ic.pass;
    this.data.nom = ic.nom;
    this.data.prenom = ic.prenom;
    this.brutalCheck();
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

  updateClient() {
    this.info.updateClient(this.data)
  }

  autrelog() {
    if (localStorage.getItem("error_inscription") == "echec") {
      return true;
    }
    return false;

  }


}
