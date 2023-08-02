// forma implicita con motores de inferencia

let productName = 'Product 1'; // ts puede inferir el tipo de dato en el tooltype
let porductPrice = 123;

productName = 'cHange';
productName.toLocaleLowerCase();
porductPrice.toFixed(); // cuando tenemos un tipo de dato no da las opc que se pueden ejecutar en estos tipados

const myProductStock = 100; // las const no pueden reasignar los valores, no se pueden cambiar los datos.

