(()=>{
 let userId: string | number;
 userId = 123;
 userId = 'adada';
// podemos hacer que las funciones puedan recibir datos de tipos especificos
// dentro del scope de esta función podemos asignarles un comportamiento
 function greeting (myText : string | number) {
  if(typeof myText=== 'string'){
    console.log(`string ${myText.toLowerCase()}` )// en este scope el tipado es dinamico y se comporta como string
  }else{
    console.log(`number ${myText.toFixed(1)}`)// aquí se comportará como un numéro
  }
 }
 greeting(123.1234);
 greeting('DIANA');
})();
