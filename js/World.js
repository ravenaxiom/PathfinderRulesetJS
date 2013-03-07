/*
	World.js
	--------

	...
*/

var World = function(arguments) {
	
	this.name = arguments.name;

	this.gravity = 0;
	this.currentTime = 0;//new Date();
//	this.currentWeather = 0;

	this.roundDuration = 6;	// duration of a combat round in milliseconds

//	this.map = arguments.map;

	// database of all types of things that can exist in the world

	this.modifierTypes = [];
	this.requirementTypes = [];

	// no dependencies
	this.alignments = [];
	this.languages = [];
	this.sizes = [];
	this.genders = [];	
	this.spellSchools = [];
	this.targetTypes = [];
//	this.effects = [];		// buffs/debuffs like poison, bless, etc	

	// dependencies
	this.races = [];
	this.classes = [];
	this.items = [];
	this.spells = [];
	
	

//	
//	this.powers = [];

//	this.debuffs = [];
//	this.weatherTypes = [];


//	this.npcs = [];
//	this.pcs = [];

	// current encounter keeps track of relevant things in the current scene
//	this.creatures = [];

	// the current encounter
//	this.encounter = 0;



	this.ruleset = new PathfinderLoader(this);//"Pathfinder"; // load the correct JSON file depending on ruleset used
};



// increment the world time by the number of milliseconds specified
World.prototype.tick = function(timePeriod) {
};

// update all things in the world (in time)
World.prototype.update = function(timePeriod) {
	//for each creature in creatures { creature.update(timePeriod); }
};

