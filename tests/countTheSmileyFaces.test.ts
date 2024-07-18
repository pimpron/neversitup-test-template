import { countSmileys } from "../src/controller/countTheSmileyFaces";

describe("countSmileys", () => {
  it("should return 0 for an empty array", () => {
    expect(countSmileys([])).toEqual(0);
  });

  it("should return the correct count for valid smileys", () => {
    expect(countSmileys([":)", ";)", ":-)", ":~)"])).toEqual(4);
    expect(countSmileys([":D", ":~D", ";-D", ":)"])).toEqual(4);
  });
});
