(()=>{
let title: string = 'ThisIsaProduct';
title = 'abc';
console.log('title',title)
let description = 'abc';
console.log('description', description);
let price = 100;
let isNew: boolean = false;

const sumary = `
  title: ${title}
  description : ${description}
  price ${price}
  isNew ${isNew}
    `;
console.log(sumary);
})();
