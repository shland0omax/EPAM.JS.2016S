/**
 * Created by Шландаков on 22.08.2016.
 */

Zombie.Strong = function(params){
    params.name = "strong";
    params.speed = 2;
    params.damage = 2;
    Zombie.call(this, params);
    this.appendZombie();
};