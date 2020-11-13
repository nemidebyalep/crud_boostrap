import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarComponent } from  './components/competencias/listar/listar.component';
import { AddComponent } from  './components/competencias/add/add.component';
import { UpdateComponent } from  './components/competencias/update/update.component';

const routes: Routes = [

  {path: 'listar', component: ListarComponent},
  {path: 'competencia/add', component: AddComponent},
  {path: 'editar/:id', component: UpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


