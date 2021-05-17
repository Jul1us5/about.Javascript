"use strict";


function getData(data) {


    let HTML = '';
    let sectionBody = document.querySelector('.section');

    if (Array.isArray(data)) {

        // -----------
        for (let i = 0; i < data.length; i++) {

            HTML += getList(data[i]);
        }

        //   for (let index of data) {
        //       HTML += getList(index);
        //   }

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
                     ${getTime(time)}
                  </div>
                  <div class="more">
                     <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </div>
               </div>`;
    return HTML;
}

function returnMain(text) {


    //  console.log(text);

    let HTML = `<div class="card__main">
                  ${getText(text)}
                  ${getGallery(text.paveiksliukai)}
                </div>`;

    return HTML;
}
// ${getGallery(text.paveiksliukai)}
// ${getGallery(text.paveiksliukai)}

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

function getGallery(img) {



    let HTML = '';
    let pictures = '';
    let kiek = 4;


    if (img.length > 0) {

        for (let i = 0; i < img.length; i++) {
            pictures += `<img src="./img/${img[i]}" alt="pic">`;
            if (img.length > kiek) {
                img.length = kiek;
            }
            HTML = `<div class="gallery">
                        <div class="gallery__wrap length--${i + 1}">
                        ${pictures}
                        </div>
                     </div>`;
        }
    }


    return HTML;

}

function getTime(time) {

    //  console.log(time);

    let HTML = '';

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    var previous = new Date(time);
    var current = new Date().getTime();

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000).toString() + " seconds ago";
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute).toString() + " minutes ago";
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour).toString() + " hours ago";
    } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay).toString() + " days ago";
    } else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth).toString() + " months ago";
    } else {
        return Math.round(elapsed / msPerYear).toString() + " years ago";
    }


    //  let time;
    //  let y = Math.floor(list / 3600 / 24 / 365);
    //  let d = Math.floor(list / 3600 / 24);
    //  let h = Math.floor(list / 3600);
    //  let min = Math.floor(list / 60);

    //  if (y > 0) {
    //      time = `${y} y.`;
    //  } else if (d > 0) {
    //      time = `${d} d.`;
    //  } else if (h > 0) {
    //      time = `${h} h.`;
    //  } else if (min > 0) {
    //      time = `${min} min.`;
    //  } else {
    //      time = `${list} s.`
    //  }
    //  HTML = `<div class="time">${time}</div>`;

    //  return HTML;


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