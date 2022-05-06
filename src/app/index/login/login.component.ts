import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showPage = 'login';
  constructor(
    private router:Router
  ) {}
  
  ngOnInit(): void {}
  
  changePage(item: string) {
    this.showPage = item;
  }
  checkData(){
    this.router.navigateByUrl('admin');
  }
}
