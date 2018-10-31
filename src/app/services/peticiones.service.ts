import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/render3/util';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';

@Injectable()

export class PeticionesService{
    public url:string;

    constructor(
        private _httpClient:HttpClient
    ){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return 'Hola, soy un servicio';
    }

    getPosts():Observable<any>{
        return this._httpClient.get(this.url);
    }

}