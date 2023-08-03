import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Product1',
  createAt: new Date(),
  stock: 5,
  size: 'M'
});

addProduct({
  title: 'Product2',
  createAt: new Date(),
  stock: 5,
  size: 'M'
});

console.log(products);
const totalStock = calcStock() // esta función trabaja sobre el array products porque así se definio el tipado
console.log(totalStock);

// wooooooooorales :o
