import { Component, Input, OnInit } from '@angular/core';


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

  constructor() { }



  ngOnInit(): void {
    this.truc = this.truc + 1;
    this.maj();
  }
  maj() {
    this.log = sessionStorage.getItem("client_logged")
    this.log2 = sessionStorage.getItem("client_stringifier")
  }
  test() {
    let str = sessionStorage.getItem("client_logged");
    if (str === "false") {
      return false;
    } else {
      return true;
    }
  }
}
