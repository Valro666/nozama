import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  log = sessionStorage.getItem("client_logged")
  log2 = sessionStorage.getItem("client_stringifier")
  truc = "";
  constructor() { }



  ngOnInit(): void {
  }
  maj() {
    this.log = sessionStorage.getItem("client_logged")
    this.log2 = sessionStorage.getItem("client_stringifier")
  }
}
