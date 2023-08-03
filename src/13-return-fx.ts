(()=>{
const calcTotal = (prices: number []): number =>  { // con los puntos estoy diciendo que obligatoriamente va a regresar un number
  let total = 0;
  prices.forEach((item)=>{
    total += item;
  });
  return total;
}
const rta = calcTotal([1,2,3,4,5,6,7,8]);
console.log(rta);
// podemos tener funciones que no tengan un return void
// podemos poner :void si no queremos que nos retorne nada, retorno explicito
const printTotal = (prices: number [])=>{
  const result = calcTotal([1,2,3]);
  console.log(`el total es ${result}`);
 }
 const rta1 = printTotal([1,2,3,4,5,6,7,8])
 console.log(rta1);
})();
