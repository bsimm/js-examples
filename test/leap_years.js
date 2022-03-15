const assert = require("assert");
const leapYears = require("../leap_years");

const startingYear = 2020;
const n = 20;

const output = leapYears.calculateNextNYears(startingYear, n);

describe("printLeapYears()", () => {
  it("returns the next n leap years after the input year", () => {
  assert.deepStrictEqual(output,
    [2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 
     2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096, 2104]);
  });
});