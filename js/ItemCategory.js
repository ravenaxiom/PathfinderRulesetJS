/*
	ItemCategory.js
	---------------

	Used to classify an item into a category, to define how it's used.
*/


var ItemCategory = function(arguments) {
	this.name = arguments.name;						// string, name of category
	this.slotName = arguments.slotName;				// string, if wieldable or wearable which equipment slot it fits into 
	this.wieldable = arguments.wieldable;			// bool, if item can be wielded by a creature
	this.handsToUse = arguments.handsToUse;			// int, number of hands needed to use
	this.consumable = arguments.consumable;			// bool, if item is consumed after use
	this.wearable = arguments.wearable;				// bool, if item can be worn
	this.carryable = arguments.carryable;			// bool, if item can be carried by a creature
	this.targetable = arguments.targetable;			// bool, if item can be the target of a spell or effect
	this.damagable = arguments.damagable;			// bool, if item can be damaged
	this.destroyable = arguments.destroyable;		// bool, if item can be completely destroyed
};