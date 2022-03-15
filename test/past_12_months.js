const assert = require("assert");
const transformers = require("../past_12_months");

const input = [
  {
    month: 1,
    year: 2018,
    foo: 50,
    bar: 800,
    baz: 350,
  },
  {
    month: 2,
    year: 2018,
    foo: 60,
    bar: 700,
    baz: 450,
  },
  {
    month: 3,
    year: 2018,
    foo: 70,
    bar: 600,
    baz: 550,
  },
  {
    month: 4,
    year: 2019,
    foo: 80,
    bar: 500,
    baz: 650,
  },
  {
    month: 5,
    year: 2019,
    foo: 90,
    bar: 400,
    baz: 750,
  },
];

describe("addMonth()", () => {
  const expectedOutput = [
    { month: 1, year: 2018, foo: 50, bar: 800, baz: 350 },
    { month: 2, year: 2018, foo: 60, bar: 700, baz: 450 },
    { month: 3, year: 2018, foo: 70, bar: 600, baz: 550 },
    { month: 4, year: 2019, foo: 80, bar: 500, baz: 650 },
    { month: 5, year: 2019, foo: 90, bar: 400, baz: 750 },
  ];

  const result = transformers.addMonth(input);
  it("does nothing - previously this corrected malformed data", () => {
    assert.deepStrictEqual(result, expectedOutput);
  });
});

describe("getMonthYearsData()", () => {
  const monthData = [
    { month: "Jan", year: 2018, foo: 4 },
    { month: "Jan", year: 2019, foo: 20 },
    { month: "Jan", year: 2019, baz: 10 }
  ];

  const expectedOutput = {
    "2018": 4,
    "2019": 20,
  };

  const result = transformers.getMonthYearsData(monthData, "foo");
  it("filters input and groups metric by year", () => {
    assert.deepStrictEqual(result, expectedOutput);
  });
});

describe("getAllMonthsAndYearsData()", () => {
  const groupedData = {
    "12": [
      {
        foo: 11,
        bar: 123,
        baz: 324,
        month: 12,
        year: 2018,
      },
    ],
    "1": [
      {
        foo: 123,
        bar: 123,
        baz: 123,
        month: 1,
        year: 2018,
      },
      {
        foo: 123,
        bar: 123,
        baz: 123,
        month: 1,
        year: 2019,
      },
    ],
    "4": [
      {
        foo: 123,
        bar: 123,
        baz: 123,
        month: 4,
        year: 2018,
      },
    ],
  };

  const expectedOutput = [
    { "2018": 123, "2019": 123, month: 1 },
    { "2018": 123, month: 4 },
    { "2018": 11, month: 12 },
  ];

  const metric = "foo";
  const result = transformers.getAllMonthsAndYearsData(groupedData, metric);

  it("reduces grouped data by month", () => {
    assert.deepStrictEqual(result, expectedOutput);
  });
});

describe("transformData()", () => {
  const expectedOutput = {
    foo: [
      { "2018": 50, month: 1 },
      { "2018": 60, month: 2 },
      { "2018": 70, month: 3 },
      { "2019": 80, month: 4 },
      { "2019": 90, month: 5 },
    ],
    bar: [
      { "2018": 800, month: 1 },
      { "2018": 700, month: 2 },
      { "2018": 600, month: 3 },
      { "2019": 500, month: 4 },
      { "2019": 400, month: 5 },
    ],
    baz: [
      { "2018": 350, month: 1 },
      { "2018": 450, month: 2 },
      { "2018": 550, month: 3 },
      { "2019": 650, month: 4 },
      { "2019": 750, month: 5 },
    ],
  };

  const result = transformers.transformData(input);
  it("transforms input data to be grouped by metric", () => {
    assert.deepStrictEqual(result, expectedOutput);
  });
});
