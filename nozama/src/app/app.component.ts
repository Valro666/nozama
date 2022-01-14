import { Component, OnInit } from '@angular/core';
import { InfoService } from './service/info.service';
import { Article } from './class/article';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  panier: Array<Article> = [];

  activation = "active";
  title = 'nozama';
  ngOnInit(): void {
    if (localStorage.getItem('panier') == null) {
      this.createPanier();
    }
    if (sessionStorage.getItem("etat_service") != null) {
      alert("recuperation !")
    }
    this.verou();


  }

  verou() {
   // let b = JSON.parse(localStorage.getItem("etat_service"))[0]
   // alert(b)
    if (localStorage.getItem("etat_service") == null) {
      return true;
    }
    return false;
  }

  err() {
    return localStorage.getItem("debug")
  }
  createPanier() {


    localStorage.setItem("panier", JSON.stringify(this.panier));
    console
  }

  truc() {
    localStorage.setItem("tarte", "tarte")
  }

  gettarte() {
    return localStorage.getItem("tarte") + " <------";
  }

  clear() {
    localStorage.clear();
  }
}
