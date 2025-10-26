/* 
EJERCICIO 19:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje.

Ejemplos:
"the string 'Code deco' is an isogram"
"the string 'hello world' is not an isogram"
*/
export function exercise19(string) {
 const ocurrencias = lettersOcurrences(string);

 const valores = Object.values(ocurrencias);
 const isIsogram = valores.every(v => v=== valores[0]);

  return `the string '${string}' is ${isIsogram ? "" : "not "}an isogram`;
}

function lettersOcurrences(string) {
  const resultado = {};
  const texto = string
  .toLowerCase()
  .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "")
  

  for( const letra of texto){
    resultado[letra] = (resultado[letra] || 0) +1;
  }
  return resultado;
}
