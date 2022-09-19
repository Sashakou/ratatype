import './style/index.scss';
import 'bootstrap';
import makeLetters from './js/makeLetters';
import followWidth from './js/followWidth';
import refresh from './js/refresh';
import { Modal } from 'bootstrap'

let typos = 0;
let correct = 0;
const numberOfLetters = 15;
let arr;

const elCorrect = document.querySelector('.correct');
const elTypos = document.querySelector('.typos');
let bird = document.querySelector('.bird');
let typeBlock = document.querySelector('.typeBlock');
let letters = document.querySelector('.letters');

const isKyr = str => /[а-я]/i.test(str);
const exampleModal = new Modal(document.getElementById('exampleModal'), {
    keyboard: false
});
const ModalLang = new Modal(document.getElementById('ModalLang'), {
    keyboard: false
});
const ModalMenu = new Modal(document.getElementById('ModalMenu'), {
    keyboard: false
});

document.querySelector('.themeBtn').addEventListener("click", (function (e) {
    let body = document.getElementsByTagName('body');
    body[0].classList.value ? body[0].classList.remove("dark-mode") : body[0].classList.add("dark-mode");
}));
document.querySelector('.reloadBtn').addEventListener("click", (function (e) {
    arr = refresh(correct, typos, arr, numberOfLetters);
    letters.innerHTML = arr.join('');
    followWidth();
}));
document.querySelector('.tryAgain').addEventListener("click", (function (e) {
    arr = refresh(correct, typos, arr, numberOfLetters);
    letters.innerHTML = arr.join('');
    followWidth();
    exampleModal.hide();
}));
document.querySelector('.btnCloseModal').addEventListener("click", (function (e) {
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

typeBlock.addEventListener('keydown', function(event) {
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
    arr = makeLetters(numberOfLetters).split('');
    letters.innerHTML = arr.join('');
}
document.addEventListener("DOMContentLoaded", ready);
window.onload = function() {followWidth();}
