/*
	Currency.js
	-----------

	Currency is 
	Each currency is worth a number of base, nameless "units". So copper pieces might be worth 5 units, 
	and gold bars might be worth 1000 units. Item value is represented in this base unit value.

	For example:
		Copper = 1
		Silver = 10
		Gold = 100
		Platinum = 1000
*/


var Currency = function(arguments) {
	this.name = arguments.name;
	this.value = arguments.value;
};