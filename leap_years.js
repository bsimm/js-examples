exports.calculateNextNYears = (startingYear, n) => {
  var leapYears = [];
  var yearIndex = startingYear + 1;
  while (leapYears.length < n) {
    if (((yearIndex % 4 == 0) && (yearIndex % 100 != 0)) || (yearIndex % 400 == 0)) {
      leapYears.push(yearIndex);
      yearIndex++;
    } else {
      yearIndex++;
    }
  }
  return leapYears
};