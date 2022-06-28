import { Direccion } from "./direccion.model";
import { Producto } from "./producto.model";

export class Orden{
    constructor(
        public codigo: string,
        public direccion: Direccion,
        public productos: Producto[],
        public subtotal: number,
        public descuento: number,
        public total: number,
        public efectivo: number,
        public cambio: number,
        public fecha: Date
    ){}
}