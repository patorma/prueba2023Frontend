import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { TipoMusica } from '../../tipo-musical/TipoMusica';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  public titulo:string = 'Iniciar encuesta';
  public errores: string[] =[];
  tipos!:TipoMusica[];
  constructor(private usuarioService: UsuariosService,
    private router: Router,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuario()
  }

  cargarUsuario(): void {
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
         .getTipoMusica()
         .subscribe((tipos)=> (this.tipos = tipos))
  }

  public create():void{
    this.usuarioService.create(this.usuario).subscribe(
      (usuario)=>{
        this.router.navigate(['/usuarios']);
        Swal.fire(
          'Encuesta realizada!',
          `El usuario ${usuario.mail} ha contestado con éxito la encuesta!`,
          'success'
        );
      },
      (err)=>{
          // error es el atributo del objeto error que contiene el json
        // y pásamos los errores en el parametro errors
        // como errors (ver backend) es any se convierte a un arreglo de string
        // lo anterior es opcional es para que el codigo sea más estricto
        // con as se lo asignamos a un arreglo de string
        this.errores = err.error.errors as string[]
        console.error("Código de error desde el backend: " + err.status);
        console.error(err.error.errors);
        Swal.fire(
          'Error',
          'Hay un error: verfica si ya habias ingresado el mail o revisa el formulario' ,
          'error'
        )
      }
    )
  }
  update(): void{
    console.log(this.usuario);
    this.usuarioService.update(this.usuario).subscribe(
      (response)=>{
        this.router.navigate(['/usuarios']);
        Swal.fire(
          'Usuario Actualizado',
          `${response.mensaje}: ${response.usuario.mail}`,
          'success'
        );
      },
      (err)=>{
        this.errores =err.error.errors as string[];
        console.error("Codigo del error desde el backend: " + err.status);
        console.error(err.error.errors);
      }
    )
  }

  // el primer objeto corresponde a cada una de los tipos del ng
  // el segundo objeto es el objeto asignado al usuario y ahi hay que comparar
  compararTipo(o1: TipoMusica, o2: TipoMusica) : boolean{
    // se compara el objeto 1 y el objeto 2
   // si es undefined se deja marcado el seleccionar con un mensaje
   if (o1  ===  undefined &&  o2  ===  undefined ){
     return true;
   }

   return o1 === null || o2 === null || o1 === undefined || o2 === undefined
     ? false
     : o1.id === o2.id;
 }
}
