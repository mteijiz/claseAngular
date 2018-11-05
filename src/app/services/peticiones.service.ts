import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/render3/util';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';
import { verdura } from '../verduras/verdura';

@Injectable()

export class PeticionesService{
    public url:string;//para traer los datos del servicio (la api)

    constructor(
        private _httpClient:HttpClient
    ){
        this.url = "https://jsonplaceholder.typicode.com/posts";//tengo que poner el localhost 8080 para poder traer los datos de la base de datos del backend
    }

    getPrueba(){
        return 'Hola, soy un servicio';
    }

    getPosts():Observable<any>{
        //return this._httpClient.get(this.url);
    }

    setVerdura(verdura:verdura):Observable<any>{
        let json = JSON.stringify(verdura);//pasamos un objeto a formato json
        let params = 'json = ' + json;
        let headers = new HttpHeaders().set('Content=type','application/json');
        //return this._httpClient.post(this.url, params, {headers:headers}); 
    }
}