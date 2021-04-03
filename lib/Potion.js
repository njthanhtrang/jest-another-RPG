// replace function keyword with class, move name parameter into nested constructor()
class Potion {
    // ES6- methods go inside class brackets instead of being defined in prototype
    // need constructor() to supply an argument to the class Potion("health")
    // if class wasn't intended to receive arguments, can omit constructor()
  constructor(name) {
    this.types = ["strength", "agility", "health"];
    // if name is not truthy, then it equals random type of potion
    this.name =
      name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === "health") {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
}

module.exports = Potion;
