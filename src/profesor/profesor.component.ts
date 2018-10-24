import { Component } from '@angular/core';

@Component({
    selector: 'app-profesor',
  templateUrl: './profesor.component.html'
})

export class ProfesorComponent{
    public nombre:string;
    public edad:number;
    public casado:boolean;
    public trabajos:Array<any> = ['Profesor' , 'webdev', 'Barrendero'];

    constructor(){
        this.nombre = 'Matias';
        this.edad = 23;
        this.casado = false;
    }
}