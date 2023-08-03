(()=>{
let myNumber : undefined = undefined; // no se pueden declarar datos undefined ni null
// null funciona con su propio tipo de dato
let myNumber2 : number | null = null;
// existen componentes de templates nulos, puede que inicialmente su valor sea null
// por ello se puede permitir que una variable inicialice como nulo
let myNumber3: number | null = null;

function hi(name: string|null){
let hello = 'hola ';
if (name){
    hello += name;
  }else {
    hello +='nobody';
  }
console.log(hello);
}

hi('Diana');
hi(null);


function hi2(name: string|null){
  let hello = 'hola ';
  hello += name?.toLowerCase() || 'nobody'; //opcional change ?
  console.log(hello);
}
hi2('ELIZABETH');
hi2(null);

})();
