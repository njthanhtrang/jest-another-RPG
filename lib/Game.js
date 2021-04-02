// run npm install inquirer in Terminal
const inquirer = require("inquirer");
const Enemy = require("./Enemy");
const Player = require("./Player");

function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
}

Game.prototype.initializeGame = function () {
  this.enemies.push(new Enemy("goblin", "sword"));
  this.enemies.push(new Enemy("orc", "baseball bat"));
  this.enemies.push(new Enemy("skeleton", "axe"));

  this.currentEnemy = this.enemies[0];

  inquirer
    //   all inquirer callbacks in this project uses =>
    // function keyword would create new lexical scope
    //  where this no longer references Game obj
    .prompt({
      type: "text",
      name: "name",
      message: "What is your name?",
    })
    // destructure name from prompt object
    .then(({ name }) => {
      this.player = new Player(name);

      this.startNewBattle();
    });
};

module.exports = Game;
