import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class InfoService {


  static single: InfoService;

  logged = false;
  client: Client;
  adresse_serv = "http://localhost:8080/tp";
  constructor(private http: HttpClient, private router: Router,) { }




}
