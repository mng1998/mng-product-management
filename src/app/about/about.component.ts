import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageTitile = "Angular Project";
  name="MNG";
  subtitle="Product Management";
  intro = "Introduction";
  detail= "Detail";
  details = ['Component', 'Service', 'RxJS and Observable', 'Routing','Reactive Forms & Validator', 'CRUD using HTTP'];
  content="The project covers the same major topics — components, template syntax, routing, services, and accessing data via HTTP—in a condensed format, following Angular Tutorial."
  photoUrl:'https://startinfinity.s3.us-east-2.amazonaws.com/t/L2rtmhCAyzk1yvyUrMd7I6DTi5Et4d1DdnEuNM2J.png';
  constructor() { }

  ngOnInit(): void {
  }

}
