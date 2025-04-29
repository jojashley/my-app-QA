import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }
  
  sumar(numero1 :number, numero2:number) {
    return numero1 + numero2;
  }

  restar(numero1:number, numero2:number) {
    return numero1 - numero2;
  }

  multiplicar(numero1:number, numero2:number) {
    return numero1 * numero2;
  }

  dividir(numero1:number, numero2:number) {
    if (numero2 === 0)
      throw new Error('División por cero');

    return numero1 / numero2;
  }

  raiz(numero1:number, numero2:number) {
    if (numero2 === 0)
      throw new Error('División por cero');

    return numero1 / numero2;
  }

  potencia(numero1:number, numero2:number) {
    if (numero2 < 0)
      throw new Error('Fraccion negativa');

    var cont:number = 1;
    while(cont != numero2){
      cont += cont;
      numero1 = numero1*numero1;
    }

    return numero1;
  }

  calcular(numero1: number, numero2: number, operacion: string){
    let resultado: number;
    if (numero2 === null) {
      return;
    }

    switch (operacion) {
      case "+":
        resultado = this.sumar(numero1, numero2);
        break;
      case "-":
        resultado = this.restar(numero1, numero2);
        break;
      case "/":
        resultado = this.dividir(numero1, numero2);
        break;
      case "x":
        resultado = this.multiplicar(numero1, numero2);
        break;
        case "^":
          resultado = this.potencia(numero1, numero2);
          break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}