import { Component, OnInit } from '@angular/core';
import { Usuario } from './Usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] =[];
  paginador: any;
  //usuarioSeleccionado: Usuario

  cantidad: any;
  constructor(
   private usuarioService: UsuariosService,
   private activatedRoute: ActivatedRoute,
   private router: Router

  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:any)=>{

        let page: number = +params.get('page');

      // el operador suma convierte el string en number

      if (!page) {
        page = 0;
      }
        // usuarios es un observador va hacer observado por observadores, aca se subscribe ,
      // y en el metodo subscribe el observador seria asignar el atributo gastos el valor
      // que se recibe del gastoservice, que seria el listado de gastos con los cambios
      this.usuarioService
          .getUsuarios(page)
          .subscribe(
            (response:any) => {
              this.usuarios = response.content as Usuario[]
              this.paginador = response;
            }
          )
    }),
    this.usuarioService.getCantidad().subscribe((result)=>{
      this.cantidad = result
    })
  }

}
