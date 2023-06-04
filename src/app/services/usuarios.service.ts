import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Tipo } from '../components/tipo-musical/Tipo';
import { map, catchError, tap } from 'rxjs/operators';
import { Usuario } from '../components/usuarios/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlEndPoint: string ='http://localhost:8080/api/usuarios'
  constructor(private http: HttpClient,
    private router: Router)
    { }

    getTipo():Observable<Tipo[]>{
      return this.http.get<Tipo[]>(this.urlEndPoint + "/estilos").pipe(
        catchError(e =>{
          return throwError(e)
        })
      )
    }

    getCantidad():Observable<any>{
        return this.http
                  .get<any>(this.urlEndPoint + "/cantidad")
                  .pipe((result)=> result)
    }

    getUsuarios(page: number):Observable<any>{
          /*se hace un cast porque devuelve un observable de usuarios*/
        return this.http.get(`${this.urlEndPoint}/page/${page}`).pipe(
            // se transforma a usuarios
            map((response:any) =>{
              (response.content as Usuario[]).map((usuario)=>{
                usuario.tipo.tipo = usuario.tipo.tipo.toUpperCase()
                return usuario
              });
              return response
            })
        )
    }

    create(usuario: Usuario): Observable<Usuario>{
      return this.http
         .post(this.urlEndPoint,usuario)
         .pipe(
          map((response:any)=>response.usuario as Usuario),
          catchError((e)=>{
            if(e.status === 400){
              return throwError(e);
            }
            if(e.error.mensaje){
              console.error(e.error.mensaje);
              }
              return throwError(e);

          })
         );
    }

    getUsuario(id:any):Observable<Usuario>{
        return this.http
           .get<Usuario>(`${this.urlEndPoint}/${id}`)
           .pipe(
            catchError((e)=>{
              if(e.status != 401 && e.error.mensaje){
                /*capturamos el error y redirigimos a usuarios*/
                this.router.navigate(['/usuarios']);
                console.error(e.error.mensaje)
               }

               return throwError(e);
            })
           );
    }

    update(usuario:Usuario): Observable<any>{
       return this.http
         .put<any>(`${this.urlEndPoint}/${usuario.id}`,usuario)
         .pipe(
          catchError((e)=>{
            if (e.status === 400) {
              return throwError(e);
            }
            if(e.error.mensaje){
              console.error(e.error.mensaje);
              }
              return throwError(e);
          })
         )
    }

    delete(id: number):Observable<Usuario>{
      return this.http
        .delete<Usuario>(`${this.urlEndPoint}/${id}`)
        .pipe(
          catchError((e)=>{
            if(e.error.mensaje){
              console.error(e.error.mensaje)
            }
            return throwError(e);
          })
        )

    }
}
