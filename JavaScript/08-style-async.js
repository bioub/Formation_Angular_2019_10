const fs = require('fs');

// Synchrone (simple à écrire mais peu performante (bloque le thread))
try {
  const content = fs.readFileSync('.editorconfig', { encoding: 'utf-8' });
  fs.writeFileSync('.editorconfig.copy', content);
  console.log('Copy Done');
} catch (err) {
  console.log(err.message);
}

// Asynchrone basée sur des callbacks (performante mais compliquée)
// Callback Hell / Pyramid of Doom
fs.readFile('.editorconfig', { encoding: 'utf-8' }, (err, content) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile('.editorconfig.copy', content, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Copy Done');
      }
    });
  }
});

// Asynchrone basée sur des promesses (performante et un peu moins compliqué)
fs.promises.readFile('.editorconfig', { encoding: 'utf-8' })
  .then((content) => fs.promises.writeFile('.editorconfig.copy', content))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err.message));

// Asynchrone basée sur les mots async/await (performante et simple à écrire)
async function copyEditorconfig() {
  try {
    const content = await fs.promises.readFile('.editorconfig', { encoding: 'utf-8' });
    await fs.promises.writeFile('.editorconfig.copy', content);
    console.log('Copy Done');
  } catch (err) {
    console.log(err.message);
  }
}
copyEditorconfig();
