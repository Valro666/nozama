import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  debug = "debug ";

  constructor(private router: Router, private info: InfoService) { }

  ngOnInit(): void {
    this.debug = this.debug + sessionStorage.getItem("etat_service")
  }
  deco() {
    //sessionStorage.setItem("client_logged", "false");
    //sessionStorage.setItem("client_stringifier", "");
    this.info.client = null;
    this.info.logged = false;
    this.router.navigate(["/", "connexion"]);
    sessionStorage.setItem("etat_service", null);
  }
}
