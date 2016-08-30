/**
 * Created by Шландаков on 22.08.2016.
 */

Zombie.Michael = function(params){
    params.name = "michael";
    params.speed = 3;
    params.health = 70;
    Zombie.call(this, params);
    this.appendZombie();
};