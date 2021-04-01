const { TestScheduler } = require("jest");
const Player = require("../lib/Player");

// imports Potion() constructor into test, est Potion as variable
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");
console.log(new Potion());

test("creates a player object", () => {
    // new creates empty obj, assigns to THIS
    const player = new Player("Dave");

    expect(player.name).toBe("Dave");
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

test("gets player's stats as an object", () => {
    const player = new Player("Dave");

    expect(player.getStats()).toHaveProperty("potions");
    expect(player.getStats()).toHaveProperty("health");
    expect(player.getStats()).toHaveProperty("strength");
    expect(player.getStats()).toHaveProperty("agility");
});

test("gets inventory from player or returns false", () => {
    const player = new Player("Dave");

    // on player creation, player inventory should have something in it
    expect(player.getInventory()).toEqual(expect.any(Array));

    // empty inventory needs to return false
    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});