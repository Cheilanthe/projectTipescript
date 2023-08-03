//.model indica que este archivo tiene modelado de datos.
// definición de tipos

export type Sizes = 'S'|'M'|'L'|'XL';

export  type Product = {
    title: string,
    createAt : Date, // en las fechas podemos usar el obj directo
    stock: number,
    size?: Sizes // parametro opcional
  };

  // al cambiar uno de los nombre, todas las funciones y varibles asociadas ella se marcan con error
