const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('.name'); // Corregido: Seleccionar por clase usando '.name'
const $b = document.querySelector('.blog'); // Corregido: Seleccionar por clase usando '.blog'
const $l = document.querySelector('.location');

//se declara la función "displayUser" como asincronica (async)
async function displayUser(username) {
  $n.textContent = 'cargando...';
  try {
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // se convierte la respuesta a formato JSON
  console.log(data);

  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
} catch (err) {
  // Manejar cualquier error que ocurra durante la solicitud a la API
  handleError(err);
}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);