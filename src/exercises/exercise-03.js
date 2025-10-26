/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>” 
Nota: vowels = "aeiou" (no incluyas acentos)
*/
export function exercise03(string) {
  const vowels = "aeiou";
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();
    if (vowels.includes(char)) {
      result++;
    }
  }

  return `Number of vowels in '${string}' is ${result}`;
}

console.log(exercise03("palabra"));
