// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// 2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
// 3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
// 4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// 5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
let a;
let b; 
 if(a == b){
    console.log('abu yra lygus')

 }if(a > b){


console.log('a daugiau uz b')
 }

// 2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for(let i = 1; i < 10; i++){
    console.log(i);
}

// 3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for(let i = 0; i < 10; i+=2){
    console.log(i);
}

// 4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

function randomSkaicius(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      let skaiciavimas = 0;
      let skaicius;
      
      for(let i = 0; i < 5; i++) {
          skaicius = randomSkaicius(1, 10);
          console.log(skaicius);
      }

// 5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. 
//Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let i;
    
    while(i != 5) { 
        i = randomSkaicius(0, 10);
        console.log(i);
    }


// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, 
//nenaudojant sort funkcijos. (7 taškai)

function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let masyvas = [];
  for(i = 0; i < randomSkaicius(20,30); i++){
      masyvas.push(randomSkaicius(10,30))
  }
  let suma = 0;
for(i = 0; i < masyvas.length-2; i++){
    suma = suma + masyvas[i]
}

console.log(suma);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
//Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

let masyvas1 = ['a','b','c','d']
for(i = 0; i < 100; i++){
   
}

