import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TipoMusicalComponent } from './components/tipo-musical/tipo-musical.component';
import { FormComponent } from './components/usuarios/form/form.component';

const routes: Routes = [
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  {path:'usuarios',component:UsuariosComponent },
  {path: 'usuarios/page/:page',component: UsuariosComponent},
  {path:'usuarios/form',component:FormComponent},
  {path:'usuarios/form/:id', component: FormComponent},
  {path: 'estilos',component: TipoMusicalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
