// Funkcija

// Funkcijos deklaravimas | Function declaration

function calcNumbers(pirmas, antras) { // Dek. funkciją su param.

    let result = pirmas + antras;
    return console.log(result);
}



// calcNumbers(2, 2);
// calcNumbers(10, 10);
// calcNumbers(12, 10);
// calcNumbers(10, 13);
// calcNumbers(15, 16);
// calcNumbers(149, 10);

// calcNumbers(10, 50); // Paleisti galima po funkcijos, prieš ir kiek nori kartu

// Kai kuriam: Funkcijos vardas pagal paskirti | naudoti prefix'us
// SHOW, GET, CALC, CREATE, UPDATE, CHECK
// pvz: showMesssage, getData, calcNumber, updateArray

// DAR | Funkcijos skirtos, kad nedubliuoti kodo

// -------------------------------

// Taip pat funkcija gali iskviesti kitas funkcijas

function a1() {
    console.log('Pirma');
}

function a2() {
    console.log('Antra');
}

function a3() {
    a1();
    a2();
}

// a3();
// -------------------------------
// Matomumas





function b1() {
    let kint = 11111;
    let message = 'Labas!'; // Lokalus kint.
    console.log(kint);
}


let message; // Globalus kint. | Siom dienom stengtis nenaudoti globaliu, vengti | Nebent saugom kokia nors globalia info

function b2() {
    let kint = 22222;
    console.log(kint);
    return message = 'Labas!';
}




// console.log(b2());
// -----------------------------------

// Parametrai

function calcNum(a, b) { // Lokalus kint.
    console.log(`Parametras a: ${a}`); // Lokalus kint.
    console.log(`Parametras b: ${b}`); // Lokalus kint.
    let result = a + b; // Lokalus kint.

    return result; // Lokalus kint.
}

// console.log(`a + b = ${calcNum(2, 10)}`);

// galima nustatyti default reiksme

function calcNum(a = 0, b = 0) {
    console.log(`Parametras a: ${a}`);
    console.log(`Parametras b: ${b}`);
    let result = a + b;

    return result;
}

// console.log(`a + b = ${calcNum(10, 9)}`);

// RETURN po jo fukcija baigia darba. Rašyti į eil.

// --------------------------
// Rekursija | fukcija kuri kviecia pati save..
// Reikalinga | Naudojamas tada kai reikia atlikti daug kokiu nors užduociu, apskaiciavimu ir pan.
// Lengviau palaikomas

function multi(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    } else {
        return numOne * multi(numOne, numTwo - 1);
    }
}
// console.log(multi(2, 10));



// Funkcijos deklaravimas | Function expression

let howAboutText = function() {
    console.log('Random string');
}




// ----------------------------


function num() {
    let res = 1 + 9;
    console.log(res);
}

let pushToVariable = num; // Kopijavimo metu funkcija nekvieciama, nes nera () 

// num();
// pushToVariable();

// Klausimas? Kuo skiriasi Function: Declaration | Expression ?

// -------------------------------

// Arrow Function

// function arrowFun(parametras, parametras) { // Classic
//     return išsireiškimas;
// }

// (parametras, parametras) => { return išsireiškimas; } // Arrow

//---------------------------------------
// Classic
function num(c) {
    return c + 100;
}

// Arrow Function be deklar. function

(a) => {
    return a + 100; // reikalingas return
}

// 2. Jei vienas issireisk., galima be {}
(a) => a + 100;

// 3. Jeigu vienas pram, galima ir be ()
a => a + 100;

// ------------------------------

let helloFunction = (text, name) => `${text} ${name}!`;

console.log(helloFunction('Labas', 'Juliau'));

// -----------------------------
// Ir dar šiek tiek apie..

//  setTimeout - leidžia iškviesti funkciją vieną kartą per tam tikrą laiką
// setInterval - leidžia iškviesti funkciją kiek nori kartu per tam tikrą laiką

// Yra vienas bet. sek. ne visada atitinka tikrą laiką | Itaka sudaro proc. užkrovimas, baterija ir pan.

let loop = 0;

function helloAgain(text, name) {


    console.log(`${text} ${name}! | ${loop}`);
    ++loop;
}

// setInterval(helloAgain, 3000, 'Labas', 'Juliau');

// -------------------------------------------

// Yra vienas bet. sek. ne visada atitinka tikrą laiką ( setInterval ) | Itaka sudaro proc. užkrovimas, baterija ir pan.

// Problema galima ispresti su setTimeout
// ---------- Rekursija

function helloAgain(text, name) {


    console.log(`${text} ${name}! | ${loop}`);
    ++loop;
    if (loop < 5) {
        setTimeout(helloAgain, 3000, 'Labas', 'Juliau');
    }

}

// setTimeout(helloAgain, 3000, 'Labas', 'Juliau');

// Ir funkcijos: paprastos, mažos, atlieką vieną tam tikrą darbą ir viskas
// O jei funkcija turi didelį funk. tai padalinam per kelias funkcijas ir su kita fun. iškviečiam viską

// ...