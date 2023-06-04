import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TipoMusicalComponent } from './components/tipo-musical/tipo-musical.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PaginatorUsuarioComponent } from './components/paginator-usuario/paginator-usuario.component';
import { PaginatorEstilosComponent } from './components/paginator-estilos/paginator-estilos.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/usuarios/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    TipoMusicalComponent,
    HeaderComponent,
    FooterComponent,
    PaginatorUsuarioComponent,
    PaginatorEstilosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
