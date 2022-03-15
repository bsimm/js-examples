var _ = require("lodash");

exports.getTotalGroupAAndGroupB = valueObject => {
  const totalGroupA = _.sum(
    _.values(_.pick(valueObject, ["AA", "AB", "AC", "AD", "AE", "AF"]))
  );
  const totalGroupB = _.sum(
    _.values(_.pick(valueObject, ["BA", "BB", "BC", "BD", "BE"]))
  );

  return {
    totalGroupA,
    totalGroupB,
  };
};
