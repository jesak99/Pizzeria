import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../service/session.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = true;
  session = false;
  nombre = "";

  constructor(private sessionService:SessionService, private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.session = this.sessionService.getSession();
    this.sessionService.sessionChangedEvent.subscribe(session => {
      this.session = session;
      this.nombre = this.userService.getNameUser();
    })
  }

  cerrarSesion(){
    this.session = false;
    this.userService.restaurar();
    this.sessionService.sesionTerminada();
    console.log(this.sessionService.getSession());
    this.router.navigate(['/nuestras-pizzas']);
  }

}
