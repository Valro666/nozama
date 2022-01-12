import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  deco() {
    sessionStorage.setItem("client_logged", "false");
    sessionStorage.setItem("client_stringifier", "");
    this.router.navigate(["/", "connexion"]);
  }
}
