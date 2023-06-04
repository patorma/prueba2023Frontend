import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TipoMusica } from '../components/tipo-musical/TipoMusica';

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  private urlEndPoint: string = 'http://localhost:8080/api/estilosMusicales'

  constructor(private http: HttpClient,
    private router: Router)
  { }

  getTipos(page: number):Observable<any>{
    return this.http.get(`${this.urlEndPoint}/page/${page}`).pipe(
      //este map es de rxjs/operators
      map((response:any) =>{
        (response.content as TipoMusica[]).map((tipo)=>{
          tipo.estiloMusical = tipo.estiloMusical.toUpperCase()
          return tipo
        })
      })
    )
  }

  create(tipo: TipoMusica): Observable<TipoMusica>{
    return this.http
           .post(this.urlEndPoint,tipo)
           .pipe(
            map((response: any)=>response.tipo as TipoMusica),
            catchError((e)=>{
              if(e.status === 400){
                return throwError(e);
              }
              if(e.error.mensaje){
                console.error(e.error.mensaje);
                }
                return throwError(e);
            })
           )
  }
//lo que esta dentro de get<Tipo> tipo de dato esperado como respuesta
  getTipo(id: any):Observable<TipoMusica>{
    return this.http
        .get<TipoMusica>(`${this.urlEndPoint}/${id}`)
        .pipe(
          catchError((e)=>{
            if(e.status != 401 && e.error.mensaje){
              this.router.navigate(['/estilos']);
              console.error(e.error.mensaje)
            }
            return throwError(e);
          })
        );
  }

  update(tipo: TipoMusica): Observable<any>{
    return this.http
       .put<any>(`${this.urlEndPoint}/${tipo.id}`,tipo)
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

  delete(id: number):Observable<TipoMusica>{
    return this.http
        .delete<TipoMusica>(`${this.urlEndPoint}/${id}`)
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
