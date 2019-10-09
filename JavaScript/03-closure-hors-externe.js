function externe(msg) {
  // Portée de closure
  function interne() {
    // Portée locale
    console.log(msg);
  }
  return interne;
}

const hello = externe('Hello');
hello();
const bye = externe('Bye');
bye();
// pile d'appels
// ^
// |
// |
// |          log
// |externe - interne/hello
// +---------------------------> temps

/*
function createButton(value) {
  const btn = document.createElement('button');
  btn.innerText = value;
  btn.addEventListener('click', () => {
    console.log(value);
  });
  document.body.appendChild(btn);
}
createButton('Bouton 1');
createButton('Bouton 2');
*/

// 1sec ...  3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 1sec ...  0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// 1sec ...  0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
