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
const birdAnim = [
    { transform: 'translate(0px, 0px)' },
    { transform: 'translate(30px, 0px)' },
    { transform: 'translate(0px, 0px)' },
];
const timeAnim = {
    duration: 400,
    iterations: 1,
    easing: 'ease-in-out'
}
const angry_eyeAnim = [
    { visibility: ' visible' }
];
const angry_eyeTimeAnim = {
    duration: 500,
    iterations: 1,
}
const angry_eye = document.getElementById("angry_eye");
const beak_angry = document.getElementById("beak_angry");
document.querySelector(".textField").addEventListener('keyup', function(event) {
    bird.classList.remove("move");
    if(isKyr(event.key)){
        ModalLang.show();
    }else{
        if(arr[0] !== event.key){
            typos++
            angry_eye.animate(angry_eyeAnim, angry_eyeTimeAnim);
            beak_angry.animate(angry_eyeAnim, angry_eyeTimeAnim);
            bird.animate(birdAnim, timeAnim);
        }else if(arr[0] === event.key){
            document.getElementById('anim_beak_top').beginElement();
            document.getElementById('anim_beak_bottom').beginElement();
            correct++
            arr.shift();
            letters.innerHTML = arr.join('');
            followWidth();
            if(arr.length === 0){
                elCorrect.innerHTML = correct;
                elTypos.innerHTML = typos;
                exampleModal.show();
            }
        }
    }
    this.value = "";
    bird.classList.add("move");
});

document.querySelector('.textField').addEventListener("blur", (function (e) {
    bird.classList.remove("move");
}));
document.querySelector(".textField").addEventListener("focus", (function (e) {
    bird.classList.add("move");
}));

window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth > 992){
        ModalMenu.hide();
    }
    followWidth();
});

function ready() {
    document.querySelector(".textField").focus();
    arr = makeLetters(numberOfLetters).split('');
    letters.innerHTML = arr.join('');
}
document.addEventListener("DOMContentLoaded", ready);
window.onload = function() {followWidth();}



