(()=>{
  type Sizes = 'S'|'M'|'L'|'XL';
function createToJson (
  title: string,
  createAt : Date, // en las fechas podemos usar el obj directo
  stock: number,
  size: Sizes
){
  return {
    title,
    createAt,
    stock,
    size
  }
}
const product1 = createToJson('B1', new Date(), 12, 'XL'); // si alguno de los datos nos faltan nos marcaría error
console.log(product1); // como la fx me regresa un objeto, le brinda dichas propiedades al product1



// array function
const create2Json = (
  title: string,
  createAt : Date, // en las fechas podemos usar el obj directo
  stock: number,
  size?: Sizes // en este caso size va a ser opcional por el ?
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
}
const product2 = create2Json('B1', new Date(), 12); // si alguno de los datos nos faltan nos marcaría error
console.log(product2);
console.log(product2.size); // property) size: Sizes | undefined
})();
