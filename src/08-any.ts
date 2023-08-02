(()=>{
  let myDynamicVar : any; // cualquie cosa puede ir en la variable.
  myDynamicVar = 100;
  myDynamicVar= null;
  myDynamicVar= {};

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase(); // transforma de un tipo de dato a otro
  console.log (rta);
  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log (rta2);
})();
