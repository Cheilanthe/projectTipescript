(()=>{
 let isEnable =  true; // no se puede cambiar a otro tipo de datos como string o number
 isEnable = false;
 let isNew : boolean = false;
 console.log('isNew', isNew)
 isNew = true;
 console.log('isNew',isNew);

 const random = Math.random();
 console.log('random', random);
 isNew = random>= 0.5 ? true : false; // el tipado también aplica con evaluaciones indirectas
 console.log('isNew',isNew);
 const myBooolean : boolean = true; // para declarar tipos de var es mejor usar minusculas

}) ();
