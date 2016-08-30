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
buttonId[LEVEL_UP] = '#btnLevelUp';

function setupButtons(){
    clearClickHandlers($('.button'));
    enableButton($(buttonId[GENERATE_ID]), handlers[GENERATE_ID]);
    enableButton($(buttonId[EXPLODE_ID]), handlers[EXPLODE_ID]);
    enableButton($(buttonId[GROWOLD_ID]), handlers[GROWOLD_ID]);
    enableButton($(buttonId[SLOWUP_ID]), handlers[SLOWUP_ID]);
    enableButton($(buttonId[PAUSE_ID]), handlers[PAUSE_ID]);
    enableButton($(buttonId[LEVEL_UP]), handlers[LEVEL_UP]);
    $(buttonId[PAUSE_ID]).text('Pause');
}

function blockButtons(){
    disableButton($(buttonId[GENERATE_ID]));
    disableButton($(buttonId[EXPLODE_ID]));
    disableButton($(buttonId[GROWOLD_ID]));
    disableButton($(buttonId[SLOWUP_ID]));
    disableButton($(buttonId[LEVEL_UP]));
    clearClickHandlers($('.button'));
    enableButton($(buttonId[RESUME_ID]), handlers[RESUME_ID]);
    $(buttonId[RESUME_ID]).text('Resume');
}

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