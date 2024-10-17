// tarea tecnica

//ejercico 1
class coches {
    constructor(marca,modelo,anio){
        this.marca = marca
        this.modelo = modelo
        this.anio = anio
    }
}

choches1 = new coches('kia','sporting',2022)
console.log(choches1)


//ejercicio 2
function transformarAMayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
}

const nombres = ["Scarleet", "María", "Alex", "Santiago"];
const nombresEnMayusculas = transformarAMayusculas(nombres);
console.log(nombresEnMayusculas);


// ejercicio 3
function filtrarMayoresQueDiez(arr) {
    return arr.filter(function(numero) {
      return numero > 10;
    });
}

let numeros = [4, 11, 2, 15, 9, 20];
let resultado = filtrarMayoresQueDiez(numeros);
console.log(resultado);


//ejercicio 4
function imprimirNumerosNaturales() {
    let numero = 1;
    while (numero <= 10) {
      console.log(numero);
      numero++;
    }
}
imprimirNumerosNaturales();


//ejercicio 5
function procesarNumeros(arr) {
    return arr
      .filter(function(numero) {
        return numero > 10;
      })
      .map(function(numero) {
        return numero * 2;
      });
}
  
let numeross = [5, 12, 8, 20, 7, 15];
let resultad = procesarNumeros(numeross);
console.log(resultad);


//ejercicio 6
function recorrerHastaCero(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        break;
      }
      console.log(arr[i]);
    }
}
  
let numero = [3, 7, 1, 0, 5, 8];
recorrerHastaCero(numeros);


//ejercicio 7

class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    descripcion() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad} años`;
    }
}

let persona1 = new Persona("Carlos", 25);
console.log(persona1.descripcion());
  

//ejercicio 8
class Libro {
    constructor(titulo, autor, año) {
      this.titulo = titulo;
      this.autor = autor;
      this.año = año;
    }
    Descripcionlibro() {
      return `Título: "${this.titulo}", Autor: ${this.autor}`;
    }
}

let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
console.log(libro1.Descripcionlibro());

//ejercicio 9
class CuentaBancaria {
    constructor(titular, saldoInicial) {
      this._titular = titular;
      this._saldo = saldoInicial;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    set saldo(nuevoSaldo) {
      if (nuevoSaldo >= 0) {
        this._saldo = nuevoSaldo;
      } else {
        console.log("El saldo no puede ser negativo.");
      }
    }
    get titular() {
      return this._titular;
    }
}

let cuenta = new CuentaBancaria("Juan Pérez", 1000);
  
console.log(cuenta.titular);
console.log(cuenta.saldo);
  
cuenta.saldo = 1500;
console.log(cuenta.saldo);
  
cuenta.saldo = -500;
console.log(cuenta.saldo);


//ejercicio 10
class Utilidad {
    static convertir(celsius) {
      return (celsius * 9/5) + 32;
    }
}

let celsius = 25;
let fahrenheit = Utilidad.convertir(celsius);
console.log(`${celsius}°C son ${fahrenheit}°F`);


//ejercicio 11
class empleado{
    constructor(nombre){
        this.nombre=nombre
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nueva_persona){
        this._nombre=nueva_persona
    }
}

class personas extends empleado{
   constructor(nombre,salario){
    super(nombre)
    this.salario=salario
   }
} 
persona1 = new personas("Fernando",400)
console.log(persona1);
persona2 = new personas("Fabian",500)
console.log(persona2);

//ejercicio 12
class coche2{
    constructor(marca,modelo,kilometraje){
        this.marca=marca
        this.modelo=modelo
        this._kilometraje=kilometraje

    }

    get kilometraje(){
    return this._kilometraje
    }

    set kilometraje(NuevoKilometraje){
        if (NuevoKilometraje>=0) {
            this._kilometraje=NuevoKilometraje
            
        }else{
            console.log("El kilometraje no puede ser negativo");
             
        }
    }
}

let MiCoche = new coche2("Toyota","Corolla",10000000)

console.log(MiCoche);
MiCoche.kilometraje=120000
console.log(MiCoche.kilometraje);


// ejercicio 13


//ejercico 14
class Personaa {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this._edad = edad;
    }

    get edad() {
        return this._edad;
    }

    set edad(valor) {
        if (valor < 0) {
            console.log("Error: La edad no puede ser menor que 0.");
            this._edad = 0;
        } else if (valor > 120) {
            console.log("Error: La edad no puede ser mayor que 120.");
            this._edad = 120;
        } else {
            this._edad = valor;
        }
    }

    mostrarInfo() {
        return (`Nombre: ${this.nombre}, Edad: ${this._edad}`);
    }
}

// Ejemplo de uso
const persona11 = new Personaa ("Ana", 25);
console.log(persona11.mostrarInfo());

persona11.edad = -5;
console.log(persona11.mostrarInfo());

persona11.edad = 130;
console.log(persona11.mostrarInfo());
// Asignar una edad valida
persona11.edad = 45;
console.log(persona11.mostrarInfo());


// ejercicio 15
class Calculadora {
    constructor(valorInicial = 0) {
        this.valor = valorInicial;
    }

    sumar(valor) {
        this.valor += valor;
        return this;
    }

    restar(valor) {
        this.valor -= valor;
        return this;
    }

    multiplicar(valor) {
        this.valor *= valor;
        return this;
    }

    dividir(valor) {
        if (valor !== 0) {
            this.valor /= valor;
        } else {
            console.log("Error: No se puede dividir entre 0.");
        }
        return this;
    }

    resultado() {
        return (`Resultado: ${this.valor}`);
    }
}

const calculadora = new Calculadora();

calculadora
    .sumar(10)
    .restar(5)
    .multiplicar(3)
    .dividir(2)

console.log(calculadora.resultado())

//ejercicio 16
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInfo() {
        return (`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}


const usuario = new Usuario("Carlos", 30);
console.log(usuario.mostrarInfo())


usuario.hobbies = ["Lectura", "Natación", "Viajes"];
usuario.intereses = ["Tecnología", "Futbol", "Fotografía"];

console.log(`Hobbies: ${usuario.hobbies.join(", ")}`);
console.log(`Intereses: ${usuario.intereses.join(", ")}`);

console.log(usuario.mostrarInfo(), `Y sus Hobbies son: ${usuario.hobbies.join(", ")}`);
console.log(usuario.mostrarInfo(), `Y sus Intereses son: ${usuario.intereses.join(", ")}`);

