function Gladiator(name, attack, hitpoints){
  console.log('Gladiator');
    this.name = name;
    this.attack = attack;
    this.hitpoints = hitpoints;
    this.fight = function(gladiator){
        console.log(this.name + ' is hitting ' + gladiator.name + ' with attack ' + this.attack);
        gladiator.setHitpoints(gladiator.hitpoints - this.attack);
    };
    this.setAttack = function(attack){
        this.attack = attack;

        console.log('gladiator ' + this.name + ' has ' + this.attack + ' attack');
    };
    this.setHitpoints = function(hitpoints){
        this.hitpoints = hitpoints;  
 
        console.log('gladiator ' + this.name + ' has ' + this.hitpoints + ' hitpoints');
    };
};

function Champion(){
    this.setAttack = function(attack){
        Champion.prototype.setAttack(attack * 1.5);
    };

    this.setHitpoints = function(hitpoints){
        Champion.prototype.setHitpoints(hitpoints * 1.1);
    };
};

function Monster(){
    this.setAttack = function(attack){
        Monster.prototype.setAttack(attack * 0.5);
    };

    this.fight = function(gladiator){
        Monster.prototype.fight(gladiator);
        Monster.prototype.setHitpoints(gladiator.attack * 0.5);
    };
};

Champion.prototype = new Gladiator('vasia',10,100);
var vasia = new Champion;

Monster.prototype = new Gladiator('kolia',10,100);
var kolia = new Monster;

console.log(vasia);
console.log(kolia);

var hitpoints = Math.floor(Math.random() * (100 - 80 + 1) ) + 80;;
kolia.setHitpoints(hitpoints);
vasia.setHitpoints(hitpoints);

for (;;){
kolia.fight(vasia);
vasia.fight(kolia);

var currentAttack = Math.floor((Math.random() * 10) + 1);
kolia.setAttack(currentAttack);
vasia.setAttack(currentAttack);

if(vasia.hitpoints <= 0){
        console.log('hitpoints kolia ' + kolia.hitpoints + ' hitpoints vasia '+ vasia.hitpoints + ' vin ' + kolia.name);
        console.log('Game over');
        break;
    }
    else if (kolia.hitpoints <= 0){
        console.log('hitpoints kolia ' + kolia.hitpoints + ' hitpoints vasia '+ vasia.hitpoints + ' vin ' + vasia.name);
        console.log('Game over');
        break;
    }
};





