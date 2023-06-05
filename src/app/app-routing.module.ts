import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TipoMusicalComponent } from './components/tipo-musical/tipo-musical.component';
import { FormComponent } from './components/usuarios/form/form.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { AcercaComponent } from './components/acerca/acerca.component';

const routes: Routes = [
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  {path:'usuarios',component:UsuariosComponent },
  {path: 'usuarios/page/:page',component: UsuariosComponent},
  {path:'usuarios/form',component:FormComponent},
  {path:'usuarios/form/:id', component: FormComponent},
  {path: 'estilos',component: TipoMusicalComponent},
  {path: 'resultados',component: ResultadosComponent},
  {path:'acerca' ,component:AcercaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
