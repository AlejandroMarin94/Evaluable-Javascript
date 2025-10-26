/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste.
*/

function limpiarTexto(texto){
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "");
}


export function exercise10(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const limpio = limpiarTexto(string);
  const posiciones = [];

  for (let i=0; i<limpio.length; i++){
    const letra = limpio[i];
    const posicion = alphabet.indexOf(letra) + 1;
    if (posicion >0){
      posiciones.push(posicion);
    }
  }

 return posiciones;
}

console.log(exercise10("En que posicion está cada letra"));
