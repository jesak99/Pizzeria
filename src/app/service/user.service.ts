import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../model/user.model";

@Injectable({ providedIn: 'root' })
export class UserService{
    userChangedEvent: EventEmitter<boolean> = new EventEmitter();
    listChangedEvent: EventEmitter<User[]> = new EventEmitter();
    listOfUsers : User[] = [
        new User("jesak_99@hotmail.com","jesus","jesuscm99","admin")
    ];
    name="";
    tipo="cliente";

    getUsers(){
        return this.listOfUsers;
    }

    addUser(user : User){
        this.listOfUsers.push(user);
    }

    setUsers(listOfUsers: User[]){
		this.listOfUsers = listOfUsers;
		this.listChangedEvent.emit(listOfUsers);
	}

    getNameUser(){
        return this.name;
    }

    getTipoUser(){
        return this.tipo;
    }

    restaurar(){
        this.tipo = "cliente";
    }

    existe(email : string){
        var estado = false;
        this.listOfUsers.forEach(user => {
            if(user.email == email){
                estado = true;
            }
        });
        return estado;
    }

    getUser(email : string, password : string){
        var estado = false;
        this.listOfUsers.forEach(user => {
            if(user.email == email && user.password == password){
                estado = true;
                this.name = user.name;
                this.tipo = user.rol;
            }
        });
        return estado;
    }
}