const assert = require("assert");
const transformers = require("../sum_values");

const valueObject = {
  AA: 100,
  AB: 100,
  AC: 100,
  AD: 100,
  AE: 100,
  AF: 100,
  BA: 100,
  BB: 100,
  BC: 100,
  BD: 100,
  BE: 100,
};

const { totalGroupA } = transformers.getTotalGroupAAndGroupB(valueObject);
const { totalGroupB } = transformers.getTotalGroupAAndGroupB(valueObject);

describe("getTotalGroupAAndGroupB", function () {
  it("sums data grouped by key", function () {
    assert.strictEqual(totalGroupA, 600);
    assert.strictEqual(totalGroupB, 500);
  });
});
