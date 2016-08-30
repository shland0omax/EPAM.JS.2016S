/**
 * Created by Шландаков on 30.08.2016.
 */

function switchLevel(level) {
    if (level >= 0 && level < levelCount) {
        currentLevel = level;
        showLevel();
    }
}

function showLevel(){
    $('#level').text(currentLevel);
}