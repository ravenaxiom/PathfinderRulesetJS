/*
	Modifier.js
	-----------

	A modifier is an alteration to an attribute that is applied immediately. Eg lowing a stat,
	adding health, etc. Can be positive or negative.
*/



var Modifier = function( arguments ) {
	this.attribute = arguments.attribute;
	this.action = arguments.action; // multiplier, add, substract, set value to
	this.amount = arguments.amount; // don't roll the amount yet, store as Dice object

	/*
		modifiable:
			str, dex, con, etc
			ac

	*/
};

Modifier.prototype.apply = function(target) {
	// check if array or single target
	// check type of target (creature, item) is valid
	// assume that rules allow the effect to occur on the target
	// apply effects onto target

	// this.attribute = currentHP;
	// this.action = "Subtract";
	// var diceAmount = new Dice("1d4");		// (calculate dice roll here) floor(1d4 -> rand() * 4)
	// this.amount = diceAmount.roll;
	// creature.modify( this.attribute, this.action, this.amount)
};