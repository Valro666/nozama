import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Catesous } from 'src/app/model/catesous';
import { InfoService } from 'src/app/service/info.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  log = sessionStorage.getItem("client_logged")
  log2 = sessionStorage.getItem("client_stringifier")
  truc = 0;

  @Input() poule = "";

  constructor(private session: InfoService, private router: Router) {

  }

  islogged() {
    let log = JSON.parse(localStorage.getItem("etat_service"));
    if (log == null) {
      return false;
    }
    return log[0];
    //return this.session.logged;
    //return false;
  }

  ngOnInit(): void {
    this.truc = this.truc + 1;
    //this.maj();
    //this.session.fromSession();
    this.session.getAllCateSous();
  }
  bonjour() {
    let a = JSON.parse(localStorage.getItem("infoclient")).nom + " " + JSON.parse(localStorage.getItem("infoclient")).prenom
    return a
  }

  clear_sessionStorage() {
    localStorage.clear();
  }

  categorie() {
    let c = localStorage.getItem("catesous");
    let cc = <any>{};
    cc  = JSON.parse(c);
    //this.session.debugerr(cc[1].sous)
    return cc;
  }

  refresh(cat){
    this.router.navigate(["/acceuil"]);
    this.router.navigate(["/categorie/" + cat]);
    //window.location.reload()
  }
}
