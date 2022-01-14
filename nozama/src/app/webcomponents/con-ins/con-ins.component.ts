import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-con-ins',
  templateUrl: './con-ins.component.html',
  styleUrls: ['./con-ins.component.css']
})
export class ConInsComponent implements OnInit {

  constructor() { }

  selector = "";

  ngOnInit(): void {
  }

  choix(a) {
    this.selector = a;
  }

}
