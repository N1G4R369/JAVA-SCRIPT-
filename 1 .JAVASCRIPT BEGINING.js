                                    
                                    
                                    
                                    //  1 . JAVASCRIT UCUN CONSOL LOGLARI  TESTIN 




    alert("wellcome to javascript :)" )
    /*var a=10;
    alert(a);*/

    console.clear();
    console.log("hello js")

        console.log("true")
        console.log(12345)
        console.log(12345)
        
        var a = 20;
        console.log(a);
        console.log(["nigar","ali"])
        console.log(typeof a)
        console.warn("this is a warning");
        console.error("this is a error");
       

        //consol ucun codlar










                                      // 2. DEYISKEN YARATMAQ


 var a = 20;
 var b =10;
 var c= 40;

 console.log(a,b,c);
 console.log("hello")



 var numbers =[1,2,3,4,5];
 console.log(numbers);
 console.log(typeof numbers);
 console.log(numbers[0]);
 
//burda array tipinde list kimidi datalar 

 var number =5
 console.log(number)

 //burda is sadece bir data olan deyisgendi


 var person ={
     name : "nigar alizada",
     age :22
 }

 console.log(person)
 console.log(typeof person)

 //burda da personun icine 2 dene deyisgen yazdiririq

 var date = new Date()
 console.log(date);
 console.log(typeof date)


 //----------------------------------------------


 var hello = function(){
      console.log("hello")
 }
 console.log (hello)
 console.log(typeof hello)


 var a = [1,2,3];
 var b=a; 
 a.push(4)

 console.log("DAS IST B "+b);

 var names ="nigar"
 console.log(names)

 var names ="alizada "

 console.log(names)

 var m,f
 m=20
 f=5

 console.log(f+m)

 //---------------

 let d,v
 d=10
 v=5

 console.log(d+v)

 ///---------------

const y  = [1,2,3,4,5]
console.log(y);
y.push(6)

console.log(y);











                                            /* 3.
                                            DATA TIPLERININ DEYISDIRILMESI 
                                            */

let value;

value= String(123)
value= String(3.14)
value= String(true)
value= String(false)
value = String(function() {console.log()})
value = String([1,2,3,4])
/*burda ustde yazdigarimizin hamsinin qarsisina string yazanda onda bu tiple(number,boolean,function)
bunlar hamisi stringe cevrir. */


value = (10).toString()
value = (3.14).toString()
/*burda da eyni isi gorur sadece axtinda tostring yazmaqla edir*/

console.log(value)
console.log("tipi - "+typeof value)
/*burda da neticeni select edur*/

//----------------------------------

value = Number ("123")
value = Number (null)
value = Number (undefined)
value = Number ("hello js")
value = Number (function(){console.log()})
value = Number ([1,2,3,4])


console.log(value)
console.log("tipi - "+typeof value)

/*burda da usteki ile eynidi sadece string yox , numbre ceviririk datani */


value= parseFloat("3.14")
value= parseInt("5")

console.log(value)
console.log("tipi - "+typeof value)

/*burda da tipi number edir amma parse usulu ile */


//--------------


const p = "hello "+ ("34")

console.log(p)
console.log(typeof p)


const o = Number("34")+53
console.log(o)
console.log(typeof o)

/* eger herfle reqemi bir yerde cagirirqsa onda tipi avtomatik string olacaq ve hello34 olacaq,
amma qarsisina number yazib parse edenden sonra toplasaq onda cemi yazib bumber verecek tipi*/










                                             /* 4.
                                            OPERATORLAR VE RIYAZI METODLAR 
                                            */




const value1 =10
const value2 =4

value = value1+ value2 
value = value1- value2 
value = value1* value2 
value = value1/value2 
value = value1% value2 //bolunmesinden qalan qaligi tapir

console.log("cemi ---> " + value)

//bunlar riyazi operatorlardi


// --------------------------------------------------


value = Math.PI;
value = Math.E

value = Math.round(3.6)
value = Math.round(3.2)  //adi yuvarlama 

value = Math.ceil(3.8)
value = Math.ceil(3.2) //herzaman ozunden yuxari reqeme yuvarlasdirir 


value = Math.floor(3.2)
value = Math.floor(3.8) //herzaman ozunden asagi reqeme yuvarlasdirir 

value = Math.sqrt(16)
value = Math.sqrt(31) //burda da kok hissesnin aliriq 

value = Math.abs(-10) //burda da abs deyerin (musbet ) deyerin  aliriq

value = Math.pow(4,2) 
value = Math.pow(8,3) //burda da 8 in 3 cu dereceden quvvetini aliriq  aliriq


value = Math.max(10,-1,100,32) //listedeki maximum boyuk ededi tapir
value = Math.min(10,-1,100,32) //listedeki minumum kicik edei tapir

value = Math.random() //1 ve 0 arasinda(0 daxil) random edeleri verir herdefe 

value = Math.floor(Math.random()*20+1) // bu da 0 ile 20+1 (21-e ) qeder random ededler yaradir

console.log("riyazi funksiyanin neticesi ---> " + value)









                                                /*5.
                                            STRING YAZI METODLARI
                                            */


 const firstname = "Louis"
 const lastname = "Armstrong"                                       
 const langs = "java,python, c++"

 value = firstname + " " + lastname

 value = "Nigar Alizada "
value += " Kirilova" // value= value +"Kirilova " "bunlar ikisi de eynidi nigar alizadeye kirilovani elave edir"

/*1 ci */ console.log(firstname.length) 

/*2 ci */ value = firstname.length
console.log(value)

/* yuxarudaki  1 ci ve ikinci sert isisi de eyni neticeni qaytarir yani 
soyadinin uzunlugun verir her ikisi */


value=firstname.concat( " " , lastname, " " ,"son of terminador")//burda da ad soyada elave nese soz de sosub birlesdiririk


value= firstname.toLowerCase() //kicik herle edir butun soyadi

value = firstname.toUpperCase()//boyuk herle edir butun soyadi

value= firstname[0] // bu firstname in  0-cielementini yani  ilk indexini veriri, yani Luisin L herfin .
value = firstname[4] // buda 0dan baslayaraq saymaga, 4cu indexi yani  s herfini verir 
value = firstname[firstname.length-1] //buda ustedkinin alternatividi ve buda sonuncu herfi  s herfini verir



value= firstname.indexOf("L") 
value= firstname.indexOf("o")
value= firstname.indexOf("n")

/*burda da L ve o herfinin indexsini tapiriq ve yerin gosteren  saylarin gosteri, amma burda 
firstname icinde(Louis) de n herfi yoxdu deye -1 gosterecek .*/




value = firstname.charAt(0) //sozdeki ilk herfi select edir

value = lastname.charAt(lastname.length-3) //sozdeki axirdan 3 cu herfi select edir 


value= langs.split(",") //bu vergulle olan hisseleri ayirir brbirinden 

value= langs.replace("python","css") //bu ise arrayin icindeki python soun css ile evez edir

value= langs.includes("java") // buda yoxlayir ki verdiyimiz arrayin icinde java sozu varmi, var deye netice tru qayidir
value= langs.includes("dfsfvs")//amma arrayde bu soz yoxdu deye false qayidir


console.log("soyad --> "+value) 



let adSoyad ="leonardo da vinci"
let son =adSoyad.lastIndexOf('n')
console.log("sonuncu index "+son)

/*sozdeki sonuncu n indexinin reqemle yerini godsterir*/ 

let basdanSona =adSoyad.slice(0,8);
console.log(basdanSona)


let basdanSonaSubstr = adSoyad.substr(0,8)
console.log("substr ile: "+basdanSonaSubstr);

//burda da substr ve slice oxsardi. eyni isi gorur.her ikisi evvelden baslayir (0 ci indexden ) 8 e qeder olan hisseni verir







                                                /* 6. 
                                                TEMPLATE LITERAL- STRING 
                                                YARATMADA YENI  METHODLAR 
                                                */

const namess = "nigar ALIzada "
const department = "cyber sec"
const salary =8000

const q = "name : " + namess + "\n"+"departamenti : "+ department+ "\n" + "salary : "+ salary

const x= `name:${namess}\ndepartment:${department}\nsalary:${salary}`;
console.log (x)
                 

const framework1 ="angular"
const framework2 ="vue"
const framework3= "react"

let html=`
${framework1}
${framework2}
${framework3}
`
console.log(html);


                                        

                                                     /* 7.
                                                        ARRAYLERIN FUNKSIYALARI
                                                     */

let isimler = ['nigar','kirilova','ali','kirilov']

let yaslar =[3.18,15,50]

let random =[ 'nigar',1,'ali',2]

let tire_ile=isimler.join('-')
console.log(tire_ile)

let vergulle=isimler.join(',')
console.log(vergulle)


/* 
burda join funksiyasi ile arrayin butun elementleri arasinda vergul ve tire ile ayirici elave edir
 */

let elave=isimler.concat(['niky','alex'])
console.log("elave "+elave);
console.log("originali "+isimler);

/*CONCAT ILE UMUMI ISIMLER ARRAYINE HELEIK NIKY VE ALEX SOZUN EKLAVE EDIR, AMMA UPDATE ELEMIR*/

let push_elave=isimler.push(['niky2','alex2','niky2','alex2'])
console.log("originali push "+isimler);
/*pushda ise concat dan ferqli olaraq updare kimi idir , yani isimler umumi deysir.*/
let pop_elave=isimler.pop()
console.log("originali pop  "+isimler);
/*pop ise yalniz push ile verilmis adlari geri alib reverse edir */







                                        /* 8
                                        boolean tipi 
                                        */
console.log("---------------------------"); 
console.log(true ,false);  

let email="ngr@gmail.com"
let varmi=email.includes("h")
console.log(varmi);


let ad_Soyad=['niky5','alex5']
let varmi2=ad_Soyad.includes('niky5')
console.log(varmi2);

/*note : egere burda niky5 yazsaq tru qaytaracaq amma sadece n herfi yazsaq onda false qaytarir
cunki burda hefe gore yox soze gore baxilir , her soz butovlukde bir elementdi */



let yas=29;
console.log("yas ");
console.log(yas==29) // 29 a beraberdi deyir ve netice true verir
console.log(yas==35) //yas  35 beraberdise onda da true verir ,deyilse false 
console.log(yas!=29)//yas 29 a beraber deyil yazilib netice false
console.log(yas<29) // yas 29 dan kicikdi ,netice false 
console.log(yas>=29) //yas 29 a beraber boyukdu, netice true 









                                                /* 9
                                                 data tiplerin muqaise */

                                                 
console.log("---------------------------");

let yas1 = "29"
console.log(yas1+1);

console.log(yas === 29);  //3  dene beraberlik  hem yasin 29 olmasi hemde tipinin burdaki kimi nubere beraber olmasidi
console.log(yas === "29");//3  dene beraberlik  hem yasin 29 olmasi hemde tipinin burdaki kimi stringe beraber olmasidi

console.log(yas1!==29); //3  dene beraberlik yasin 29 olmasi amma tipinin burdaki kimi nubere beraber olmamasidi
console.log(yas1!=="29");//3  dene beraberlik yasin 29 olmasi amma tipinin burdaki kimi stringe beraber olmamasidi

let yas2 = "30"

console.log(yas2+1) //burda 301 olur netice cunki yas2 stringdi toplamir 1 ile
console.log(typeof yas2) //tipi de string

yas2 = Number(yas2)//tipin numer edirik
console.log(yas2+1); //cemleyir
console.log(typeof yas2) //tipi de number olur daha


let sonuc=Number('nigar')
console.log(sonuc); //tip olaraq nan (not a  number ) olacaq 


let sonuc2=Boolean(18)   //true
console.log(sonuc2);  
/*boolean verende data tipinde  eger eded 0 disa hemise false 
olacaq amma 0 dan basqa butun ededlerde true olacaq */
let sonuc3=Boolean(0)
console.log(sonuc3);     //false

let sonuc4=Boolean('0')
console.log(sonuc4); //true olacaq cunki stringde 0  bele true verir

let sonuc5=Boolean('')
console.log("sonuc 5 : " + sonuc5); //yalniz null olanda stringde false qaytarir boolean