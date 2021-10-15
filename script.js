const root = document.getElementById('root');
const urls = [
  'https://swapi.dev/api/vehicles/20',
  'https://swapi.dev/api/films/2/',
  'https://swapi.dev/api/planets/2/',
  'https://swapi.dev/api/people/1/',
  'https://reqres.in/api/users',
];
console.log('TRABAJO REALIZADO POR: LOZANO MURILLO ALAN MAURICIO');

// Ejercicio 1 - Generar un fetch e imprimir name, model y manufacturer
fetch(urls[0])
  .then(response => response.json())
  .then(data => {
    let {name, model, manufacturer} = data;
    console.table({name, model, manufacturer});
  });

// Ejercicio 2 - Generar un fetch e imprimir por consola title, episode_id, opening_crawl
fetch(urls[1])
  .then(response => response.json())
  .then(data => {
    let {title, episode_id, opening_crawl} = data;
    console.table({title, episode_id, opening_crawl});
  });

// Ejercicio 3 - Generar un fetch e imprimir por consola name, rotation_period, climate
fetch(urls[2])
  .then(response => response.json())
  .then(data => {
    let {name, rotation_period, climate} = data;
    console.table({name, rotation_period, climate});
  });

// Ejercicio 4 - Generar un fecth y un post de los datos
fetch(urls[3])
  .then(response => response.json())
  .then(data => {
    let {name, gender} = data;
    fetch(urls[4], {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({name, gender})
    })
      .then(response => response.json())
      .then(data => console.table(data))
  })