/**
 * Created by Шландаков on 29.08.2016.
 */

var buttonId = [];
buttonId[EXPLODE_ID] = '#btnExplode';
buttonId[GROWOLD_ID] = '#btnGrow';
buttonId[SLOWUP_ID] = '#btnSlow';
buttonId[GENERATE_ID] = '#btnGenerate';
buttonId[PAUSE_ID] = '#btnPause';
buttonId[RESUME_ID] = '#btnPause';

function buttonFreeze(id, timeout, handler) { //freezes button on specified timeout
    if (timeout) {
        var $target = $(buttonId[id]);
        disableButton($target);

        var $status = $('<div>').addClass('btn-status');
        $target.append($status);
        freezeAnimate($target, $status, timeout, handler);
    }
}

function buttonFreezePause() {
    $('.btn-status').stop().addClass('stopped');
}

function buttonFreezeResume() {
    $('.btn-status').removeClass('stopped');
    buttonId.forEach(function (id, index) {
        if (effects[index]) {
            disableButton($(id));
            freezeAnimate($(id), $(id + '> .btn-status'), effects[index].timeout, handlers[index]);
        }
    });
}

function freezeAnimate($button, $status, timeout, handler) {
    $status.animate({width: '100%'}, timeout, null, function () {
        $status.remove();
    });

    timeOuts.push(setTimeout(function () {
        enableButton($button, handler);
    }, timeout));
}

function disableButton(button) {
    button.off('click');
    button.addClass('disabled');
}

function disableButtons() {
    for (var i = 0; i < arguments.length; i++) {
        disableButton(arguments[i]);
    }
}

function enableButton(button, handler) {
    button.removeClass('disabled');
    button.on('click', handler);
}
