function hello(name, i) {
  console.log(`${i} - Hello ${name}`);
}

const prenoms = ['Jean', 'Pierre', 'Eric'];

prenoms
  .filter((name) => name.length === 4) // cb('Jean', 0)
  .map((name) => name.toUpperCase()) // cb('Jean', 0)
  .forEach(hello); // cb('Jean', 0)
console.log('FIN');

// pile d'appels
// ^
// |
// |               log log
// |=> => => => => =>  =>
// |filter - map - forEach - log
// +---------------------------> temps
//                 JEAN ERIC FIN
