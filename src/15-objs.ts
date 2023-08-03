(()=>{

  type Sizes = 'S'|'M'|'L'|'XL';
  type Product = {
    title: string,
    createAt : Date, // en las fechas podemos usar el obj directo
    stock: number,
    size?: Sizes // parametro opcional
  }

  const products: Product[] = []; // el array permite los datos que cumplen con la estructura del objeto

  const addProduct = (data: Product )=>{
    products.push(data);
  }
  addProduct({
    title: 'Product1',
    createAt: new Date(),
    stock: 12,
    size: 'M'
  });

  console.log(products);

  products.push({
    title: 'Product1',
    createAt:  new Date(),
    stock: 12
  });
});
