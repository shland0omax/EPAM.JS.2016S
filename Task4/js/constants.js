/**
 * Created by Шландаков on 29.08.2016.
 */
var EXPLODE_ID = 0;
var GROWOLD_ID = 1;
var SLOWUP_ID = 2;
var GENERATE_ID = 3;
var PAUSE_ID = 4;
var RESUME_ID = 5;
var LEVEL_UP = 6;
var frequency = 100;
var gcFrequency = 15000;

var LEVELS = [];
LEVELS[0] = {
    generateSpeed: 2000,
    explodeTimeout: 4000,
    explodeDamage: 20,
    growOldTimeout: 8500,
    growOldPeriod: 700,
    growOldDuration: 8500,
    slowUpTimeout: 5000,
    slowUpDuration: 5000
};
LEVELS[1] = {
    generateSpeed: 1600,
    explodeTimeout: 4400,
    explodeDamage: 18,
    growOldTimeout: 9000,
    growOldPeriod: 800,
    growOldDuration: 9000,
    slowUpTimeout: 5000,
    slowUpDuration: 5500
};
LEVELS[2] = {
    generateSpeed: 1200,
    explodeTimeout: 4700,
    explodeDamage: 18,
    growOldTimeout: 10000,
    growOldPeriod: 900,
    growOldDuration: 9000,
    slowUpTimeout: 5000,
    slowUpDuration: 6000
};
LEVELS[3] = {
    generateSpeed: 1100,
    explodeTimeout: 5000,
    explodeDamage: 16,
    growOldTimeout: 11000,
    growOldPeriod: 1000,
    growOldDuration: 10000,
    slowUpTimeout: 5300,
    slowUpDuration: 6000
};

var levelCount = LEVELS.length;