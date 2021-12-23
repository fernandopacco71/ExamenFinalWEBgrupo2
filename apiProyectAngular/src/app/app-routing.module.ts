import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalCrearComponent } from './personal-crear/personal-crear.component';
import { PersonalEditarComponent } from './personal-editar/personal-editar.component';
import { PersonalListarComponent } from './personal-listar/personal-listar.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'crear-personal' },
  { path: 'crear-personal', component: PersonalCrearComponent },
  //{ path: 'editar-personal', component: PersonalEditarComponent },
  { path: 'editar-personal/:id', component: PersonalEditarComponent },
  { path: 'listar-personal', component: PersonalListarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
