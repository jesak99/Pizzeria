import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  hide = true;

  constructor(private userService : UserService, private sessionService:SessionService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    const email : string = this.form.value.email;
    const password : string = this.form.value.password;
    var valido = this.userService.getUser(email, password);
    if(valido==true){
      console.log("Usuario ingresado");
      this.sessionService.sesionIniciada();
      this.router.navigate(['/nuestras-pizzas']);
    }else{
      
    }
  }

}
