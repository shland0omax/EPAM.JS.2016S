/*
    helper functions there
 */
function random(min, max){
    return Math.floor((Math.random()*max)+min);
}

function getRandomResource(){
    var type = random(1,4);
    if(type == 1){
        return "cheese";
    }
    else if(type == 2){
        return "orange";
    }
    else if(type == 3){
        return "cherry";
    }
    else if(type == 4){
        return "pumpkin";
    }
}