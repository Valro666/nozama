import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  panier:any;
  activation ="active";
  title = 'nozama';
  ngOnInit(): void {
    this.createPanier();
  }

  createPanier(){

    sessionStorage.setItem("panier",this.panier);
  }
}
