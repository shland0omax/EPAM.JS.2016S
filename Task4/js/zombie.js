var Zombie = function(params){
    var health = params.health || 50;
    var name = params.name || "";
    var damage = params.damage || 1;
    var speed = params.speed || 1;
    var $line = params.$line;
    var position = params.startPosition || 0;
    var finishPosition = params.finishPosition;

    var currentSpeed = speed;

    this.appendZombie = function(){
        if (!this.$zombie){
            this.$zombie = $('<div>');
            this.$zombie.addClass('zombie');
            this.$zombie.addClass(name);
            this.$zombie.css({
                "right": position
            });
            $line.append(this.$zombie);
            //add health points line
        }
    };

    this.move = function(){
        position += speed;
        if (position > finishPosition){
            this.$zombie.trigger('zombie_success');
        }
        this.$zombie.css({
            "right": position
        });
    };

    this.recieveDamage = function(dmg){
        health -= dmg;
        if (health <= 0){
            this.die();
        }
        //health status line update
    };

    this.die = function(){
        this.$zombie.remove();
    };

    this.setSpeed = function(speed){
        //check for neg speed
        currentSpeed = speed;
    };

    this.defultSpeed = function(){
        currentSpeed = speed;
    };

    this.getDamage = function(){
        return damage;
    };
};