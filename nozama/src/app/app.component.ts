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
  private info: InfoService
  ngOnInit(): void {
    //sessionStorage.clear()
    this.createPanier();
    //alert(sessionStorage.getItem("etat_service"));
    if (sessionStorage.getItem("etat_service") != null) {
      //this.info.fromSession();
      alert("recuperation !")
    }
    
  }

  createPanier() {

    if(JSON.parse(sessionStorage.getItem('panier'))!=null)
    sessionStorage.setItem("panier", JSON.stringify(this.panier));
  }
}
