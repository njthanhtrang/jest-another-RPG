const Potion = require("./Potion");
const Character = require("./Character");

// name sets default empty str if no name provided
class Player extends Character {
  constructor(name = "") {
    // call parent constructor
    super(name);

    this.inventory = [new Potion("health"), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

    switch (potion.name) {
      case "agility":
        this.agility += potion.value;
        break;
      case "health":
        this.health += potion.value;
        break;
      case "strength":
        this.strength += potion.value;
        break;
    }
  }
}

// inherit prototype methods from Character here:

// proto creates method once on constructor itself (part of constructor)
// new player objects inherit method from constructor
// rather than having own instances of that method in this.Methodname
// if method a constructor property, would appear as part of object
// each object would have additional property which would be the same fx
// constructor: less code needed w/ multiple objects, less overhead in memory usage

// returns inventory array or false if empty
// DO NOT USE ARROW SYNTAX ON PROTO METHODS, CHANGES WHAT THIS MEANS
// BINDS THIS TO PARENT LEXICAL SCOPE INSTEAD OF METHOD SCOPE

// .splice() removes items from array, returns removed items as new array
// original inventory array has 1 potion removed at index and put into
// new "removed items" array. potion at i[0] of "removed items" is saved in potion var

module.exports = Player;
