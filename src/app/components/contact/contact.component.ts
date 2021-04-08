import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('textos') texto: any;

  constructor() { }

  ngOnInit(){
   console.log(this.texto);
  }
}
