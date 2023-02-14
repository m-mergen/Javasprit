
    /* 
    Bir Öğrencinin bilgilerini alıp notunu hesaplayan
    bir program yapalım.

    **Ad giriniz (ad)
    ** Numara giriniz (ogrno)
    **Cinsiyet giriniz (cinsiyet)
    **Ders adı giriniz (ders)
    **1.yazılı notu  (not1)
    **2.yazılı notu (not2)
    ** ortalama hesapla ve console yazdır
    
    */
   var ad=prompt("Lütfen adınzı giriniz:");
   var ogrno = prompt ("öğrenci no:");
   var cinsiyet = prompt("cinsiyet :");
   var ders =prompt ("ders adı:");
   var not1=prompt("not 1 :")
   var not2=prompt ("not 2:")
   var ortalama = (Number(not1) + Number(not2))/2;

   console.log (ogrno + ' '+ "numaralı"+ ' ' + ad + "("+ cinsiyet +")" + 
    " isimli  öğrencinin "+  ders + ' ' +  "dersinden aldığı ortalama " + ortalama + '`'+"dir");  