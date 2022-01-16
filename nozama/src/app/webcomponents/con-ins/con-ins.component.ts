import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-con-ins',
  templateUrl: './con-ins.component.html',
  styleUrls: ['./con-ins.component.css']
})
export class ConInsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private info: InfoService) { }

  //selector: String = "ins";

  ngOnInit(): void {

    //this.selector = this.info.getConins();

  }

  selector(){
    return this.info.getConins();
  }

  choix(a) {
    this.info.setConins(a);
  }

}
