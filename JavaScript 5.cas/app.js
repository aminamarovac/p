// Kondicionali
// u JavaScriptu if naredba se pise na sledeci nacin:

//if(uslov1) {
    //Ako je ispunjen uslov1 izvrsiti odredjeni kod
//}else if(uslov2) {
    //Ako je ispunjen uslov2 izvrsiti odredjeni kod
//}else{
    //U slucaju da nije zadovoljen ni prvi ni drugi uslov,izvrsigti kod
//}

//Na osnovu unetih godina ispisati u konzoli sledece:
//ako je broj godina manji od 12:Vi ste decijeg doba.
//ako je broj godina izmedju 12 (ukljucuje se)i 18 (ne ukljucuje)vi ste maloletni
//ako je broj godina izmedju 18(ukljucuje se) i 40(ne ukljucuje)vi ste punoletni.
//ako je broj godina veci ili jednak 40 vi ste zrela osoba.
//ako korisnik nije uneon broj neka mu se ispiser poruka niste uneli broj godina.
 
const brojGodina=Number(prompt ("Unesite svoju starost:"));
if(brojGodina<12){
    console.log("Vi ste decijeg doba.");
}else if (brojGodina>=12 && brojGodina<18) {
    console.log("Vi ste maloletni.");
}else if(brojGodina>=18 && brojGodina<40){
    console.log("Vi ste punoletni.");
}else if(brojGodina>=40){
    console.log("Vi ste zrela osoba.");
}else{
    console.log("Niste uneli broj godina.");
}

//uslov za parnost broja je sledeci:
//broj % 2 ===0 broj je paran
//broj %2 !==0 broj je neparan

//Napisati program koji proverava da li je uneti broj od strane korisnika paran ili neparan i ispisuje odgovarajucu poruku.

const nekiBroj = Number(prompt("Unesite neki broj:"));
if (nekiBroj%2 === 0) {
    console.log("Uneli ste paran broj.");
}else if (nekiBroj%2===1){
    console.log("Uneli ste neparan broj");
}else {
    console.log("Niste uneli broj.");
}

//Napisati program koji,ako je uneti broj veci od 0 stampa poruku broj je pozitivan,
//u suprutnom broj je negativan

const nekiBrojj =Number(prompt("Unesite neki broj:"));
if (nekiBrojj<0){
    console.log ("Broj je negativan.");
}else if(nekiBrojj===0){
    console.log("Broj je nula")
}else if(nekiBrojj>0){
    console.log("Broj je pozitivan.")
}else {
        console.log("Uneto nije broj")
    }



//Switch naredba:
//switch (izraz) {
   // case x:
        //blok koda
        //break;
    //case y:
        //blok koda
            //break;
   // case z:
        //blok koda
               // break;
    //default:
        //blok koda

//}
//Ako je zadovoljen slucaj x,izvrsice se 66.linija koda,
//ako nije prelazimo na sledeci slucaj itd.
//Kad se dodje do break rezervisane reci switch naredba prestaje da se izvrsava.
//Ako se izostavi break to znaci da ce se izvrsiti linija koda od sledeceg slucaja
//koji zapravo nije zadovoljen i to nije nesto sto zelimo da se desi.
//Default rezervisana rec odredjuje kod koji ce se izvrsiti ako nijedan od prethodnih 
//slucajeva nije zadovoljen.

//Korisnik unosi broj koji mora biti izmedju 12 i 15(ukljucuju se oba)koristeci switch naredbu
//izvrsiti ispis u konzoli broj koji je korisnik uneo pod zadovoljenim uslovom
const broj2 = Number(prompt("Unesite broj izmedju 12 i 15: "));
switch (broj2) {
  case 12:
    console.log(broj2);
    break;
  case 13:
    console.log(broj2);
    break;
  case 14:
    console.log(broj2);
    break;
  case 15:
    console.log(broj2);
    break;
  default:
    console.log("Niste uneli broj iz trazenog opsega.");
}
//Domaci zadaci
//Napisati broj koji na osnovu dva uneta broja od strane korisnika ispisuje:
//Povrsinu kvadrata ako su uneti brojevi jednaki
//Povrsinu pravougaonika ako su uneti brojevi razliciti.

//2.zadatak
//Korisnik unosi dva realna broja x i y.Napisati program koji izracunava i stampa
//kolicnik x/y,ako je broj y razlicit od nule,
//a inace ispisuje poruku:Deljenje je nemoguce.
