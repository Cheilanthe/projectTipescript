(()=>{
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice',productPrice);
  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('cutomerAge',customerAge)

  let productStock: number; // se pueden declarar las variables sin inicializarla
  productStock = 8
  console.log('productStock', productStock);
  if(productStock > 10){
    console.log('is greater than 10')
  }
  let discount = parseInt('12'); // cuando no puede realizar la transformación de datos se ejecuta como NaN
  console.log('discount', discount);
  if (discount <= 200){
    console.log('apply');
  } else {
    console.log('not apply');
  }
  let hex = 0xfff; // transforma los datos a hexadecimal 4095
  console.log('hex', hex);
  let bin = 0b1010 // transforma a valores binarios 10
  console.log('bin', bin);
  const myNumber: Number = 10; // number y Number(hace ref al superprototipo Number) no es lo mismo

})();
