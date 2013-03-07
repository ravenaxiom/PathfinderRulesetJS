/*
	Buff.js
	-------

	A buff is a modifier that applies over time, such as a bonus to a stat or healing over time.
	Can be positive or negative.
*/

var Buff = function(arguments) {
	this.name = arguments.name;
	this.effect = arguments.effect;
	this.duration = arguments.duration
	this.target = arguments.target;
};

Buff.prototype.apply = function(target) {
	// check if array or single target
	// check rules of buff
	// apply to create if rules ok
};
