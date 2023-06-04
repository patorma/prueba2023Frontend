import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { TipoMusica } from '../../tipo-musical/TipoMusica';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public titulo:string = 'Iniciar encuesta';
  public errores: string[] =[];
  tipos:TipoMusica[] = []
  constructor(private usuarioService: UsuariosService,
    private router: Router,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cargarGasto(): void {
     /*Recibe como argumento los parametros en subscribe */
      /*en subscribe se ejecuta mostrar usuarios de usuarios */
      this.activatedRoute.params.subscribe((params) =>{
        let id = params['id'];
        if(id){
          this.usuarioService
              .getUsuario(id)
              .subscribe((usuario=>(this.usuario =usuario)))
        }
      });
      this.usuarioService
         .getTipo()
         .subscribe((tipos)=>(this.tipos = tipos))
  }

  public create():void{}//aqui quede
}
