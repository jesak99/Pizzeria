import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SessionService{
    sessionChangedEvent: EventEmitter<boolean> = new EventEmitter();
    session = false;
    name = "";

    sesionIniciada(){
        this.session = true;
        this.sessionChangedEvent.emit(this.session);
    }

    sesionTerminada(){
        this.session = false;
        this.sessionChangedEvent.emit(this.session);
    }

    getSession(){
        return this.session;
    }
}