// un objet JS est un dictionnaire
// -> un système clé/valeur

// syntaxe object literal
// -> aux objets simples (coords)
// -> aux objets sans méthodes
const coords = {
  x: 1,
  y: 2,
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
  // arguments, this
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
    this.prenom = prenom;
  }
  hello() {
    return `Hello ${this.prenom}`;
  }
}


const romain = new Contact('Romain');
console.log(typeof Contact); // function
console.log(typeof romain); // object
console.log(romain.hello()); // Hello Romain

const jean = new Contact('Jean');
console.log(jean.hello()); // Hello Jean
