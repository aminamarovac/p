// Za interakciju sa korisnikom se koristi poseban metod imena prompt()

const ime= prompt ("Unesite vase ime:");
console.log(ime);
let brojGodina;
brojGodina=prompt ("Unesite broj godina:");
console.log(brojGodina);
console.log(typeof brojGodina);
//Neki string mozemo prevesti u number na sledeca 2 nacina:
//1.nacin
brojGodina= +brojGodina;//preko oznake + ce se izvrsiti konverzija u number tip podatka
console.log(typeof brojGodina);
console.log(brojGodina);
//2.nacin
brojGodina=Number(brojGodina);
console.log(typeof brojGodina);

brojGodina=Number (prompt ("Unesite broj godina:"));
console.log(brojGodina);