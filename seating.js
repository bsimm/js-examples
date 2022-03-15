var _ = require("lodash");
var faker = require('faker');

var seats = _.range(1,76);
var reserved = [
  { name: 'Josh Bergstrom', seat: 3},
  { name: 'Brent Kris', seat: 9},
  { name: 'Dana Quitzon', seat: 35},
  { name: 'Matthew Parisian', seat: 54}
];
var reserved_values = _.map(reserved, 'seat');
var available = _.xor(reserved_values, seats);

for (const i of available) {
  if (!_.find(reserved,{'seat':i})) {
    reserved.push({name: faker.name.findName(), seat: parseInt(i)});
  };
};

console.log(_.sortBy(reserved, 'seat'));