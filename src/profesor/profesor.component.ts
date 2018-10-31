import { Component } from '@angular/core';
import { Profesor } from './profesor';

import { PeticionesService } from '../app/services/peticiones.service';

@Component({
    selector: 'app-profesor',
    templateUrl: './profesor.component.html',
    providers: [PeticionesService]
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
    public api_posts;

    constructor(
        private _peticionesService:PeticionesService,
    ){
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
        this._peticionesService.getPosts().subscribe(
            res => {
                this.api_posts = res;
                if(!this.api_posts)
                    console.log("Respuesta vacia de la API");
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    pulsarBoton(){
        console.log('Hemos pulsado el boton');
        this.admin = !this.admin;
    }
}