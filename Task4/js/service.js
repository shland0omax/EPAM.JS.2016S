/**
 * Created by Шландаков on 22.08.2016.
 */

function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function clearClickHandlers($selector){
    $selector.off('click');
}