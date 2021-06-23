//como se hacia antes

function Rectangulo(base, altura) {
    this.base = base
    this.altura = altura
}

Rectangulo.prototype.calcularArea = function(){
    return this.base * this.altura
}

var rectangulo = new Rectangulo(6, 3)

//console.log(rectangulo.calcularArea());

// Declaracion de clases

class Rectangulo2 {
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }
    calcularArea(){
        return this.base * this.altura
    }
}

// var rectangulo2 = new rectangulo2(6, 4)

//console.log(rectangulo2.calcularArea());

// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona>

/*
....Deber getters, setter
*/

/*
const Estudiante = {
    Nombre: 'Jhony',
    Apellido: 'Hurtado',

    get NombreCompleto() {
        return this.Nombre + " " + this.Apellido;
    },
 
    set anios(num) {
        this_anio = (num)
    },
    get anios() {
        return this_anio
    }
};
console.log("Getter y setters");
console.log("Nombre:",Estudiante.Nombre);
console.log("Nombre Completos:",Estudiante.NombreCompleto);
Estudiante.anios = 21;
console.log("Años:",Estudiante.anios);
*/

/*
....Deber metodos estaticos
*/

/*
console.log("");
console.log("Metodo Estatico");

class Perimetro {
    static PerimetroTrianguloRectangulo(a, b, c) {
        var suma
        suma = a+b+c
        return suma;
    }
}

var suma = Perimetro.PerimetroTrianguloRectangulo(3, 4, 5);
console.log("Perimetro de un Rectangulo:",suma);
*/

/*
....extender Estudiante con Persona
*/

class Persona {
    constructor(Nombre, Apellido, edad, genero) {
      this.Nombres = {
        Nombre,
        Apellido
      };
      this.edad = edad;
      this.genero = genero
    }
    Saludo() {
        console.log(`Hola! ${this.Nombres.Nombre}`);
    };
}

var persona = new Persona('jhony', 'Hurtado', 20, 'Masculino');
//persona.Saludo();

class Estudiante extends Persona {
    constructor(Nombre, Apellido, edad, genero, curso, grado) {
        super(Nombre, Apellido, edad, genero);
  
        this.curso = curso;
        this.grado = grado;
    }
  }

var estudiantee = new Estudiante('Adrian', 'Chicaiza', 58, 'Masculino', 'Matematicas', 5);
estudiantee.Saludo();
