import { Component } from '@angular/core';
import { Profesor } from './profesor';

@Component({
    selector: 'app-profesor',
  templateUrl: './profesor.component.html'
})

export class ProfesorComponent{
    public nombre:string;
    public edad:number;
    public casado:boolean;
    public trabajos:Array<any> = ['Profesor' , 'webdev', 'Barrendero'];
    public profesor:Profesor;
    public profesorado:Array<Profesor>;
    public colors:string;
    public admin:boolean;

    constructor(){
        this.nombre = 'Matias';
        this.edad = 23;
        this.casado = false;
        this.profesor = new Profesor('Lucas',38,'veterinaria',false);
        this.profesorado = [ 
            this.profesor,
            new Profesor('Vanesa',34,'marketing',true),
            new Profesor('Juan',32,'administrador',false),
            new Profesor('Marcos',31,'ingeniero',true) 
        ]
        this.colors = 'blue'
        this.admin = false
    }
    ngOnInit(): void {
        console.log (this.profesor);
    }

    pulsarBoton(){
        console.log('Hemos pulsado el boton');
        this.admin = !this.admin;
    }
}