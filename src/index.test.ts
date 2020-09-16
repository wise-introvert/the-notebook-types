import { add } from ".";

describe("add()", () => {
  test("returns the sum of given numbers", () => {
    expect(add(1, 23, 3)).toBe(27);
    expect(add(10, 23, 30)).toBe(63);
    expect(add(1, 23, 3, 120, 53, 72, 12)).toBe(
      1 + 23 + 3 + 120 + 53 + 72 + 12
    );
  });
});
