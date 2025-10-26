/* 
EJERCICIO 8:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
Nota: los siglos comienzan el 1 de enero de un año terminado en 1 y finalizan el 31 de diciembre de un año terminado en 0. 
*/
export function exercise08(year) {
if (year<=0) return "Invalid Year";
const century = year% 100 ===0 ? year/100 : Math.floor(year/100) +1;
  return `The year ${year} belongs to the ${century}st century`;
}

console.log(exercise08(2025));
