var _ = require("lodash");

exports.addMonth = data =>
  _.map(data, entry => ({
    ...entry,
    month: entry.month,
  }));

exports.getMonthYearsData = (monthData, metric) =>
  _.reduce(
    _.filter(monthData, metric),
    (output, monthYearData) => metric && ({
      ...output,
      [monthYearData.year]: monthYearData[`${metric}`],
    }),
    {}
  );

exports.getAllMonthsAndYearsData = (groupedData, metric) =>
  _.reduce(
    groupedData,
    (output, monthData, key) => [
      ...output,
      {
        ...exports.getMonthYearsData(monthData, metric),
        month: _.toNumber(key),
      },
    ],
    []
  );

exports.transformData = (rawData = []) => {
  if (!_.isArray(rawData)) {
    return [];
  }

  const dataWithMonths = exports.addMonth(rawData);
  const groupedData = _.groupBy(dataWithMonths, "month");
  const foo = exports.getAllMonthsAndYearsData(groupedData, "foo");
  const bar = exports.getAllMonthsAndYearsData(groupedData, "bar");
  const baz = exports.getAllMonthsAndYearsData(groupedData, "baz");
  return { foo, bar, baz };
};
