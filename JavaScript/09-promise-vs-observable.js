// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// timeout(1000)
//   .then(() => console.log('1s'));

// (async () => {
//   await timeout(1000);
//   console.log('1s');
// })();
const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delayMs);
  });
}

interval(1000)
  .subscribe(() => console.log('1s'));
