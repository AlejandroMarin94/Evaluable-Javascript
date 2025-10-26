/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/
export function exercise14(movies, categories) {
  return movies
  .filter(movie=> movie.category === "Drama")
  .map(movie=>({
    title: movie.title,
    description: movie.description
  }));
}
