/*
	TargetTypeRule.js
	-----------------

	...
*/

var TargetTypeRule = function(arguments) {
	this.category = arguments.category;
	this.amount = arguments.amount; // -1 = infinite
	this.subcategory = arguments.subcategory; // ally, enemy, self

	//this.name = arguments.name;
	//this.validTargets = arguments.validTargets;			// [], array of classnames of valid targets

	//this.creature = 0;
	//this.item = 0;
	//this.targetsLimit = arguments.targetsLimit;
}