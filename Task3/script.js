var blockCount = 60;

function generate(){
    var $parent = $("#fill-container");
    for (var i = 0; i < blockCount; i++){
        $parent.append("<div class=\"block\">" + random(1, 100) + "</div>");
    }
    disableButton($("#generate"));
    enableButton($("#reset"));
    enableButton($("#setColor"));
}

function setBlockColor(){
    var value = +this.text();
    var color = "white";
    if (value > 75){
        color = "#f44336";
    }
    else if (value > 50){
        color = "#ff9800";
    }
    else if (value > 25){
        color = "#4caf50";
    }
    this.css("background-color", color);
}

function setColor(){
    $(".block").each(function(){
        setBlockColor.call($(this));
    });
    disableButton($("#setColor"));
}

function reset(){
    $("#fill-container").empty();
    disableButton($("#setColor"));
    disableButton($("#reset"));
    enableButton($("#generate"));
}

function disableButton($button){
    $button.addClass("disabled");
    $button.off("click");
}

function enableButton($button){
    $button.removeClass("disabled");
    var id = $button.attr("id");
    var handler;
    if (id == "generate"){
        handler = generate;
    }
    else if(id == "setColor"){
        handler = setColor;
    }
    else{
        handler = reset;
    }
    $button.on("click", handler);
}

function random(min, max){
    return Math.floor((Math.random()*max)+min);
}

$(document).ready(function (){
    disableButton($("#setColor"));
    disableButton($("#reset"));
    enableButton($("#generate"));
});