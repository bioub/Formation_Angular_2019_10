function hello(name, i) {
  console.log(`${i} - Hello ${name}`);
}

const prenoms = ['Jean', 'Pierre', 'Eric'];

prenoms
  .filter((name) => name.length === 4)
  .map((name) => name.toUpperCase())
  .forEach(hello);
console.log('FIN');

// pile d'appels
// ^
// |
// |               log log
// |=> => => => => =>  =>
// |filter - map - forEach - log
// +---------------------------> temps
//                 JEAN ERIC FIN
