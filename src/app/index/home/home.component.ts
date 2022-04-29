import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  text1:string="Consultants’ performance\n verification";
  constructor() { }

  ngOnInit(): void {
  }


  openForm(item:string){
    console.log("item : ",item);
  }

}
