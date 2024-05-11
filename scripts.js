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

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const id = Math.floor(Math.random() * holes.length);
    const hole = holes[id];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep(show, hide) {
    const time = randomTime(show, hide);
    const hole = randomHole(holes);
    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            peep(show, hide);
        }
    }, time);
}
