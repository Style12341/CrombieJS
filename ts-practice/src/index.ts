/* Ejercicio 1: Extensión de Interfaces
Define una interfaz Animal con propiedades básicas como nombre (string) y edad (number).
Luego, crea otra interfaz Perro que extienda de Animal y agrega propiedades específicas de los perros, como raza (string) y adiestrado (boolean).

Finalmente, crea un objeto miPerro de tipo Perro y asigna valores a todas sus propiedades.
*/
interface Animal {
    nombre: string;
    edad: number;
}
interface Perro extends Animal {
    raza: string;
    adiestrado: boolean;
}
const miPerro: Perro = {
    nombre: "Firulais",
    edad: 3,
    raza: "Labrador",
    adiestrado: true
}


/*Ejercicio 2: Uniones y Tipos Literales
Define un tipo EstadoCivil que pueda ser uno de los siguientes valores: "soltero", "casado", "divorciado", "viudo".
Luego, define un tipo Persona que tenga propiedades como nombre (string), edad (number), y estadoCivil (EstadoCivil).
Crea una variable persona1 de tipo Persona con todos los valores y asegúrate de que solo puedas asignar valores válidos a estadoCivil.
*/
type EstadoCivil = "soltero" | "casado" | "divorciado" | "viudo";
type Persona = {
    nombre: string;
    edad: number;
    estadoCivil: EstadoCivil;
}
const persona1: Persona = {
    nombre: "Juan",
    edad: 30,
    estadoCivil: "casado"
}
/*Ejercicio 3: Intersección de Tipos
Define un tipo Ubicacion con propiedades latitud y longitud (ambos number).
Luego, define un tipo Direccion con calle y ciudad (ambos string).
Crea un nuevo tipo UbicacionCompleta usando una intersección de Ubicacion y Direccion.
Luego, crea una variable miUbicacion de tipo UbicacionCompleta y dale valores a todas sus propiedades.
*/
type Ubicacion = {
    latitud: number;
    longitud: number;
}
type Direccion = {
    calle: string
    ciudad: string
}
type UbicacionCompleta = Ubicacion & Direccion

const miUbicacion: UbicacionCompleta = {
    calle: "test",
    ciudad: "Santa Fe",
    latitud: 50.0,
    longitud: 5.0
}
/*Ejercicio 4: Alias y Funciones Genéricas
Define un alias Id que puede ser un number o un string. \
Luego, crea una función genérica getId que tome un parámetro id de tipo Id y devuelva un mensaje que indique el tipo del identificador
(por ejemplo, "El id es numérico" o "El id es un string").
Prueba la función con diferentes tipos de Id y verifica que el mensaje sea correcto.
*/
type Id = number | string
function getId<T extends Id>(id: T): string {

    if (typeof id === "string") {
        return "El id es un string"
    }
    return "El id es numerico"
}
console.log("Ejercicio 4")
console.log(getId(2))
console.log(getId("2"))
console.log("")
/*Ejercicio 5: Definir Tipos para Funciones
Define un tipo de función OperacionBinaria que tome dos parámetros de tipo number y devuelva un number.
Luego, crea dos funciones suma y multiplicacion que correspondan a ese tipo de función.

Define una función calcular que tome tres argumentos: dos números y una operación de tipo OperacionBinaria.
Esta función debe devolver el resultado de aplicar la operación a los números. Prueba la función calcular con suma y multiplicacion.
*/
type OperacionBinaria = (n1: number, n2: number) => number;
const suma: OperacionBinaria = (n1, n2) => n1 + n2;
const multiplicacion: OperacionBinaria = (n1, n2) => n1 * n2;

function calcular(n1: number, n2: number, op: OperacionBinaria) {
    return op(n1, n2);
}
console.log("Ejercicio 5:")
console.log(calcular(1, 2, suma));
console.log(calcular(2, 3, multiplicacion))
console.log("")
/*Ejercicio 6: Interface con Index Signature
Crea una interfaz Traducciones que tenga un index signature para representar traducciones en diferentes idiomas.
La clave del índice debe ser un string (idioma) y el valor otro string (traducción).

Crea un objeto traduccionesSaludo que tenga las traducciones de "Hola" en diferentes idiomas
(por ejemplo, "en" para inglés, "fr" para francés, etc.).
Agrega algunas traducciones y usa este objeto para acceder a una de ellas mediante su clave.
*/
interface Traducciones {
    [idioma: string]: string;
}

const traduccionesSaludo: Traducciones = {
    en: "Hello",
    fr: "Bonjour",
    es: "Hola",
    de: "Hallo"
};

// Accediendo a la traducción en francés
console.log("Ejercicio 6:")
console.log(traduccionesSaludo["fr"]);
console.log("")
/*Ejercicio 7: Tipos Opcionales y Predeterminados
Define una interfaz Producto con las siguientes propiedades:
nombre (string), precio (number), descuento (number, opcional)
Luego, crea una función calcularPrecioFinal que reciba un Producto y devuelva el precio aplicando el descuento si existe.
*/
interface Producto {
    nombre: string;
    precio: number;
    descuento?: number;
}
function calcularPrecioFinal(p: Producto): number {
    return p.precio * (p.descuento ?? 1)
}
const p: Producto = {
    nombre: "test",
    precio: 10,
    descuento: 0.5
}
console.log("Ejercicio 7")
console.log(`Precio antes: ${p.precio}`)
console.log(`Precio despues: ${calcularPrecioFinal(p)}`)
console.log("")
/*Ejercicio 8: Tipos Enums
Define un enum llamado RolUsuario con los valores "Admin", "Editor", y "Lector". Luego, crea una interfaz Usuario con las propiedades:
nombre (string), edad (number), rol (RolUsuario)
Crea una función mostrarPermisos que reciba un Usuario y devuelva un mensaje diferente según su rol.
*/
type RolUsuario = "Admin" | "Editor" | "Lector"
interface Usuario {
    nombre: string,
    edad: number,
    rol: RolUsuario
}
function mostrarPermisos(u: Usuario): string {
    return "El usuario es " + u.rol;
}
const u: Usuario = {
    edad: 50,
    nombre: "pepe",
    rol: "Admin"
}
console.log("Ejericico 8")
console.log(mostrarPermisos(u))
console.log("")
/*Ejercicio 9: Tuplas en TypeScript
Define un tipo Coordenadas que sea una tupla [number, number] representando latitud y longitud.
Luego, crea una función mostrarUbicacion que reciba unas Coordenadas y devuelva un string formateado.
*/
type Coordenadas = [number, number]
function mostrarUbicacion(c: Coordenadas) {
    return `Lat: ${c[0]}, Long: ${c[1]}`
}
const c: Coordenadas = [5.0, 30.0];
console.log("Ejericico 9")
console.log(mostrarUbicacion(c))
console.log("")
/*Ejercicio 10: Clases y Modificadores de Acceso
Crea una clase Coche con las siguientes propiedades:

marca (string, pública)
modelo (string, pública)
año (number, privada)
Un método obtenerInfo() que devuelva un string con los datos del coche.
Crea una instancia de Coche e intenta acceder a año desde fuera de la clase. ¿Qué sucede? */

class Coche {
    marca: string
    modelo: string
    #anio: number
    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.#anio = anio;
    }
    obtenerInfo() {
        return `Auto ${this.marca} modelo ${this.modelo} del anio ${this.#anio}`
    }
}

const coche: Coche = new Coche("toyota", "fielder", 2009)
console.log("Ejericico 10")
console.log(coche.obtenerInfo())