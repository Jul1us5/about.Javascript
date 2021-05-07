"use strict";

function getData(data) {

    let HTML = '';
    let sectionBody = document.querySelector('.section');

    if (Array.isArray(data)) {

        for (let i = 0; i < data.length; i++) {

            HTML += getList(data[i]);
        }

        return sectionBody.innerHTML = HTML;

    } else {
        return console.log('Tai ne masyvas!');
    }
}

function getList(list) {

    let HTML = `<div class="card">
                  <div class="card__head">
                     <img src="./img/avatar/user.png" alt="avataras">
                     <div class="user">
                           <div class="name">${list.autorius.vardas} ${list.autorius.pavarde}</div>
                           <div class="time">${list.laikas}</div>
                     </div>
                     <div class="more">
                           <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                     </div>
                  </div>
                  <div class="card__main">${list.pranesimas.tekstas}</div>
                  <div class="card__footer">footer</div>
               </div>`;

    return HTML;
}


//----------- !!!!!!!
getData(feed);