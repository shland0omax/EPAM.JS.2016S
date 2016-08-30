/**
 * Created by Шландаков on 29.08.2016.
 */


var effects = [];
var handlers = [];
handlers[EXPLODE_ID] = explode;
handlers[GROWOLD_ID] = growOld;
handlers[SLOWUP_ID] = slowUp;
handlers[GENERATE_ID] = generateZombie;
handlers[PAUSE_ID] = pause;
handlers[RESUME_ID] = resume;

function generateZombie() {
    var type = random(0, zombieTypes.length);
    var $line = $($(".field-line")[random(0, linesCount)]);
    var config = {};
    config.$line = $line;
    config.finishPosition = distance;
    var zombie = new zombieTypes[type](config);
    zombies.push(zombie);
}

function explode() {
    var effectCreated = effects[EXPLODE_ID];

    effects[EXPLODE_ID] = effectCreated || new Effect(LEVELS[currentLevel].explodeTimeout, false);
    (effectCreated && tickCoolDownEffect || coolDownEffect)(EXPLODE_ID, explode);

    effects[EXPLODE_ID].activate(function () {
        zombies.forEach(function (elem) {
            elem.recieveDamage(15);
        });
    });
}

function growOld() {
    var effectCreated = effects[GROWOLD_ID];

    effects[GROWOLD_ID] = effectCreated || new Effect(LEVELS[currentLevel].growOldTimeout, true, LEVELS[currentLevel].growOldDuration);
    (effectCreated &&  tickCoolDownEffect || coolDownEffect)(GROWOLD_ID, growOld);

    effects[GROWOLD_ID].activate(function () {
        var intervalId = setInterval(function () {
            zombies.forEach(function (elem) {
                elem.recieveDamage(1);
            });
        }, LEVELS[currentLevel].growOldPeriod);

        var durationId = setTimeout(function () {
            clearInterval(intervalId);
        }, effects[GROWOLD_ID].duration);

        this.Stop = function () {
            clearInterval(intervalId);
            clearTimeout(durationId);
        };
    });
}

function slowUp() {
    var effectCreated = effects[SLOWUP_ID];

    effects[SLOWUP_ID] = effectCreated || new Effect(LEVELS[currentLevel].slowUpTimeout, true, LEVELS[currentLevel].slowUpDuration);
    (effectCreated && tickCoolDownEffect || coolDownEffect)(SLOWUP_ID, slowUp);

    effects[SLOWUP_ID].activate(function(){
        zombies.forEach(function (elem) {
            elem.setSpeed(1);
        });


        var defaultId = setTimeout(function () {
            zombies.forEach(function (elem) {
                elem.defultSpeed();
            });
        }, effects[SLOWUP_ID].duration);

        this.Stop = function(){
            clearInterval(defaultId);
        }
    });
}

function coolDownEffect(id, handler) {
    buttonFreeze(id, effects[id].timeout, handler);
    tickCoolDownEffect(id);
}

function tickCoolDownEffect(id) {
    timeOuts.push(setTimeout(function () {
        effects[id] = null;
    }, effects[id].timeout));
}