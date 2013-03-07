/*
	Item.js
	-------

	...
*/

var Item = function(arguments) {
	this.name = arguments.name;					// string, name of item 
	this.itemCategory = arguments.itemCategory; 
	this.uses = arguments.uses;
	this.effect = arguments.effect;
	this.weight = arguments.weight;
	this.value = arguments.value;
	this.targets = arguments.targets;
	this.currentHP = arguments.hp;
};