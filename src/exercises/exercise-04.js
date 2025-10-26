/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
Pasándole el string “Hi, I am learning Javascript” la función debe devolver “H,I m lrnng Jvscrpt”
Nota: vowels = "aeiouAEIOU" (no incluyas los acentos)
Atención: cuidado con vocales aisladas y con espacios en blanco dobles
*/
export function exercise04(string) {
  const vowels = "aeiouAEIOU";
  let result =""
  for( let i=0; i<string.length; i++){
    const char= string[i];
    if(vowels.includes(char) && char !== "I"){

    }else{
    
    result +=char}
  }
 
  return result;
}
console.log(exercise04("Hi, I am learning javascript"));

