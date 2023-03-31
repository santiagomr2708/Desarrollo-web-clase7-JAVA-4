//Módulos en JavaScript
import { nombre, suma } from './module2.js';

console.log(nombre);
console.log(suma(5,3));

/*
crear minimo 2 modulos
-el primer modulo debe de tener:
*una clase que ereda de otra
*un objeto que dentro de sus propiedades tenga otro objeto
*/

class Autos{
    constructor(marca,año,modelo){
    this.marca = marca;
    this.año = año;
    this.modelo = modelo;
    }

    modeloA(){
        return` El auto ${this.marca} es un: ${this.modelo}`;
    }
}


class JDM extends Autos{

    // constructor de la clase supra

    constructor(marca,año,modelo,motor){
        super(marca,año,modelo)
        this.motor = motor;
    }
}

//Objeto con otro objeto dentro

const ciudad ={
    nombre : "Tokyo",
    existe : true,
    CaracteristicasH :{
        Población : "alta",
        autos: 'bastantes',
        autopistas: true,
        carreras: false,
    },
}

export{JDM,ciudad}

/*
oros adicionales:
-Tercer modulo que contenga
*una funcion tipo flecha, que manipule arreglos con los metodos de arreglos
*Debe tener como parametros de entrada el arreglo y una callback function
*debe poderse exportar
*/
