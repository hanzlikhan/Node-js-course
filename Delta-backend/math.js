const sum = (a , b)=>a+b;
const sub = (a, b)=>a-b;
const product = (a, b)=> a*b;
const g = 9.8;
const PI = 3.14;


let obj = {
  sum: sum,
  sub: sub,
  product: product,
  g: g,
  PI: PI
}
module.exports = obj;