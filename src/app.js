import './style/index.scss';
import 'bootstrap';
import test from './js/test.js';
import makeLetters from './js/makeLetters';
import followWidth from './js/followWidth';
import refresh from './js/refresh';
//window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import { Modal } from 'bootstrap'

let typos = 0;
let correct = 0;
const numberOfLetters = 15;
let arr;

const elCorrect = document.querySelector('.correct');
const elTypos = document.querySelector('.typos');
let bird = document.querySelector('.bird');
const exampleModal = new Modal(document.getElementById('exampleModal'), {
    keyboard: false
});
const ModalLang = new Modal(document.getElementById('ModalLang'), {
    keyboard: false
});
const ModalMenu = new Modal(document.getElementById('ModalMenu'), {
    keyboard: false
});

//let themeBtn = document.querySelector('.themeBtn');
document.querySelector('.themeBtn').addEventListener("click", (function (e) {
    let body = document.getElementsByTagName('body');
    //console.log(body[0].classList.contains("dark-mode"));
    body[0].classList.value ? body[0].classList.remove("dark-mode") : body[0].classList.add("dark-mode");
}));
document.querySelector('.reloadBtn').addEventListener("click", (function (e) {
    //refresh();
    //refresh(correct, typos, arr, numberOfLetters, letters);
    //arr = refresh(correct, typos, arr, numberOfLetters);
    //letters.innerHTML = arr.join('');
    letters.innerHTML = arr = makeLetters(numberOfLetters).split('').join('');
    followWidth();
}));
document.querySelector('.tryAgain').addEventListener("click", (function (e) {
    //refresh();
    arr = refresh(correct, typos, arr, numberOfLetters);
    letters.innerHTML = arr.join('');
    followWidth();
    exampleModal.hide();
}));
document.querySelector('.btnCloseModal').addEventListener("click", (function (e) {
    //refresh();
    arr = refresh(correct, typos, arr, numberOfLetters);
    letters.innerHTML = arr.join('');
    followWidth();
    exampleModal.hide();
}));
document.querySelector('.continue').addEventListener("click", (function (e) {
    ModalLang.hide();
}));
document.querySelector('.btnCloseModalLang ').addEventListener("click", (function (e) {
    ModalLang.hide();
}));
document.querySelector('.burgerMenu ').addEventListener("click", (function (e) {
    ModalMenu.show();
}));
document.querySelector('.btnCloseModalMenu ').addEventListener("click", (function (e) {
    ModalMenu.hide();
}));
let typeBlock = document.querySelector('.typeBlock');
//let coverTypeBlock = document.querySelector('.coverTypeBlock');

//console.log(coverTypeBlock);




//let arr = ['i', 't', 'e', 'x', 't', ' ', 'x', 'f', 'c', 'j', 'n', ' ', 'g', 'd', 'v', 'e', 'm'];
//let arr = ['d', 'y', 'j', 'e', 'u', ' ', 'k', 'l', 'w', 'f', 'i', ' ', 'e', 's', 'p', 'e', 'k']
//let arr = ['f', 'd', 'z', 'j', 'i', ' ', 'd', 'o', 'n', 'l', 'o', ' ', 'r', 'v', 'k', 'e', 'x']
let letters = document.querySelector('.letters');



const isKyr = str => /[а-я]/i.test(str);

typeBlock.addEventListener('keydown', function(event) {
    console.log(event.key);
    console.log(arr);
    console.log(arr[0]);
    // console.log(arr[0] !== event.key);
    console.log(arr[0] === event.key);
    if(isKyr(event.key)){
        ModalLang.show();
    }else{
        bird.classList.remove("move");
        if(arr[0] !== event.key){
            typos++
            bird.classList.add("angry");
        }else if(arr[0] === event.key){
            followWidth();
            correct++
            bird.classList.add("bite");
            arr.shift();
            letters.innerHTML = arr.join('');
            if(arr.length === 0){
                elCorrect.innerHTML = correct;
                elTypos.innerHTML = typos;
                exampleModal.show();
            }
        }

    }
});
typeBlock.addEventListener('keyup', function(event) {
    bird.classList.add("move");
    bird.classList.remove("bite");
    bird.classList.remove("angry");
    //console.log('keyup');
});
document.querySelector('.typeBlock').addEventListener("click", (function (e) {
    bird.classList.add("move");
}));
document.querySelector('.typeBlock').addEventListener("blur", (function (e) {
    console.log('blur');
    bird.classList.remove("move");
}));



window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth > 992){
        ModalMenu.hide();
    }
    followWidth();
});


function ready() {
    //arr = makeLetters(numberOfLetters).split('');
    //letters.innerHTML = arr.join('');
    letters.innerHTML = arr = makeLetters(numberOfLetters).split('').join('');
    console.log(arr);
}
document.addEventListener("DOMContentLoaded", ready);
window.onload = function() {followWidth();}
