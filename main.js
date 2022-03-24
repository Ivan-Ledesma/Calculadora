import { Display } from "./models/Display.js";

const displayValorActual = document.getElementById('valor-actual');
const displayValorAnterior = document.getElementById('valor-anterior');
const numeros = document.querySelectorAll('.numero');
const signos = document.querySelectorAll('.operador');
const borrar = document.getElementById('borrar');
const reset = document.getElementById('reset');

//Imprimir numeros:
const display = new Display(displayValorActual,displayValorAnterior);

numeros.forEach(numero =>{
    numero.addEventListener("click",()=>{
        display.agregarNumero(numero.innerHTML);
    }); 
});

reset.addEventListener("click",()=>{
    display.resetearDisplay();
})

borrar.addEventListener("click",()=>{
    display.borrarNumero();
})

signos.forEach(signo =>{
    signo.addEventListener("click", ()=>{
        display.computar(signo.value);
    })
})













