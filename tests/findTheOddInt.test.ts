import { findOdd } from "../src/controller/findTheOdd";

describe("findOdd", () => {
  it("should return the integer that appears an odd number of times", () => {
    expect(findOdd([7])).toBe(7);
    expect(findOdd([0])).toBe(0);
    expect(findOdd([1, 1, 2])).toBe(2);
    expect(findOdd([0, 1, 0, 1, 0])).toBe(0);
    expect(findOdd([1, 2, 3, 1, 3, 1, 2])).toBe(1);
  });
});
