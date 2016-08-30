/**
 * Created by Шландаков on 30.08.2016.
 */

var Effect = function (timeout, isContinious, duration) {
    this.isContinious = isContinious || false;
    this.timeout = timeout || 0;
    if (this.isContinious) {
        this.duration = duration || 0;
    }
    else {
        this.isPerformed = false;
    }

    var startTimestamp = 0;

    this.activate = function (setupFunction) {
        if (this.isContinious == false) {
            if (!this.isPerformed) {
                setupFunction.call(this);
                this.isPerformed = true;
            }
        }
        else{
            setupFunction.call(this);
        }
        startTimestamp = new Date().getTime();
    };

    this.pause = function () {
        this.timeout -= (new Date().getTime() - startTimestamp);
        if (this.isContinious) {
            this.duration -= (new Date().getTime() - startTimestamp);
        }
        if (this.Stop) {
            this.Stop();
        }
    };
};

function pauseEffects(){
    effects.forEach(function(elem){
        if (elem){
            elem.pause();
        }
    });
}

function resumeEffects(){
    effects.forEach(function(elem, index){
        if (elem){
            handlers[index]();
        }
    })
}