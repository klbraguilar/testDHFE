export class Doctor{
    id?: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    direccion: string;

    constructor(nombre: string, apellido: string, fechaNacimiento: Date, direccion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
    }
}

