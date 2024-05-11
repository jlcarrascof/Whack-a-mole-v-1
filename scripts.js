const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
const startBtn = document.querySelector('.start-btn');
const levels = document.querySelectorAll('.levels');
const game = document.querySelector('.game');

let lastHole;
let timeUp = false;
let score = 0;

function difficultyLevel() {
    const ele = document.getElementsByName('level');
    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            return ele[i].id;
        }
    }
}
