var marka ='Opel';
var model ='Astra';
var otomatik = 'yes';

/* if/else statement */

/*if (otomatik=='yes'){
    console.log ('araç otomatiktir.');
}else {
    console.log ('araç otomatik değildir.');
}

otomatik =true;
 if (otomatik) {
    console.log (marka + ' '+ model+ ' ' + 'otomatik ' )
 }
 if (otomatik == true)
 {
    console.log("true");
 }

 if (10=='10') {
    console.log('sayılar eşit');
 }

*/


/* switch statement */
// 1: manuel
//2. otomatik
var vites ='1';

if (vites=='1'){
    console.log('araç  manuel');
}else if (vites=='2') {
    console.log('araç otomatiktir');
}else {
    console.log ('yanlış bir deger girdiniz');
}

vites='1'
switch(vites){
    case '1':
        console.log('arac manuel');
        break;
    case '2':
        console.log('araç otomatik');
        break;
    default:
        console.log('yanlış deger girdiniz');
}

