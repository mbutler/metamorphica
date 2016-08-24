var _ = require('lodash');

var mutationTableIndex = [
	{name: 'Body: Form', range: _.range(1, 201)},
	{name: 'Body: Function', range: _.range(201, 401)},
	{name: 'Mind: Behaviours', range: _.range(401, 501)},
	{name: 'Mind: Cognition', range: _.range(501, 601)},
	{name: 'Psychic Powers', range: _.range(601, 701)},
	{name: 'Supernatural Attributes', range: _.range(701, 1001)}	
];

var bodyForm = [
	{name: "Wrinkled Skin", range: [200]},
	{name: "Strange Ears", range: [150]},
	{name: "Wings", range: [195, 196, 197, 198, 199]},
	{name: "Stomach Orifice", range: [149]},
	{name: "Wide", range: [194]},
	{name: "Snout", range: [148]},
	{name: "Whiskers", range: [192, 193]},
	{name: "Small Size", range: [144, 145, 146, 147]},
	{name: "Webbed Digits", range: [189, 190, 191]},
	{name: "Skull Face", range: [143]},
	{name: "Weapon Hands", range: [188]},
	{name: "Siamese Twin", range: [142]},
	{name: "Warty Skin", range: [187]},
	{name: "Short Legs", range: [141]},
	{name: "Walking Head", range: [186]},
	{name: "Scars", range: [140]},
	{name: "Vestigial Wings", range: [185]},
	{name: "Scales", range: [137, 138, 139]},
	{name: "Twisted Frame", range: [184]},
	{name: "Reverse Pedalism", range: [134, 135, 136]},
	{name: "Tumours", range: [182, 183]},
	{name: "Redundant Vital Organs", range: [133]},
	{name: "Trunk", range: [181]},
	{name: "Re-Arranged Face", range: [132]},
	{name: "Transparent Eyelids", range: [178, 179, 180]},
	{name: "Radula", range: [131]},
	{name: "Toothed Skin", range: [177]},
	{name: "Quills, Spines, or Thorns", range: [130]},
	{name: "Tongueless", range: [176]},
	{name: "Puny", range: [129]},
	{name: "Tentacles", range: [174, 175]},
	{name: "Protective Eyelids", range: [128]},
	{name: "Taller", range: [173]},
	{name: "Pouch", range: [127]},
	{name: "Tail", range: [168, 159, 170, 171, 172]},
	{name: "Pointed Head", range: [125, 126]},
	{name: "Sympathetic Biomorphism", range: [167]},
	{name: "Pinhead", range: [124]},
	{name: "Stubby Digits", range: [166]},
	{name: "Physically Immature", range: [123]},
	{name: "Strangely-Coloured Skin", range: [161, 162, 163, 164, 165]},
	{name: "Patterned Skin", range: [118,119, 120, 121, 122]},
	{name: "Strangely-Coloured Hair", range: [157, 158, 159, 160]},
	{name: "Overgrown Body Part", range: [117]},
	{name: "Strangely-Coloured Eyes", range: [153, 154, 155, 156]},
	{name: "One Eye", range: [116]},
	{name: "Strange Texture", range: [152]},
	{name: "Oddly-Shaped Tongue", range: [114, 115]},
	{name: "Strange Interior Organs", range: [151]},
	{name: "No Skin", range: [113]},
	{name: "No Nose", range: [112]},
	{name: "Fangs", range: [57, 58, 59, 60]},
	{name: "No Eyes", range: [111]},
	{name: "Eyestalks", range: [56]},
	{name: "No Ears", range: [110]},
	{name: "Extremely Thin", range: [54, 55]},
	{name: "Multiple Legs", range: [109]},
	{name: "Extra Orifices", range: [53]},
	{name: "Multiple Heads", range: [108]},
	{name: "Extra Joints", range: [52]},
	{name: "Multiple Arms", range: [107]},
	{name: "Extra Fingers and Toes", range: [50, 51]},
	{name: "Mostly Hairless", range: [106]},
	{name: "Extra Eyes", range: [48, 49]},
	{name: "Mane", range: [105]},
	{name: "Exotic Genitalia", range: [46, 47]},
	{name: "Loose Skin", range: [104]},
	{name: "Enormously Fat", range: [44, 45]},
	{name: "Long Tongue", range: [103]},
	{name: "Double Mouth", range: [43]},
	{name: "Nose", range: [102]},
	{name: "Doppelgänger", range: [42]},
	{name: "Long Neck", range: [101]},
	{name: "Diffused Organs", range: [41]},
	{name: "Long Legs", range: [100]},
	{name: "Crown", range: [40]},
	{name: "Long Face", range: [99]},
	{name: "Crest", range: [38, 39]},
	{name: "Limb Transference", range: [98]},
	{name: "Covered in Orifices", range: [37]},
	{name: "Limb Loss", range: [97]},
	{name: "Complex Mouthparts", range: [36]},
	{name: "Leaves", range: [96]},
	{name: "Clubfoot", range: [34, 35]},
	{name: "Large Size", range: [92, 93, 94, 95]},
	{name: "Clothes", range: [33]},
	{name: "Large Rear End", range: [91]},
	{name: "Claws", range: [29, 30, 31, 32]},
	{name: "Large Ears", range: [89, 90]},
	{name: "Cilia", range: [28]},
	{name: "Internal Weapon", range: [88]},
	{name: "Changing Colours", range: [27]},
	{name: "Hunchback", range: [87]},
	{name: "Cat's Eyes", range: [25, 26]},
	{name: "Hump", range: [86]},
	{name: "Bulging Eyes", range: [24]},
	{name: "Hideous Appearance", range: [85]},
	{name: "Bristles", range: [23]},
	{name: "Huge Head", range: [83, 84]},
	{name: "Boils and Sores", range: [22]},
	{name: "Huge Beard", range: [82]},
	{name: "Body Barbs", range: [21]},
	{name: "Horns", range: [79, 80, 81]},
	{name: "Birthmark", range: [20]},
	{name: "Hopper", range: [78]},
	{name: "Bestial Face", range: [19]},
	{name: "Hooks", range: [77]},
	{name: "Beak", range: [18]},
	{name: "Hemihypertrophy", range: [76]},
	{name: "Backwards Parts", range: [17]},
	{name: "Headless", range: [75]},
	{name: "Attractive", range: [14, 15, 16]},
	{name: "Hairless", range: [73, 74]},
	{name: "Atrophied or Malformed Part", range: [13]},
	{name: "Gliding Membranes", range: [72]},
	{name: "Armour", range: [10, 11, 12]},
	{name: "FusedRibs", range: [71]},
	{name: "Anthropomorphic Animal", range: [8, 9]},
	{name: "Fur", range: [66, 67, 68, 69, 70]},
	{name: "Antennae", range: [6, 7]},
	{name: "Flippers", range: [65]},
	{name: "Animal Feet", range: [5]},
	{name: "Flaking Skin", range: [64]},
	{name: "Amorphous", range: [4]},
	{name: "Fin", range: [63]},
	{name: "Alternate Locomotion", range: [3]},
	{name: "Feathers", range: [61, 62]},
	{name: "Albino", range: [1, 2]}	
].reverse();

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

console.log(pick(bodyForm));

