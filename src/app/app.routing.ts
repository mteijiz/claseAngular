import { FrutaComponent } from "./fruta/fruta.component";
import { ProfesorComponent } from "src/profesor/profesor.component";

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Profesor } from "src/profesor/profesor";
import { VerdurasComponent } from "./verduras/verduras.component";


const appRoute: Routes=[
    {path: '', component: ProfesorComponent}, //ruta inicial
    {path: 'profesor', component: ProfesorComponent},
    {path: 'profesor/:nombre', component:ProfesorComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'verduras', component: VerdurasComponent},
    {path: '**', component: FrutaComponent}, //ruta cuando falla, por defecto
];

export const appRoutingProviders:any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoute);
