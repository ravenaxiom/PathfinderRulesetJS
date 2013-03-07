/*
	Loader.js
	-----------------------

	Load world data based on the Pathfinder ruleset.
*/

var Loader = function(loadFunction) {
	this.name = arguments.;
	this.version = "1.0";
	this.author = "Adam Burns";

	this.world = world;

	this.load();		// load all the data
	this.validate();	// validiate loaded data is correct
};



