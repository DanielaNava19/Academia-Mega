import {saludar, despedir} from "./saludo.js";
import {sumar, restar, multiplicar, dividir} from "./actividad.js";
import { obtenerFechaActual, obtenerHoraActual } from "./fecha.js";

const nombre= "Daniela";
console.log (saludar("Adriana"));
console.log (despedir(nombre));
console.log (sumar(5,5));
console.log (restar(10,5));
console.log (multiplicar(5,5));
console.log (dividir(10,0));
//Fecha
console.log("Fecha Actual: ", obtenerFechaActual());
console.log("Hora Actual: ", obtenerHoraActual());