const Potion = require("../lib/Potion.js");

// create new constructor obj with "new"
// do NOT use arrow fx as constructor fx, => changes this
// constructors don't have return, undefined by default
test("creates a health potion object", () => {
  const potion = new Potion("health");

  expect(potion.name).toBe("health");
  // expect.any() takes constructor as argument
  // value property is created with a Number() constructor
  // value is any number, avoids testing with lots of RNG
  expect(potion.value).toEqual(expect.any(Number));
});

test("creates a random potion object", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
