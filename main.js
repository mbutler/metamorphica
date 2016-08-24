var _ = require('lodash');

var mutationTableIndex = [
	{name: 'Body: Form', range: _.range(1, 201)},
	{name: 'Body: Function', range: _.range(201, 401)},
	{name: 'Mind: Behaviours', range: _.range(401, 501)},
	{name: 'Mind: Cognition', range: _.range(501, 601)},
	{name: 'Psychic Powers', range: _.range(601, 701)},
	{name: 'Supernatural Attributes', range: _.range(701, 1001)}	
];

var test = [
	{name: 'Wild', range: _.range(1, 101), subtable: mutationTableIndex},
	{name: 'Boring', range: _.range(101, 201)}
];

//randomly chooses from a table, taking an optional lower limit value other than 1
function pick(table, lowerLimit) {
	var selection = '';
	var lastRange = _.last(table);
	var ceiling = _.last(lastRange.range);
	var floor = 1;

	//option to set a floor other than 1
	if (typeof lowerLimit !== 'undefined') {
		floor = lowerLimit;
	}

	var random = _.random(floor, ceiling);

	//iterate through table object and checking random number in each range array, returning the key if true
	_.forEach(table, function(data) {
		var start = _.first(data.range);
		var end = _.last(data.range) + 1;
		var bool = _.inRange(random, start, end);

		if (bool == true) {
			selection = data.name;

			if (data.subtable !== undefined) {				
				selection = pick(data.subtable);
			}			
		}		
	});

	return selection;
}

console.log(pick(test));

