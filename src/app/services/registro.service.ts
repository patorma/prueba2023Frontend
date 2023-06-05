import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }

  countRegistrosRepetidos(registros: any[], atributo: string): { [key: string]: number } {
    const contador: { [key: string]: number } = {};

    registros.forEach((registro) => {
      const valor = registro[atributo];
      contador[valor] = contador[valor] ? contador[valor] + 1 : 1;
    });

    return contador;
  }
}
