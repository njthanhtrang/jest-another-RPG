const Potion = require("../lib/Potion");

// name sets default empty str if no name provided
function Player(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion("health"), new Potion()];
}
// proto creates method once on constructor itself (part of constructor)
// new player objects inherit method from constructor
// rather than having own instances of that method in this.Methodname
// if method a constructor property, would appear as part of object
// each object would have additional property which would be the same fx
// constructor: less code needed w/ multiple objects, less overhead in memory usage
Player.prototype.getStats = function () {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility,
  };
};

// returns inventory array or false if empty
// DO NOT USE ARROW SYNTAX ON PROTO METHODS, CHANGES WHAT THIS MEANS
// BINDS THIS TO PARENT LEXICAL SCOPE INSTEAD OF METHOD SCOPE
Player.prototype.getInventory = function () {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    // health never goes negative
    if (this.health < 0) {
        this.health = 0;
    }
};

module.exports = Player;
