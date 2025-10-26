import { movies } from "../data";


/* 
EJERCICIO 13:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con el título y la descripción 
de las mejores peliculas ordenadas de mejor a peor, siendo las mejores aquellas cuya 
valoración es superior a la valoración media de todas las películas
*/
export function exercise13(movies) {
  const totalRating = movies.reduce((acc, movie)=> acc + movie.rating, 0);
  const averageRating = totalRating / movies.length;
  const mejores = movies.filter(movie => movie.rating > averageRating);
  const ordenadas = mejores.sort((a,b)=> b.rating - a.rating);
  return ordenadas.map(movie=>({
    title: movie.title,
    description: movie.description,
  }))
}


