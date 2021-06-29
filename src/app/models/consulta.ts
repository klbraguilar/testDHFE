
export class Consulta{
    id?:number;
    descripcion: string;
    fecha: Date;

    constructor(descripcion: string, fecha: Date){
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
}