(()=>{
let prices = [1,2,3,4,5]; // este es un array de numeros, por lo que no se pueden insertar datos de otro tipo
prices.push(123);
// para tener un array multiple:

let arrayMixed: (string | number| boolean | object)[] = ['hola', true];
arrayMixed.push(123);
console.log('arrayMixed', arrayMixed);
// la propiedad object permite que el array guarde onj y array
arrayMixed.push({'objeto':1});
arrayMixed.push([1,0]);
console.log('array con [] y {}',arrayMixed)
// cuando tienes arrays de puros numero puedes hacer operaciones y metodos con datos number
let newPrices= prices.map(i => i*2);
console.log(newPrices);
})();
