import { Colonia } from "./colonia.model";

export class Direccion{
    constructor(
        public nombre: string,
        public telefono: string,
        public colonia: Colonia,
        public calle: string,
        public referencias: string,
        public numExt: string,
        public numInt: string
    ){}
}