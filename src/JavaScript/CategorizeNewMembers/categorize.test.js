import { openOrSenior } from "./categorize.code";

describe("openOrSenior", () => {
  it("Gets expected output", () => {
    expect(
      openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20]
      ])
    ).toEqual(["Open", "Senior", "Open", "Senior"]);
    expect(
      openOrSenior([
        [3, 12],
        [55, 1],
        [91, -2],
        [54, 23]
      ])
    ).toEqual(["Open", "Open", "Open", "Open"]);
    expect(
      openOrSenior([
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12]
      ])
    ).toEqual(["Senior", "Open", "Open", "Open"]);
  });

  it("Edge cases", () => {
    expect(openOrSenior([])).toEqual([], "Empty array");
    expect(
      openOrSenior([
        [54, 9],
        [55, 9]
      ])
    ).toEqual(["Open", "Senior"], "age for 'Senior' should be > 54");
    expect(
      openOrSenior([
        [55, 7],
        [55, 9]
      ])
    ).toEqual(["Open", "Senior"], "handicap for 'Senior' should be > 7");
  });
});
