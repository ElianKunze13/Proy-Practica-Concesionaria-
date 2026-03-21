import { Routes } from '@angular/router';
import path from 'node:path';

export const routes: Routes = [

{path:"comentarios", loadComponent: () => import("./componentes/comentarios/aside.component").then(m=>
        m.AsideComponent) },
        
{path:"listaautos", loadComponent: () => import("./componentes/listautos/listautos.component").then(m=>
                m.ListautosComponent) },    

];
