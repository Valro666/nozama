import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-con-ins',
  templateUrl: './con-ins.component.html',
  styleUrls: ['./con-ins.component.css']
})
export class ConInsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  selector: String = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.choix(params['select']);
      //this.choix("log");
      alert(this.selector)
    });
  }



  choix(a) {
    this.selector = a;
  }

}
