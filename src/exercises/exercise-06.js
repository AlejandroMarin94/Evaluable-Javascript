/* 
EJERCICIO 6:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado.

Ejemplos:
"The phrase 'Rats live on no evil star' is palindrome"
"The phrase 'Hello world' is NOT palindrome"

Nota: los signos de puntuación, mayúsculas y espacios deben ser ignorados (no incluyas los acentos). 
*/
export function exercise06(string) {
  const frase = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const fraseReves = frase.split("").reverse().join("");

  return (frase === fraseReves
    ? `The phrase '${string}' is a palindrome`
    : `The phrase '${string}' is NOT a palindrome`);
}

console.log(exercise06("Hola soy un palindromo"));

