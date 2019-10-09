// un objet JS est un dictionnaire
// -> un système clé/valeur

// syntaxe object literal
// -> aux objets simples (coords)
// -> aux objets sans méthodes
const coords = {
  x: 1,
  y: 2,
  sum() {}
};

const coords2 = {
  x: 1,
  y: 2,
  sum() {}
};

// extendre un objet
coords.z = 3;

console.log(coords.x); // 1
console.log(coords.z); // 3

delete coords.z;
console.log(coords.z); // undefined

for (const key in coords) {
  if (coords.hasOwnProperty(key)) {
    const value = coords[key];
    console.log(key, value);
  }
}


// constructor function
/*
function Contact(prenom) {
  // pseudo variable (créé automatiquement au moment de l'appel)
  // arguments, this, new.target, super
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  return `Hello ${this.prenom}`;
};
*/
class Contact {
  constructor(prenom) {
    // pseudo variable (créé automatiquement au moment de l'appel)
    // arguments, this
    //if (prenom.length > 3) {
      this.prenom = prenom;
    //}
  }
  hello() {
    return `Hello ${this.prenom}`;
  }
}


const romain = new Contact('Romain');
console.log(typeof Contact); // function
console.log(typeof romain); // object
console.log(romain.hello()); // Hello Romain

console.log(typeof romain.prenom !== undefined); // true
console.log(typeof romain.hello !== undefined); // true
console.log(typeof romain.hasOwnProperty !== undefined); // true
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
console.log(romain.hasOwnProperty('hasOwnProperty')); // false

const jean = new Contact('Jean');
console.log(jean.hello()); // Hello Jean

// Cloner un objet
// En ES6
const clone = Object.assign({}, romain);
console.log(clone.prenom); // Romain
console.log(clone === romain); // false

// En ES6
const nbs = [2, 3, 4];
const cloneNbs = [1, ...nbs, 5];

// En ES8 (SPREAD Operator)
const cloneEs8 = {...romain, nom: 'Bohdanowicz'};

