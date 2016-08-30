/**
 * Created by Шландаков on 19.08.2016.
 */

var zombieTypes = [Zombie.Michael, Zombie.Strong];
var zombies = [];
var timeOuts = [];
var linesCount = 5;
var currentLevel = 0;
var distance = 854;

function start() {
    clearClickHandlers($('.button'));
    enableButton($('#btnGenerate'), handlers[GENERATE_ID]);
    enableButton($('#btnExplode'), handlers[EXPLODE_ID]);
    enableButton($('#btnGrow'), handlers[GROWOLD_ID]);
    enableButton($('#btnSlow'), handlers[SLOWUP_ID]);
    enableButton($('#btnPause'), handlers[PAUSE_ID]);
    $('#btnPause > p').text('Pause');

    setGameTimeouts();

    $(window).on('zombie_success', gameOver);
}

function pause(){
    stopGame();
    buttonFreezePause();
    pauseEffects();
}

function resume(){
    start();
    buttonFreezeResume();
    resumeEffects();
}

function stopGame() {
    for (var i = 0; timeOuts.length > 0; i++) {
        clearTimeout(timeOuts.pop());
    }

    disableButtons($('#btnGenerate'), $('#btnExplode'), $('#btnGrow'), $('#btnSlow'));

    $(window).off('zombie_success');
    clearClickHandlers($('.button'));
    enableButton($('#btnPause'), resume);
    $('#btnPause > p').text('Resume');
}


function gameOver() {
    stopGame();
    $('.game-over').show();
    disableButton($('#btnPause'));
}

function move() {
    zombies.forEach(function (zombie) {
        zombie.move();
    })
}

function setGameTimeouts(){
    timeOuts[0] = setTimeout(function () {
        move();
        if (timeOuts[0])
            timeOuts[0] = setTimeout(arguments.callee, frequency);
    }, 100);
    timeOuts[1] = setTimeout(function () {
        generateZombie();
        if (timeOuts[1])
            timeOuts[1] = setTimeout(arguments.callee, LEVELS[currentLevel].generateSpeed);
    }, random(600, 2000));
    timeOuts[2] = setTimeout(function () {
        clearDeadObjects();
        if (timeOuts[2])
            timeOuts[2] = setTimeout(arguments.callee, gcFrequency);
    }, 15000);
}

function clearDeadObjects() {    //replaces object array with another one, containing only living objects
    var newZombies = [];
    zombies.forEach(function (elem, i, collection) {
        if (elem.currentHealth > 0) {
            newZombies.push(collection[i]);
        }
    });
    zombies = newZombies;
}

$(function () {
    start();
});