import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  resultados: any[] =[]
  r: any[] =[]
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {



        this.usuarioService.getEstilos().subscribe((response:any)=>{
          this.resultados =response;
          console.log(this.resultados)

        })
  }

}
