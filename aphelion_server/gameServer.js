// Server, Socket, Database modules
http = require('http'),  
io = require('socket.io').listen(8078),
db = require('./lib/db_lib.js'),
my_clients = [];





// Generic function module
g = require('./lib/generic_func.js');

// Game modules
Classes = require('./character/classes.js');
NPC = require('./character/npc.js');
Character = require('./character/character.js');
MapInfo = require('./map/map.js');
Monster = require('./character/monster.js');
Socket = require('./lib/socket_lib.js');
message = require('./message/message.js');
Build_user_characters = require('./character/build_user_characters.js');
Map = MapInfo.Map;
mapData = MapInfo.mapData;



// GLOBALS
SKIN_NORMAL = 0;
SKIN_TAN = 1;
SKIN_YELLOW = 2;
SKIN_SKELLY = 3;
SKIN_PANDA = 4;
SKIN_ORC = 5;
SKIN_FISH = 6;

GENDER_MALE = 0;
GENDER_FEMALE = 1;
maps = [];
monsterStats = [{health: 30, exp: 55, minAttack: 1, maxAttack: 3}, {health: 60, exp: 35, minAttack: 1, maxAttack: 3}, {health: 15, exp: 10, minAttack: 1, maxAttack: 3}, {health: 60, exp: 80, minAttack: 2, maxAttack: 5}, {health: 20, exp: 35, minAttack: 1, maxAttack: 3}, {health: 10, exp: 20, minAttack: 1, maxAttack: 3}, {health: 500, exp: 600, minAttack: 5, maxAttack: 8}, {health: 5000, exp: 3500, minAttack: 2, maxAttack: 5}];
options = ['mummy.png', 'bogoman.png', 'centaur.png', 'chaos.png', 'pig.png', 'sheep.png', 'gorilla.png', 'gnoll.png'];


maps.push(new Map(30, 30, 0));
maps.push(new Map(20, 20, 1));



getPlayerByUsername = function(username) {
	for(var i = 0; i < maps.length; ++i) 
		for(var j = 0; j < maps[i].players.length; ++j) 
			if(g.strtolower(maps[i].players[j].username) == g.strtolower(username)) 
				return maps[i].players[j];

	return false;
}

sendToMap = function(map, type, data) {
	for(var i = 0;i < map.players.length;++i) {
		if(!map.players[i].hasInit || map.players[i].currentlyLoadingMap) 
			continue;
		
		map.players[i].client.emit(type, data);
	}
}


sendToMapLimited = function(map, type, data, except) {
	for(var i = 0;i < map.players.length;++i) {
		if(map.players[i] == except || !map.players[i].hasInit || map.players[i].currentlyLoadingMap) 
			continue;
		
		map.players[i].client.emit(type, data);
	}
}

sendToWorld = function (type, data) {
	for(var i = 0;i < maps.length;++i) {
		for(var j = 0;j < maps[i].players.length;++j) {
			if(!maps[i].players[j].hasInit) 
				continue;
			
			maps[i].players[j].client.emit(type, data);
		}
	}
}

warpPlayer = function (p, toMap, toX, toY) {
	p.x = toX;
	p.y = toY;
	if(p.map != toMap) {
		var oldMap = p.map;
		p.map.removePlayer(p);
		p.map = toMap;
		p.map.addPlayer(p);
		sendToMapLimited(oldMap, 'player remove', {player: p.data()}, p);
		sendToMapLimited(toMap, 'player enter', {player: p.data()}, p);
		p.client.emit('warp player', {player: p.data()});
		p.currentlyLoadingMap = true;
	} else {
		sendToMap(p.map, 'warp player', {player: p.data()});
	}
}

playerLoggedIn = function(username) {
	for(var i = 0;i < my_clients.length;++i) {
		if(my_clients[i].player !== undefined && g.strtolower(my_clients[i].player.username) == g.strtolower(username)) {
			return true;
		}
	}
	return false;
}



playerAttackedMonster = function (m, username) {
	for(var i = 0;i < m.slayers.length;++i) {
		if(m.slayers[i].username == username) {
			return m.slayers[i];
		}
	}
	return false;
}

onlineList = function() {
	var list = [];
	for(var i = 0;i < maps.length;++i) {
		for(var j = 0;j < maps[i].players.length;++j) {
			if(!maps[i].players[j].hasInit) {
				continue;
			}
			list.push({
				admin: maps[i].players[j].admin,
				username: maps[i].players[j].username,
				level: maps[i].players[j].level
			});
		}
	}
	list.sort(function(a, b){
		var nameA = a.username.toLowerCase(), nameB = b.username.toLowerCase()
		if (nameA < nameB) //sort string ascending
			return -1; 
		if (nameA > nameB)
			return 1;
		return 0; //default return value (no sorting)
	});
	return list;
}


expToLevel = function(exp) {
	for(var i = 100;i >= 0;--i) {
		if(20 * Math.pow(i, 3) + 30 * Math.pow(i, 2) + 100 * i <= exp) {
			return i;
		}
	}
}



setInterval(function() {


	if(maps[0].monsters.length < 10) {
		var choice = g.rand(0, 6);
		var m = new Monster(options[choice], maps[0], g.rand(0, maps[0].width - 1), g.rand(0, maps[0].height), 3);
		m.health = monsterStats[choice].health;
		m.maxHealth = monsterStats[choice].health;
		m.exp = monsterStats[choice].exp;
		m.minAttack = monsterStats[choice].minAttack;
		m.maxAttack = monsterStats[choice].maxAttack;
		maps[0].addMonster(m);
		sendToMap(maps[0], 'monster enter', {monster: m.data()});
	}
}, 5 * 1000);

setInterval(function() {
	for(var i = 0;i < maps.length;++i) {
		for(var j = 0;j < maps[i].players.length;++j) {
			var hp = maps[i].players[j].health;
			var max = maps[i].players[j].maxHealth
			
			maps[i].players[j].health += 3;
			if (hp >= max)
				maps[i].players[j].health = max;
			
			// console.log(maps[i].players[j]);
			maps[i].players[j].client.emit('increase health', {player: maps[i].players[j].data()});
		}
	}
}, 1000);// change to 30 * 1000



