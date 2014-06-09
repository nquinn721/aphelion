function NPC() {
	this.x;
	this.y;
	this.dir;
	this.map;
}

NPC.prototype.setVars = function(x, y, dir, map) {
	this.x = x;
	this.y = y;
	this.dir = dir;
	this.map = map;
}

module.exports = NPC;