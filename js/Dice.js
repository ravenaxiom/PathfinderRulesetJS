/*
	Dice.js
	-------

	Used for hitdice, but also things like 1d4 + 10 con damage
*/

var Dice = function(diceString) {
	// init variables
	this.number = 0;
	this.dice = 0;

	// get the 
	this.fromString
};


// return a string in the format "1d4"
Dice.prototype.toString = function() {
	return this.number + "d" + this.dice;
};	


// get the values from a string
Dice.prototype.fromString = function(diceString) {
	// TODO
	this.number = 0;
	this.dice = 0;
}


// return the actual hitpoints randomly selected
Dice.prototype.calculateHitpoints = function() {
	return this.number * (Math.floor(Math.random() * this.dice));
};