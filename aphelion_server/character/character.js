//***************//
//  HELPER FUNCS //
//***************//

function expToLevel(exp) {
	for(var i = 100;i >= 0;--i) {
		if(20 * Math.pow(i, 3) + 30 * Math.pow(i, 2) + 100 * i <= exp) {
			return i;
		}
	}
}


var playerId = 0;


function Player(c, clss, map, username, x, y, admin, gender, skin, exp, arenaKills, arenaDeaths, health, account_id, char_id) {
	this.client = c;
	this.class = clss;
	this.id = account_id;
	this.char_id = char_id;
	this.map = map;
	this.username = g.ucfirst(g.strtolower(username));
	this.admin = admin;
	this.gender = gender;
	this.skin = skin;
	this.exp = exp;
	this.level = expToLevel(exp);
	this.maxHealth = 10 + 2 * this.level;
	this.health = health;
	this.hasInit = false;
	this.arenaKills = arenaKills;
	this.arenaDeaths = arenaDeaths;
	this.killStreak = 0;
	this.nowall = false;
	this.currentlyLoadingMap = false;
	this.setVars(x, y, 3, map);
}
Player.prototype = new NPC;

Player.prototype.data = function() {
	return {
		id: this.id,
		username: this.username,
		x: this.x,
		y: this.y,
		dir: this.dir,
		admin: this.admin,
		gender: this.gender,
		skin: this.skin,
		class: this.class,
		exp: this.exp,
		level: this.level,
		health: this.health,
		maxHealth: this.maxHealth,
		mapID: this.map.id
	};
}



module.exports = Player;




