import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './conversor-numeros.component.html',
  styleUrls: ['./conversor-numeros.component.css']
})
export class ConversorNumerosComponent {

  //variáveis globais
  numero: string | number;
  resultado: number | string;

  //bibliotecas com as conversões entre algarismo romano e arábico
  dicionario_romano: {[key: string]: number} = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  }
  dicionario_arabico: { [key: number]: string } = {
    1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M' 
  }
  
  //função principal que é chamada
  conversor(numero: string | number){

    if (typeof(this.numero) == "string" && this.numero.match(/^[a-zA-Z]+$/)){

      this.romanoParaArabico(this.numero);

    } else 
    
      if (Number(this.numero)){

        this.arabicoParaRomano(Number(this.numero))

    } else{
      alert("Insira um número válido!!!");
    }

  }

  //função para converter de algarismo romano para arabico
  romanoParaArabico(numero: string) : void{

    let resultado = 0;
    let valor = 0;
    numero = numero.toUpperCase();

    for (let i = numero.length - 1; i >= 0; i--) {
      const char = numero[i];
      const valorChar = this.dicionario_romano[char];

      if (valorChar >= valor) {
        resultado += valorChar;
      } else {
        resultado -= valorChar;
      }

      valor = valorChar;
    }
    
    this.resultado = resultado;

  }

  //função para converter de arabico para algarismo romano
  arabicoParaRomano(numero: number) : void{

    if (numero < 1 || numero > 3999) {
      alert("Número fora da faixa de conversão.");
    }

    let resultado:string = '';
    let valor = 0;

    for (const [key, value] of Object.entries(this.dicionario_arabico).reverse()){

      let numeroRomano: string = '';

      const valor = parseInt(key);
      
      while (numero >= valor){
        console.log(value);
        console.log(resultado);

        resultado += value;
        numero -= valor;
      }

    }

    this.resultado = resultado;

  }

}

