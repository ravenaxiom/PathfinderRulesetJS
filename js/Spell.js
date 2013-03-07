/*
	Spell.js
	--------

	An ability belonging to a specific school and level, which causes an
	effect to 
*/

var Spell = function(arguments) {
	this.name = arguments.name;						// string, name of spell
	this.school = arguments.school;					// SpellSchool, which school spell belongs to
	this.level = arguments.level;					// int, level of spell
	this.description = arguments.description;		// string, text description of spell and effects
	this.effect = arguments.effect;					// [Buff &&|| Effect], result of using spell
	this.target = arguments.target;					// [Target], names of all possible target types
};


Spell.prototype.apply = function(target) {
	// apply the effects of a spell to the specified target(s), making sure they're valid
};