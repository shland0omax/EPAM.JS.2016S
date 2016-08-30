var Zombie = function (params) {
    var health = params.health || 50;
    var name = params.name || "";
    var damage = params.damage || 1;
    var speed = params.speed || 1;
    var $line = params.$line;
    var position = params.startPosition || 0;
    var finishPosition = params.finishPosition;

    var currentSpeed = speed;
    this.currentHealth = health;

    this.appendZombie = function () {
        if (!this.$zombie) {
            this.$zombie = $('<div>');
            this.$zombie.addClass('zombie');
            this.$zombie.addClass(name);
            this.$zombie.css({
                "right": position
            });

            this.$zombie.append(this.createHealthStatus());
            this.updateHealthStatus();

            $line.append(this.$zombie);
        }
    };

    this.move = function () {
        if (this.currentHealth > 0) {
            position += currentSpeed;
            if (position > finishPosition) {
                this.$zombie.trigger('zombie_success');
            }
            this.$zombie.css({
                "right": position
            });
        }
    };

    this.recieveDamage = function (dmg) {
        if (this.currentHealth > 0) {
            this.currentHealth -= dmg;
            if (this.currentHealth <= 0) {
                this.die();
            }
            this.updateHealthStatus();
        }
    };

    this.die = function () {
        this.$zombie.remove();
    };

    this.setSpeed = function (speed) {
        currentSpeed = speed;
    };

    this.defultSpeed = function () {
        currentSpeed = speed;
    };

    this.getDamage = function () {
        return damage;
    };


    this.updateHealthStatus = function(){
        var percent = Math.round((this.currentHealth / health) * 100) + '%';
        this.$status.text(percent);
        this.$status_line.css({
            'width': percent
        });
    };

    this.createHealthStatus = function(){
        var $health = $('<div>');
        $health.addClass('health-line');

        this.$status_line = $('<div>');
        this.$status_line.addClass('health-status');
        $health.append(this.$status_line);

        this.$status = $('<p>');
        this.$status.addClass('health-line');
        $health.append(this.$status);

        return $health;
    };
};