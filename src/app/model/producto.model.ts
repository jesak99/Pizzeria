export class Producto{
    constructor(
        public codigo: string,
        public nombre: string,
        public descripcion: string,
        public especificacion: string,
        public costo: number,
        public imagen: string,
        public categoria: string,
        public cantidad: number,
        public total: number
        ){}
}