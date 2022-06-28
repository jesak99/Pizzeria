import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  form!: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      nombre: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    const email = this.form.value.correo;
    const name = this.form.value.nombre;
    const password = this.form.value.password;
    const existe = this.userService.existe(email);
    if(existe == true){
      //this.dialog.open(DialogExisteComponent);
    }else{
      const user = new User(email,name,password,"cliente");
      this.userService.addUser(user);
      console.log(this.userService.getUsers());
      this.form.reset();
    }
  }

}
