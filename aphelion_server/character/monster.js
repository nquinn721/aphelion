var monsterId = 0;


function Monster(type, map, x, y, dir) {
	this.type = type;
	this.id = monsterId++;
	this.dead = false;
	this.health = 10;
	this.maxHealth = 10;
	this.exp = 20;
	this.slayers = [];
	this.setVars(x, y, dir, map);
	
	var self = this;
	// misnamed now since it's used for "actions" and not just walking.
	var walkFunc = function() {
		if(self.dead) {
			return;
		}
		var playerToAttack = self.attemptAttack();
		if(playerToAttack !== false) {
			var attack = g.rand(self.minAttack, self.maxAttack);
			playerToAttack.health -= attack;
			if (playerToAttack.health < 0) {
				playerToAttack.health = 0;
				sendToMap(self.map, 'monster attack', {monster: self.data(), player: playerToAttack.data()});
				warpPlayer(playerToAttack, maps[0], 0, 0);
			} else {
				sendToMap(self.map, 'monster attack', {monster: self.data(), player: playerToAttack.data()});
			}
		} else {
			var wdir = g.rand(0, 3);
			var cX = self.x, cY = self.y;
			switch(wdir) {
				case 0:	++cX; break;
				case 1: --cY; break;
				case 2: --cX; break;
				case 3: ++cY; break;
				default: break;
			}
			if(self.map.pointIsWalkable(cX, cY)) {
				self.x = cX;
				self.y = cY;
				self.dir = wdir;
				sendToMap(self.map, 'monster walk', {monster: self.data()});
			}
		}
		setTimeout(walkFunc, g.rand(2000, 3000));
	};
	this.walkTimer = setTimeout(walkFunc, 1000);
}
Monster.prototype = new NPC;

Monster.prototype.attemptAttack = function() {
	for(var i = 0;i < this.slayers.length;++i) {
		var slayer = getPlayerByUsername(this.slayers[i].username);
		if(slayer.x == this.x && slayer.y == this.y + 1) {
			this.dir = 3;
			return slayer;
		} else if(slayer.x == this.x && slayer.y == this.y - 1) {
			this.dir = 1;
			return slayer;
		} else if(slayer.x == this.x + 1 && slayer.y == this.y) {
			this.dir = 0;
			return slayer;
		} else if(slayer.x == this.x - 1 && slayer.y == this.y) {
			this.dir = 2;
			return slayer;
		}
	}
	return false;
}

Monster.prototype.data = function() {
	return {
		id: this.id,
		type: this.type,
		x: this.x,
		y: this.y,
		dir: this.dir,
		health: this.health,
		maxHealth: this.maxHealth,
		mapID: this.map.id
	};
}

Monster.prototype.die = function() {
	this.dead = true;
}

module.exports = Monster;



