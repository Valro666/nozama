import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private session: InfoService) {

  }

  islogged() {
    let log = JSON.parse(sessionStorage.getItem("etat_service"));
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
  }


  clear_sessionStorage() {
    sessionStorage.clear();
  }
}
