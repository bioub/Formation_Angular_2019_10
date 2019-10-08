const porteeModule = 'module';
// Portée de module (Node ou Browser type="module")
// Portée globale (Browser sans type="module")
function externe(msg) {
  // Portée de closure
  function interne() {
    const porteeLocale = 'locale';
    // Portée locale
    console.log(msg);
  }
  interne();
}

externe('Hello');

// pile d'appels
// ^
// |
// |log
// |interne
// |externe
// +---------------------------> temps
