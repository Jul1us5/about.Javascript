// Masyvai, kokie?

// Įvairus duomenų tipai

let arr1 = [
    'Julius',
    {
        type: 'Js',
        age: 36
    },
    true,
    function() {
        return console.log('Julius');
    }
];

// arr1[3]();
// console.log(arr1[1].type);

// Daugiamačiai masyvai

let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(arr2[1][1]);

// Kad gauti kažkokią masyvo reikšmę

let arrOne = [
    'Arturas', // [0]
    'Tomas', // [1]
    'Petras', // [2]
    'Jonas' // [3]
];

// Masyvai turi tokią savybę kaip: LENGTH

let arr4 = ['Pirmas', 'Antras', 'Trecias'];

// console.log(arr4.length);

// Masyvas gali kopijuotis iš nuor. / du skirtingi raktai

let arr5 = ['Pirmas', 'Antras', 'Trecias'];
// console.log(arr5);

let newArr = arr5;

newArr.length = 2; // arr5

// console.log(arr5);

// Reikšmių keitimas arba pridėjimas

let arr6 = ['Pirmas', 'Antras', 'Trecias'];

arr6[0] = ':D';

arr6[2] = 'Naujas';

// console.log(arr6);

// Metodai !!!

// PUSH prideda į galą

let arr7 = ['Pirmas', 'Antras', 'Trecias'];

// arr7.unshift('ooo', '111231231');
// arr7.push('111', '222');

// console.log(arr7);

// SHIFT pašaliną pirmą elem. UNSHIFT prideda pirmą | Leti

//Kodėl? Nes: 1. nustatomas naujas indexas, 2. pastumti iš kairės į deš. 3. nustatyti naują LENGTH ir kuo didesnis masyvas tuo ilgiau tai užtrunka | Daugiau naudojama op sis

// POP pašaliną paskutinį, o push prideda paskutinį | Greitai


// Pašalinti iš kažkur

let arr8 = ['Pirmas', 'Antras', 'Trecias'];

// delete arr8[1];
// console.log(arr8);
// console.log(arr8[1]);
// console.log(arr8.length);

// console.log(arr8);


//-----------------------

// Splice padeda: Pridėti, pašalinti ir pakeisti
// SPLICE(1,1) nuo kur iki kiek elem

let arr9 = ['Pirmas', 'Antras', 'Trecias'];

arr9.splice(0, 1);

// console.log(arr9);
//-----------------------


// Pašalinta galima išsaugoti kint.

let arr10 = ['Pirmas', 'Antras', 'Trecias'];

let removed = arr10.splice(1, 1);
// console.log(arr10);
// console.log(removed);
//-----------------------

// -------- Pakeisti į kitą

let arr11 = ['Pirmas', 'Antras', 'Trecias'];

arr11.splice(2, 1, '01'); // vienas

// console.log(arr11);
// arr11.splice(1, 0, ':D', ';('); // du, o 0 pridėti 2

//-----------------------

// slice - kopijuoja

let arrr = [1, 2, 3, 4, 5];

let x = arrr.slice(0, 1); // arba be skaičių jeigu visas

// console.log(x);

//-----------------------

// Concat - sukuria naują masyvą į kurį kuopijuoja duomenys iš kitų masyvų

let arrr1 = [1, 2, 3, 4, 5, 6, 7, 8];

let arrr1New = arrr1.concat('PUSH')

// console.log(arrr1New);

//-----------------------


// Paiška: indexOf(position or -1) arba includes (true or false)
// PVZ: includes('Tomas', 2) 1. ko iesko ir nuo kokio index

// find ir findIndex / grazina tik pirma kuris TRUE
// find elementa, o findIndex randa indexa

let arrObj = [
    { name: 'Paulius', age: 30 },
    { name: 'Arturas', age: 10 },
    { name: 'Simona', age: 20 },
    { name: 'Tomas', age: 20 },
];

let result1 = arrObj.find(function(item, index, array) {
    return item.age === 10; // grazina tik pirma kuris TRUE
});

let result2 = arrObj.filter(function(item, index, array) {
    return item.age === 10; // grazina visus kurie TRUE
});

// console.log(result);

// arrow fun
// let result = arrObj.find(item => item.age === 20);

// console.log(result);

//--------------------

// Metodas sort()

let arrr2 = ['Tomas', 'Julius', 'Darius'];
// console.log(arrr2.sort());

let arrr3 = [10, 20, 1, 3, 4]; // Nes kaip stringas, todėl....
// console.log(arrr3.sort());

// console.log(arrr3.sort((a, b) => a - b)); // Arrow sort'as

// let math = [1, 10, 3, 5, 7, 9, 3, 11];

// let res = math.sort((a, b) => a - b);

// console.log(res);

let names = ['Darius', 'Mykolas', 'Dalius', 'Laura', 'Agne'];

// console.log(names.reverse());

// Metodas MAP

let arrr5 = ['Matass', 'Tomas', 'Laura'];

let res = arrr5.map(function(item, index, array) {
    return item[4];
});

// console.log(res);
// -------------------

// SPLIT pavercia i masyva, o JOIN atvirksciai
// split(',') kas skiria juos

let str = 'Julius Paulius Ir dar kazkas';

let strRes = str.split(' ');

// let strRes = str.split(',', 2); galima apriboti po kab. sk.

// console.log(strRes);

// console.log(strRes.join(' '));




// --------[ Papildomai ]----------

// Masyvas nera kaip atskiras duomenu tipas. Jie ( Masyvai ) tai objektas ( Kaip objektas )

let arrayNew = [];
let objNew = {};

// console.log(typeof arrayNew);
// console.log(typeof objNew);

// o kaip sužinoti kas yra kas?

// if (Array.isArray(objNew)) {
//     console.log('Masyvas');
// } else {
//     console.log('Objektas');
// }

// --------------------------
// Kaip galima perinkti masyvą

let who = ['Tomas', 'Petras', 'Augustas', 'Karolis'];
// console.log(who.length);

// console.log();

// Ciklai ( Loop )
// FOR
// Dek. kintam. | Salyga | inkrementas





// Jei reikia gauti tik reikšmę
// For of

// for (let member of who) {
//     console.log(member);
// }

// for (let member of who) {
//      console.log(member);
// }

// foreach atlieka funkciją kiekvienam elm. masyve

who.forEach((item, index, array) => {
    //  console.log(`${item} index'as yra ${index} masyve: ${array}`);
});

// Ir dar kartą apie..
// Masyvas yra kaip objektas todėl ir elgesi kaip objektas
// ----------------------------------------
// Pridėti į masyvą ne skaičių ( indexą ) o tiesiog savybės pvd. kaip indexas | Letina
// Masyvus reikia naudoti kaip masyvus, o objektus kaip objektus | ! Letina
// Masyvę nedaryti skiliu 1, 2, ! 7, 8, 9 | Letina
// Arba pildyti atvirksciai [10, 9, 5, 3, 2, 1] | Letina