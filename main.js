var _ = require('lodash');

var tableIndex = {
	'Body: Form': _.range(1, 201),
	'Body: Function': _.range(201, 401),
	'Mind: Behaviours': _.range(401, 501),
	'Mind: Cognition': _.range(501, 601),
	'Psychic Powers': _.range(601, 701),
	'Supernatural Attributes': _.range(701, 1001)
};

//randomly chooses from a table, taking an optional lower limit value other than 1
function pick(table, lowerLimit) {
	var selection = false;
	var lastKey = _.findLastKey(table);
	var ceiling = _.last(table[lastKey]);
	var floor = 1;

	//option to set a floor other than 1
	if (typeof lowerLimit !== 'undefined') {
		floor = lowerLimit;
	}

	var random = _.random(floor, ceiling);

	//iterate through table object and checking random number in each range array, returning the key if true
	_.forEach(table, function(value, key) {
		var start = _.first(value);
		var end = _.last(value);
		var bool = _.inRange(random, start, end);

		if (bool == true) {
			selection = key;
		}
	});

	return selection;

}

var choice = pick(tableIndex);

console.log(choice);

