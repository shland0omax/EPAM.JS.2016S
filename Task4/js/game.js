/**
 * Created by Шландаков on 19.08.2016.
 */

function Game(){
    var zombieTypes = [Zombie.Michael, Zombie.Strong];
    var zombies = [];
    var linesCount = 5;
    var distance = 854;

    this.start = function(){
        $('#btnGenerate').on("click", this.generateZombie);
        setInterval(this.move, 100);
        $(window).on("zombie_success", this.gameOver);
    };

    this.gameOver = function(){
        alert("game over");
    };

    this.move = function(){
        zombies.forEach(function(zombie){
            zombie.move();
        })
    };

    this.generateZombie = function(){
        var type = random(0, zombieTypes.length);
        var $line = $($(".field-line")[random(0, linesCount)]);
        var config = {};
        config.$line = $line;
        config.finishPosition = distance;
        var zombie = new zombieTypes[type](config);
        zombies.push(zombie);
    };

    this.explode = function(){

    };

    this.slowUp = function(){

    };

    var normalizeSpeed = function(){

    };

    this.growOld = function(){

    };
}

$(function(){
    var game = new Game();
    game.start();
});