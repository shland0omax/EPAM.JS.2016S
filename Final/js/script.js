var timeoutId = [];
var resourceSize = 64;

$(function(){
    $("#start").on("click", start);
});

function start(){
    timeoutId[0] = setTimeout(function(){
        addResource();
        timeoutId[0] = setTimeout(arguments.callee, 500);
    }, 500);
    timeoutId[1] = setTimeout(function(){
        addBomb();
        timeoutId[1] = setTimeout(arguments.callee, 5000);
    }, 5000);
    var $startButton = $("#start");
    $startButton.off("click");
    $startButton.on("click", stop);
    $startButton.removeClass("start");
    $startButton.addClass("stop");
    $startButton.text("Stop");
    $(".logo.play.res").each(function(){
        $(this).on("click", clickResourceHandler);
    });
    $(".logo.play.bomb").each(function(){
        $(this).off("click", clickBombHandler);
    });
}

function stop(){
    window.clearInterval(timeoutId[0]);
    window.clearInterval(timeoutId[1]);
    var $startButton = $("#start");
    $startButton.off("click");
    $startButton.on("click", start);
    $startButton.removeClass("stop");
    $startButton.addClass("start");
    $startButton.text("Start");
    $(".logo.play").each(function(){
        $(this).off("click");
    });
}

function createPlayElement(){
    var panel = $("#game-panel");
    var $element = $(document.createElement("div"));
    $element.css({top: random(0, panel.height() - resourceSize)});
    $element.css({left: random(0, panel.width() - resourceSize)});
    $element.addClass("logo");
    $element.addClass("play");
    panel.append($element);
    return $element;
}

function addResource(){
    var $element = createPlayElement();
    $element.addClass("res");
    var type = getRandomResource();
    $element.addClass(type);
    $element.attr("id", type);
    $element.on("click", clickResourceHandler);
    setResourceAnimate($element);
}

function addBomb(){
    var $element = createPlayElement();
    $element.addClass("bomb");
    $element.on("click", clickBombHandler);
    bombAnimate($element);
    setTimeout(function(){
        var bomb = $(".bomb");
        if (bomb.data("clicked")){
            score(getRandomResource(), -10);
            bombAnimate();
        }
        bomb.remove();
    }, 2000);
}

function clickResourceHandler(event){
    score($(event.target).attr("id"), 1);
    event.target.remove();
}

function clickBombHandler(event){
    $(event.target).data("clicked", true);
}

function score(id, val){
    var scoreElem = $("#score-"+id);
    var score = +scoreElem.text() || 0;
    if (val > 0){
        scoreElem.text(score+val);
    }
    else{
        score = (score+val) > 0 ? (score+val): "-";
        scoreElem.text(score);
    }
    scoreAnimate($(".resource#"+id));
}