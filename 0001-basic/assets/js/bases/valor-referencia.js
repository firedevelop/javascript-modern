// primitivos por valor
// objetos por referencia
// SPREAD:  let a  = { ...name };
// SPREAD: rompe la referencia, se pueden hacer objetos que apunten a diferentes lugares en memoria
// REST:    let a = (...name) => {return name}
// REST une todos los elementos y los transforma en array
// slice trozo. spread propagacion
let a = 10;
let b = a;
a = 30;

console.log({ a, b });


let juan = { nombre: 'Juan' };
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });


const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );


console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });