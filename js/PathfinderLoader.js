/*
	PathfinderLoader.js
	-----------------------

	Load world data based on the Pathfinder ruleset.
*/

var PathfinderLoader = function(world) {
	this.name = "Pathfinder";
	this.version = "1.0";
	this.author = "Adam Burns";

	this.world = world;

	this.load();		// load all the data
	this.validate();	// validiate loaded data is correct
};


PathfinderLoader.prototype.load = function() {
	// load all the relevant data into the game world

	this.loadModifierTypes();
	this.loadRequirementTypes();

	this.loadAlignments();
	this.loadLanguages();
	this.loadSizes();
	this.loadGenders();
	this.loadCurrencies();
	this.loadSpellSchools();
	this.loadTargetTypes();

	this.loadRaces();
	this.loadClasses();
	this.loadItems();
	this.loadSpells();

	this.loadWorld();
};


PathfinderLoader.prototype.validate = function() {
	// validate that all loaded data that relies on other data is correct, eg check all used item types exist

	//this.validateRaces();
}


//////////////////////////////


PathfinderLoader.prototype.loadModifierTypes = function() {
	this.world.modifierTypes = [
		new ModifierType({ name: "+" }),
		new ModifierType({ name: "-" }),
		new ModifierType({ name: "*" })
	];
};


PathfinderLoader.prototype.loadRequirementTypes = function() {
	this.world.requirementTypes = [
		new RequirementType({ name: ">" }),
		new RequirementType({ name: "<" }),
		new RequirementType({ name: "==" }),
		new RequirementType({ name: "<=" }),
		new RequirementType({ name: ">=" })
	];
};


//////////////////////////////


PathfinderLoader.prototype.loadAlignments = function() {
	this.world.alignments = [
		new Alignment({ name: "Lawful Good" }),
		new Alignment({ name: "Neutral Good" }),
		new Alignment({ name: "Chaotic Good" }),
		new Alignment({ name: "Lawful Neutral" }),
		new Alignment({ name: "True Neutral" }),
		new Alignment({ name: "Chaotic Neutral" }),
		new Alignment({ name: "Lawful Evil" }), 
		new Alignment({ name: "Neutral Evil" }),
		new Alignment({ name: "Chaotic Evil" })
	];
};


PathfinderLoader.prototype.loadLanguages = function() {
	this.world.languages = [
		new Language({ name: "Common" }),
		new Language({ name: "Elvish" }),
		new Language({ name: "Dwarvern" }) 
	];
};


PathfinderLoader.prototype.loadSizes = function() {
	this.world.sizes = [
		new Size({ name: "Tiny" }),
		new Size({ name: "Small", effect: new Modifier({attribute: "attributes.strength", action: "-", amount: 2}) }),
		new Size({ name: "Medium" }),
		new Size({ name: "Large" }),
		new Size({ name: "Huge" }) 
	];
};

PathfinderLoader.prototype.loadGenders = function() {
	this.world.genders = [
		new Gender({ name: "Male" }),
		new Gender({ name: "Female" }) 
	];
};


PathfinderLoader.prototype.loadCurrencies = function() {
	this.world.currencies = [
		new Currency({ name: "Copper", value: 1 }),
		new Currency({ name: "Silver", value: 10 }), 
		new Currency({ name: "Gold", value: 100 }),
		new Currency({ name: "Platinum", value: 10000 }),
	];
};


PathfinderLoader.prototype.loadSpellSchools = function() {
	this.world.spellSchools = [
		new SpellSchool({ name: "Conjuration", opposingSchool: "Necromancy" }),
		new SpellSchool({ name: "Necromancy", opposingSchool: "Conjuration" }),
	];
};


PathfinderLoader.prototype.loadTargetTypes = function() {
	this.world.targetTypes = [
		new TargetType({ name: "Single Creature", 	 targets: [ new TargetTypeRule({ category: "Creature",  amount: 1 }) ]  }),
		new TargetType({ name: "Single Item", 		 targets: [ new TargetTypeRule({ category: "Item", 		amount: 1 }) ]  }),
		new TargetType({ name: "Multiple Creatures", targets: [ new TargetTypeRule({ category: "Creature", 	amount: -1 }) ]  }),
		new TargetType({ name: "Multiple Items", 	 targets: [ new TargetTypeRule({ category: "Item", 		amount: -1 }) ]  }),
		new TargetType({ name: "Single Tile",		 targets: [ new TargetTypeRule({ category: "Tile", 		amount: 1 }) ]  }),
		new TargetType({ name: "Small Area of Effect - Tiles",	 			targets: [ new TargetTypeRule({ category: "Tile", 		amount: 4 }) ]  }),
		new TargetType({ name: "Large Area of Effect - Tiles",	 			targets: [ new TargetTypeRule({ category: "Tile", 		amount: 9 }) ]  }),
		new TargetType({ name: "Large Area of Effect - All Creatures",	 	targets: [ new TargetTypeRule({ category: "Tile", 		amount: 9 }),
																				   	   new TargetTypeRule({ category: "Creature", 	amount: -1 }) ]  }),
		new TargetType({ name: "Large Area of Effect - All Allies",	 		targets: [ new TargetTypeRule({ category: "Tile", 		amount: 9 }),
																				   	   new TargetTypeRule({ category: "Creature", 	subcategory: "Allies",  amount: -1 }) ]  }), 
		new TargetType({ name: "Large Area of Effect - All Enemies",	 	targets: [ new TargetTypeRule({ category: "Tile", 		amount: 9 }),
																				   	   new TargetTypeRule({ category: "Creature", 	subcategory: "Enemies", amount: -1 }) ]  })
	];
};


PathfinderLoader.prototype.loadItemCategories = function() {
	this.world.itemCategories = [
		new ItemCategory({ name: "One Handed Weapon", slotName: "Hand", wieldable: true, handsToUse: 1, carryable: true, targetable: true, damagable: true, destroyable: true }),
		new ItemCategory({ name: "Two Handed Weapon", slotName: "Hand", wieldable: true, handsToUse: 2, carryable: true, targetable: true, damagable: true, destroyable: true }),
		new ItemCategory({ name: "Head Armour", slotName: "Head", wearable: true, carryable: true, targetable: true, damagable: true, destroyable: true }),
		new ItemCategory({ name: "Body Armour", slotName: "Body", wearable: true, carryable: true, targetable: true, damagable: true, destroyable: true }),
		new ItemCategory({ name: "Consumable", carryable: true, targetable: true, destroyable: true })
	];
};


//////////////////////////////


PathfinderLoader.prototype.loadRaces = function() {
	this.world.races = [
		new Race({ name: "Human", size: "Medium", languages: [ "Common" ] }), 
		new Race({ name: "Elf", size: "Large", languages: [ "Common", "Elvish" ] }), 
		new Race({ name: "Dwarf", size: "Small", languages: [ "Common", "Dwarvish" ] })
	];
};


PathfinderLoader.prototype.validateRaces = function() {
	//for each race in this.world.races {
		// size
		// language
	//}
};


PathfinderLoader.prototype.loadClasses = function() {
	this.world.classes = [
		new Class({ name: "Fighter" }), 
		new Class({ name: "Thief" }), 
		new Class({ name: "Cleric" }), 
		new Class({ name: "Wizard" })
	];
};


PathfinderLoader.prototype.loadItems = function() {
	this.world.items = [
		new Item({ name: "Iron Sword", 	   itemCategory: "One Handed Weapon", weight: 50, value: 100, effect: [ new Modifier({attribute: "currentHP", action: "-", amount: "1d8"}) ] }), 
		new Item({ name: "Leather Shield", itemCategory: "One Handed Weapon", weight: 25, value: 50,  effect: [ new Modifier({attribute: "AC", action: "+", amount: "1"}) ] }),
		new Item({ name: "Healing Potion", itemCategory: "Consumable", 		  weight: 5,  value: 10,  effect: [ new Modifier({attribute: "currentHP", action: "+", amount: "2d4"}) ], uses: 1 }),
		new Item({ name: "Silver Helmet", itemCategory: "Head Armour", 		  weight: 75,  value: 200,  effect: [ new Modifier({attribute: "AC", action: "+", amount: "2"}) ], uses: 1 })
	];
};


PathfinderLoader.prototype.loadSpells = function() {
	this.world.spells = [
		new Spell({ name: "Magic Missile", school: "Conjuration", level: 1, target: "Single Creature",
			description: "Cast a magic missle to hit an enemy.", 
			effect: new Modifier({attribute: "currentHP", action: "subtract", amount: "1d4 + 10"})
		}), 

		new Spell({ name: "Area Heal", school: "Conjuration", level: 8, target: "Area of Effect - All Allies",
			description: "Heal all allies in an area", 
			effect: [ new Modifier({attribute: "currentHP", action: "add", amount: "5d8 + 20"}),
					  new Buff({ name: "Regeneration", duration: 1000, 
						effectModifier: new Modifier({attribute: "currentHP", action: "add", amount: "1d3" }) }) ] 
		})
	];
};


//////////////////////////////


PathfinderLoader.prototype.loadWorld = function() {
	this.world.gravity = 9.8;
	this.world.currentTime = new Date();
	this.world.roundDuration = 6000;
};


