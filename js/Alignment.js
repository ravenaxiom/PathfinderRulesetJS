/*
	Alignment.js
	------------

	...
*/

var Alignment = function(arguments) {
	this.name = arguments.name;
	this.modifiers = (arguments.modifiers) ? arguments.modifiers : undefined;	// only set modifiers if specified in loader
};