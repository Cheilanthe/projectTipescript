// .service trata a los datos. Metodos para incluir  los datos
import { Product } from "./product.model";

export const products: Product[] = []; // el array permite los datos que cumplen con la estructura del objeto

export const addProduct = (data: Product )=>products.push(data);

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item)=>{
    total += item.stock;
  });
  return total;
}
