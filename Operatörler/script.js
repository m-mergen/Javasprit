/* 1- Matematiksel Operatörler */
var x =10;
var y=12;
var z =5;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x+y+z);
console.log(z*(x+y));
console.log(x*y+z);

x++;
console.log(x)

/* 2- Krşılaştırma Operatörleri */ 
var sonuc =x>y;
console.log(sonuc);

var sonuc =x<y;
console.log(sonuc);

console.log(x<y) ; 
console.log(x>=z) ; 
console.log(x==z) ; 
console.log(x==="10");
console.log(x==z);  
  


/* 3- Mantıksal Operatörler*/ 

/*&& (And)  Operatörü */ 
console.log ((20>10) && (30<=20)); //birisi false ise false döndürür

/* || (or)  Operatörü*/

console.log ((20>10) || (30<=20)); // birisi true ise true döndürür


/* ! (NOT)  Operatörü*/
console.log(!(z<x))