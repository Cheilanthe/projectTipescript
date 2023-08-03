(()=>{
  type UserID = string | number ; // aquí definimos el tipo de datos que se podrán utilizar
  let userId: UserID; // este es un alias case

  function greeting (userId: UserID) {
    if(typeof userId=== 'string'){
      console.log(`string ${userId.toLowerCase()}` )// en este scope el tipado es dinamico y se comporta como string
    }else{
      console.log(`number ${userId.toFixed(1)}`)// aquí se comportará como un numéro
    }
   }
   // literal types. Son strings especificos que pueden utilizarse
   type Sizes = 'S'|'M'|'L'|'XL';
   let shirtSize: Sizes;
   shirtSize = 'M';
   function greeting1 (userId: UserID, size: Sizes) {
    if(typeof userId=== 'string'){
      console.log(`string ${userId.toLowerCase()}` )// en este scope el tipado es dinamico y se comporta como string
    }else{
      console.log(`number ${userId.toFixed(1)}`)// aquí se comportará como un numéro
    }
   }
   greeting1(111,'L');

})();
