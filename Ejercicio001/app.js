var add = function(suma1,suma2){
  return suma1 + suma2
};
add(9824,777);
// 10601
var multiply = function(mul1,mul2) {
  return mul1 * mul2
};
multiply(36325,10601);
//385081325
console.log(multiply(36325,add(9824,777)));
