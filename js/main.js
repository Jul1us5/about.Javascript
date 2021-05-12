"use strict";


function getData(data) {


    let HTML = '';
    let sectionBody = document.querySelector('.section');

    if (Array.isArray(data)) {

        // -----------
        //  for (let i = 0; i < data.length; i++) {

        //      HTML += getList(data[i]);
        //  }

        for (let index of data) {
            HTML += getList(index);
        }

        return sectionBody.innerHTML = HTML;
        // -----------

    } else {
        return console.error('Tai ne masyvas!');
    }
}

// Main FUNCTION

function getList(list) {

    let HTML = `<div class="card">
                  ${returnHeader(list.autorius, list.laikas)}
                  ${returnMain(list.pranesimas)}
                  ${returnFooter(list.autorius)}
               </div>`;

    return HTML;
}

// Helper FUNCTION | Returns

function returnHeader(who, time) {

    let HTML = `<div class="card__head">
                  ${getAvatar(who)}
                  <div class="user">
                     <div class="name">${who.vardas} ${who.pavarde}</div>
                     <div class="time">${time}</div>
                  </div>
                  <div class="more">
                     <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </div>
               </div>`;
    return HTML;
}

function returnMain(text) {

    let HTML = `<div class="card__main">
                  ${getText(text)}
                  <div class="gallery">
                     <img src="./img/5.jpeg" alt="img">
                  </div>
               </div>`;

    return HTML;
}

function returnFooter(who) {

    let HTML = `<div class="controller">
                  <span>like</span>
                  <span>comment</span>
                  <span>share</span>
               </div>
               <div class="card__footer">
               ${getAvatar(who)}
                  <textarea placeholder="Your message"></textarea>
                  <div class="actions">
                     <i class="fa fa-smile-o" aria-hidden="true"></i>
                     <i class="fa fa-camera-retro" aria-hidden="true"></i>
                     <i class="fa fa-picture-o" aria-hidden="true"></i>
                     <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                  </div>
               </div>`;

    return HTML;
}

function getText(message) {

    let messageText = message.tekstas;

    let HTML;
    let kiek = 10;
    let cutted;
    let print;
    let textArr = messageText.split(' ');

    // Cutted TEXT first
    if (textArr.length > kiek) {
        cutted = textArr.slice();
        cutted.length = kiek;
        print = cutted.join(' ');
        HTML = `<p value="${messageText}">${print}</p><span id="showMore">...show more</span>`;
    } else {
        //  Normal TEXT
        print = textArr.join(' ');
        HTML = `<p>${print}<span></span></p>`;

    }


    return HTML;
}

function renderText() {

    let cards = document.querySelectorAll('.card');
    let showButton = document.querySelectorAll('.card__main span');
    let cardMain = document.querySelectorAll('.card__main p');
    //  let showButton = document.getElementById('.showMore');

    for (let i = 0; i < showButton.length; i++) {

        let feedText = feed[i].pranesimas.tekstas;
        showButton[i].addEventListener('click', (e) => {

            cardMain[i].innerHTML = feedText;
        });
    }
}

// Global Function 

function getAvatar(img) {

    if (img.avataras === '') {
        img.avataras = 'user.png';
    }
    let HTML = `<img src="./img/avatar/${img.avataras}" alt="avataras">`;

    return HTML;
}


getData(feed);

renderText();