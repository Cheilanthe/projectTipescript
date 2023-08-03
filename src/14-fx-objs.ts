(()=>{
const logIn = (email:string, password:string) =>{
console.log(email,password);
}

// logIn('diana103@gmail.com', '1234');


const logIn2 = (data:{email: string, password:string}) =>{
  console.log(data); // en esta caso el parametro es data
  }

logIn2({
  email: 'abec@gmail.com',
  password: '1243'
});

type Sizes = 'S'|'M'|'L'|'XL';

const products: any[] = []; // el array permite cualquier tipo de dato

const addProduct = (data:{
  title: string,
  createAt : Date, // en las fechas podemos usar el obj directo
  stock: number,
  size?: Sizes // parametro opcional
})=>{
  products.push(data);
}
addProduct({
  title: 'Product1',
  createAt: new Date(),
  stock: 12,
  size: 'M'
});

// console.log(products);

addProduct({
  title: 'Product2',
  createAt: new Date(),
  stock: 1,
  size: 'L'
});
console.log(products);
})();
