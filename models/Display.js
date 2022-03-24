import { Calculadora } from "./Calculadora.js";

export class Display{
    constructor(displayValorActual,displayValorAnterior){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
        this.mapSignos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*'
        }
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.mapSignos[this.operador] || ''} `;
    }

    borrarNumero(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    resetearDisplay(){
        this.valorAnterior = '';
        this.valorActual = '';
        this.operador = undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.operador !== 'igual' && this.calcular(); 
        this.operador = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    calcular(){
        const valorActual = parseFloat(this.valorActual);
        const valorAnterior = parseFloat(this.valorAnterior);
        
        if(isNaN(valorActual) || isNaN(valorAnterior))return;
        
        this.valorActual = this.calculador[this.operador](valorActual,valorAnterior);
    }

}