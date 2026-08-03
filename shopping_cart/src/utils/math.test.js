import { add,subtract,multiply,divide } from "./math";

describe("Maths utils functions", () => {
  test("should add two number", () => {
    expect(add(2, 3)).toBe(5);
  });
  test("Should subtract two number", () => {
    expect(subtract(3,2)).toBe(1);
  });
  test("Should multiply two number",() => {
    expect(multiply(3,2)).toBe(6);
  });
  test("Should divide two number",() => {
    expect(divide(3,2)).toBe(1.5);
  });
});


test("toBe with primitive", () => {
  expect(10).toBe(10);
});

// test("toBe with objects", () => {
//   const obj1 = { name: "Ashu" };
//   const obj2 = { name: "Ashu" };

//   expect(obj1).toBe(obj2);
// });

test("toEqual with objects", () => {
  const obj1 = { name: "Ashu" };
  const obj2 = { name: "Ashu" };

  expect(obj1).toEqual(obj2);
});

const user = { name: "Ashu" };

expect(user).toBe(user);

expect([1, 2]).toEqual([1, 2]);
// expect([1, 2]).toBe([1, 2]);
expect("React").toBe("React");
expect(10).toBe(10);

const obj1 = {
    name: "Ashu"
};

const obj2 = {
    name: "Ashu",
    age: undefined
};
expect(obj1).toEqual(obj2);