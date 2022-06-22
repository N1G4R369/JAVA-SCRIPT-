                                            // 1. FOR  LOOP
  
  
  
  for  (let i = 0 ; i<10 ; i ++)
  {
       console.log(i);

 }

 // 1 den basliyir 10 a qeder reqemleri duzur

  console.log( "loop has been ended ");
 var adSoyad=['Nigar', 'Alizada ','Ali' , 'Kirilov ']

   for (let i =0; i< adSoyad.length; i++)
   {
      console.log( adSoyad [i]);
    
   }

   //ad soyad in icindeki arrayleri duzur alt alta




                                            // 2. WHILE LOOP

console.log('---------------------------------------')


 var adSoyad = ['nigar' , 'ali', 'niky', 'alex']
 
 var i =0;
 while(i <10)
 {
     console.log(i)
     i++;

    }
     // 1 den basliyir 10 a qeder reqemleri duzur


  var  i=0;
  while (i <adSoyad.length)
  {
      console.log(adSoyad[i])
        i++
    }

       //ad soyad in icindeki arrayleri duzur alt alta


       i=6 
       while (i>=3)
       {
           console.log(i);
           i--
       }

     //  bu ise i ni azaldir ta ki 3 den kicik olana qeder





                                            //4. DO WHILE 

  console.log('---------------------------------------')

  var i=3
  do {
      console.log(i)
      i++
  }      while(i<5)  
  
  // burda da i 3 du do nun icine giri bidefe print edir i -3 u ve ustune 1 gelir ,olur 4 ve 5 den kicikdi 
  //deye sonra qayidir evvele 4 u cap edir ustune bir gelir olur 5 . vve 5 5 den kicik deyil deye dayanir loop





                                                //5. IF / ELSE  / IFELSE 

console.log('---------------------------------------')

const yas =20
if (yas >18)
{
    console.log("18 yasdan boyukdu ");

}

//yasa burda 20 verdik ve 20 18 den boyukdu deye consolu print edecek 

var adSoyad = [ 'nigar ','ali ','kirilov ']

if (adSoyad .length >=2 )
{
    console.log( "name count is greate than 2 ");
}

//burda da arrayin icindeki element sayi 3 du ve 2 den boyuk oldugu ucun bunun, print edecek 

var password ="jskdmkncs"

if (password.length>=12)
{
    console.log( "sifre uzunlugu gucludu  :) ");
}

else if (password.length >= 8) {
console.log("sifreniz yaxsidi :| ");
}
else {
    console.log( "sifreniz cox qisadi :( ");
}

// burda da sifre uzunlugu 12 den boyuk olsa ela , olmasa ve 8 den boyuk olsa yaxsi hecbiri olmasa da  pis 
//menasindaki sozleri print edecek . burda elsifin yerine 2 dene if de yaza bilerdik amma bele olsaydi 
//onda 2 dene consolu select ededcekdi , hem elani hemde yaxsini . ona gore
// sadece bir sorgu neticesi qayitsin deye iflese yaziriq burda .






                            /*6.
                            AND  OR NOT OPERTORLARI 
                            */

console.log('---------------------------------------')

const yeni_sifre ="adx@454shbhbhjhnjns"
if (yeni_sifre.length >=12 && yeni_sifre.includes("!"))
{
    console.log( "sifre baya guclu ");

} 
//sifrenin uzunlugu 12 den boyuk ve icinde ! isare olmalidi 

//sifrenin uzunlugu 
else if ( yeni_sifre.length >=8 || yeni_sifre.includes('@'))
{
   console.log ("sifre yeterli")

}

/*sifrenin  uzunlugu 8 den boyuk yada ki icinde @iisaresi olmalidi*/

else {
    console.log("sifreni yeniden yaz ");
}

const control =false 
if(!control)
{
    console.log("kontrol basarili");
}

//burda da controlun neticesi falsedi birinci ona gore if islemir ama !control yazanda uje tru olur ve print olur








                                            /*7
                                            BREAK VE CONTINUE 
                                            */

console.log('---------------------------------------')

const notlar = [15,45,32,0,100,99,7 ]

for (let i =0; i< notlar.length ; i++)
{
   if (notlar [i] === 32 ){
       continue;
   } 

   
   console.log(notlar[i]);

   //eger notlarin icinde 32 olan varsa onu oturur kecir dIgerlerin cap edir burda 

   if (notlar[i] ===100)
   {
       console.log("bravo birinci yer sen oldun");
       break
   }
   //burda da hamsin cap edir ve 100 e gelib catanda dayanir process.qalanlari print olmur
}




                                            /*8 
                                            SWITCH OPERATORU 
                                            */

                  
console.log('---------------------------------------')

const score = 'D'


switch (score)
{
    case 'A':
    console.log('en basarili sensin')
    break;

    case 'B':
    console.log('super not')
    break;

    case 'C':
    console.log('guzel not')
    break;

    case 'D':
    console.log('idare eder')
    break;

    default :
    console.log("kesildin");

}

/*switch  operatoru da  if elsif kimidi eyni isi  gorur, yoxlyir ki scoru d dise onda 
idare eder suzun cixarir ekrana , a dis en basarili sensin sozu digerleri de onun kimi ele, 
ve dongu bitsin deye her defe breake edir dongunu */






                                    /* 9.
                                    LOCAL VE GLOBAL DEYISGENLER VE FERQLERI   */ 

 console.log('---------------------------------------')

let  yasi =29
/* kenarda yasa 29 veririk deye en asagidaki disardaki olan hissede 29 cixir yas */

if (true)
{
    let yasi =60;
    yasi = 38

   /* burada ne let nede var  nede const yazmamisi deye (bos yas =38) yazmisiq deye burda update edir yasi
   yani variabel novun verende heleik deysir deyisgeni amma vermeyende update edir ve en asagida 29 yas
    yerine 38 yas yazilacaq .*/

    console.log("icerideki:" , yasi);/* burda 60*/

    if (true )
    {
        let yasi =50;
        let ad = "nigar"
        var nigartest = "alizada"
        /* burda da nigar test sozun var deyisgeni ile yazmisiq ona gore bunu localdan globala en asagida 
        cixarmaq olur amma var sozu yerine let yazsaydi onu disardakinda yazsaydiq errr qaytaracaqdi */
        console.log ("iceridekinin icindeki", yasi,ad ,nigartest)
    }
}
console.log("disaridaki : ", yasi , nigartest);

        /* burda adi yazsaydiq ond aerror qayrarsacqdi cunki ad localda declare olunub ve 
        let ile yazilib amma var ad ="nigar "  onda rahat vermek olardi print hissede nigar sozun */






                                                    /*10. FUNKSIYALAR VE 
                                                    FUNKSIYALARIN YARADILMASI */


console.log('---------------------------------------')

function alizada()
{
    console.log("alizada");
}
alizada()

/*funksiyani bele yaradirlar ve asagida alizada() yazib funksiyani cagiririq */

nigarrr();
nigarrr();
nigarrr();

function nigarrr ()
{
    console.log("nigar");
}
/*amma cagirdigimiz seyi sonradan funksiyaya menimsedib onun icindeki consolu cixarda bilerik*/


const nigars= function()
{
    console.log("nigaralizade");
}

nigars();
/*const ve ya let ile deyisgeni funksiyaya menimsede bilirik amma bunu edende nigars() asagisinda const nigars.. kimi cagira bilmerik, olmur ele*/

                        



                                                /* 11.
                                                FUNKSIYAYA PARAMETR VERMEK  */

console.log('---------------------------------------')

const nigar1 = function(ad, soyad )
{
    console.log(`ad soyad ${ad} ${soyad}`);
}

nigar1("nigar", "alizada");

/*funsiayaya ad soyad parametrin veririk , ve cagiranda girdiyimiz datalar sira ile ad soyaq yerine yazilir*/

const nigar2 = function(ad ="niky", soyad= "alexzade" )
{
    console.log("ad "+ ad+" soyad "+soyad);
}

nigar2();

/* burda da eger data bos olsa cagiranda funksiyani onda default kimi funksiyani yaradanda veririk */






                                                    /* 12.
                                                    RETURN ELEMEK FUNKSIYADA
                                                     */

console.log('---------------------------------------')

const karealani =function(kenar){
    let alan=kenar**2
    console.log(alan)
    return alan

}                                                    
/*return sozu olmadan let,var ,const  ile yaratdigimiz deyisgenler funksiyadan kenarda cagrila bilmir */
const sonuc = karealani(6)
console.log(sonuc)
/*netice olaraq da 6 ustu 2 quvveri yani 36 ni veriri*/

const karealani2 =function(kenar){
    
    
    return kenar**3

}                                                    

const sonuc2 = karealani2(3)
console.log(sonuc2)

/*buda onun alternatividi eyni netice qaytarirlar*/







                                                /* 12 
                                                ARROW FUNCTIONS  */
console.log('---------------------------------------')


const karealani3 = (kenar) => {
    return kenar **2 
}

const sonuc6 =karealani3(5)

console.log(sonuc6);

/*arrow funksiyasi ile function sozun yazmaga ehtiyac yoxdu => ile bunu evez tmek olur.
ve eger funksiya bir dene parametr qebul edirse (..=(kenar) sozu kimi) onda moterizesiz de yazmaq olar amma 
coxlu parametr qebul etse onda moteriz ve vergulle ayiririrqiq*/


const karealani7 = kenar7=> kenar7**2

const sonuc7 = karealani7(4)
console.log(sonuc7)

/* Buda ustedekinin alternatividi , ve eger return de bir dene  netice qaytaririqsa onda {return} da yazmasaq olar pramooy kenar**2 olar yazmaq*/  


const nigar8fun = () => "nigar8"
const sonuc8=nigar8fun()
console.log(sonuc8);
/*burda da nigar8fun(parametresiz ve returnda  bir dene tip data olan ) adli funksiya yaradiriq ve onu sonuc8 adli const deyisgenine elave edib 
,sonucu ekrana yazdiririq*/

/*eger hecbir parametr almirsa da funksiya onda da moterize qpymaliyiq bos moterize */

const fatura = function (urunler, vergi)
{
    let toplam =0
    for (let i=0 ;i <urunler.length;i++){
        console.log(urunler[i])
        toplam  +=urunler[i]+urunler[i]*vergi
    }
    return toplam ;
}

console.log(fatura([10,20,30],2));


/*(10 + 10*2)+(20+20*2)+(30+30*2) =180 neticesini verecek */

const fatura2 = function (urunler, vergi)
{
    let toplam =0
    for (let i=0 ;i <urunler.length;i++){
        console.log(urunler[i])
        toplam  +=urunler[i]+urunler[i]*vergi
    }
    return toplam ;
}

console.log(fatura([10,20,30],2));

/*buda ustedikin eyni alternatividi*/






                                                    /*13. 
                                                    funksiya ve  method arasinda ferq 
                                                    */
 console.log('---------------------------------------')


 const nigar_func =() => 'Nigar'       
 let sonuc9 = nigar_func()
console.log(sonuc9);


 const  ad = 'niky'
 let sonuc10 = ad.toUpperCase();
 console.log(sonuc10);

/* funksiya ve  metoda aid numunedi .  */ 







let oyrencilerim = ['can', 'hakan', 'elif','tuba']
oyrencilerim.forEach(function()
{
    console.log("selam")
})

 
oyrencilerim.forEach(function(v)
{
    console.log(v)
})



console.log('---------------------------------------')
console.log('---------------------------------------')
console.log('---------------------------------------')


function carpma(p1,p2)
{
    alert(p1*p2);
    console.log(p1*p2);

    return p1*p2; 

};

carpma(3, 4);