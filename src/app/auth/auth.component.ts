import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login = true;
  singup = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarLogin(estado : boolean){
    this.login = estado;
    this.singup = false;
  }

  cambiarSingup(estado : boolean){
    this.singup = estado;
    this.login = false;
  }

}
