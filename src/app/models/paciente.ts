export class Paciente{
    id?: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    direccion: string;
    telefono: number;

    constructor(nombre: string, apellido: string, fechaNacimiento: Date, direccion: string, telefono: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}