import { FrutaComponent } from "./fruta/fruta.component";
import { ProfesorComponent } from "src/profesor/profesor.component";

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Profesor } from "src/profesor/profesor";


const appRoute: Routes=[
    {path: '', component: ProfesorComponent}, //ruta inicial
    {path: 'profesor', component: ProfesorComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: '**', component: FrutaComponent}, //ruta cuando falla, por defecto
];

export const appRoutingProviders:any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoute);
