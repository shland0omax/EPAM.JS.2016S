//TODO: add animation stop, restart; some animatons; setTimeout for res and bomb after game resume; global var with timeout values; 

var timeoutId = [];
var resourceSize = 64;

$(function () {
    $("#start").on("click", start);
});

function start() {
    timeoutId[0] = setTimeout(function () {
        addResource();
        timeoutId[0] = setTimeout(arguments.callee, 500);
    }, 500);
    timeoutId[1] = setTimeout(function () {
        addBomb();
        timeoutId[1] = setTimeout(arguments.callee, 5000);
    }, 5000);
    var $startButton = $("#start");
    $startButton.off("click");
    $startButton.on("click", stop);
    $startButton.removeClass("start");
    $startButton.addClass("stop");
    $startButton.text("Stop");
    var panel = $("#game-panel");
    panel.on("click", ".res", clickResourceHandler);
    panel.on("click", ".bomb", clickBombHandler);
}

function stop() {
    while(timeoutId.length){
        clearTimeout(timeoutId.pop());
    }
    var $startButton = $("#start");
    $startButton.off("click");
    $startButton.on("click", start);
    $startButton.removeClass("stop");
    $startButton.addClass("start");
    $startButton.text("Start");
    $("#game-panel").off("click", ".res");
}

function createPlayElement() {
    var panel = $("#game-panel");
    var $element = $(document.createElement("div"));
    $element.css({top: random(0, panel.height() - resourceSize)});
    $element.css({left: random(0, panel.width() - resourceSize)});
    $element.addClass("logo");
    $element.addClass("play");
    panel.append($element);
    return $element;
}

function addResource() {
    var $element = createPlayElement();
    $element.addClass("res");
    var type = getRandomResource();
    $element.addClass(type);
    $element.attr("id", type);
    setResourceAnimate($element);
    setTimeout(resourceTimeout, 700);
}

function addBomb() {
    var $element = createPlayElement();
    $element.addClass("bomb");
    setBombAnimate($element);
    setTimeout(bombTimeout, 2000);
}

function clickResourceHandler(event) {
    score($(event.target).attr("id"), 1);
    event.target.remove();
}

function clickBombHandler(event) {
    $(event.target).data("clicked", true);
}

function bombTimeout(){
    var bomb = $(".bomb");
    if (bomb.data("clicked")) {
        score(getRandomResource(), -10);
    }
    bomb.remove();
}

function resourceTimeout(){

}

function score(id, val) {
    var scoreElem = $("#score-" + id);
    var score = +scoreElem.text() || 0;
    if (val > 0) {
        scoreElem.text(score + val);
    }
    else {
        score = (score + val) > 0 ? (score + val) : "-";
        scoreElem.text(score);
    }
    scoreAnimate($(".resource#" + id));
}