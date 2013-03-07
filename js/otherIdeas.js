// keep all calculations in milliseconds to allow the system to be used in any way

var Tile = function() {
	this.tile = 0;
	this.type = ""; // WATER, GRASS, ETC 
	this.solid = false;
};


var Tilemap = function() {

};


var Map = function() {
	this.name = "New Map";
	this.tiles = [][]; // of tiles
	this.tilemap = []; // of tilemaps
};
Map.prototype.draw = function() {};



var Camera = function() {
	this.x;
	this.y;
};



var Player = function(arguments) {
	this.name = "New User";
	this.character = arguments.character;
};


var WeatherType = function(arguments) {
	this.name = "Sunny";
	this.modifiers = [];
	this.effects = [];
	this.duration = 1000;
};


var Weather = function() {
	this.currentWeather;
};



