function hello(name) {
  return `Hello ${name}`;
}

const prenoms = ['Jean', 'Pierre'];

for (const prenom of prenoms) {
  console.log(hello(prenom));
}

