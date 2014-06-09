module.exports = message;

var commands = {
	'~' : 'global'
	, '!' : 'pm'
	, '$' : 'admin'
}
var admin_commands = {
	skin : skin
	, toall : toall
	, stats : stats
	, nowall : nowall
	, spawn : spawn
	, massspawn : massspawn
	, kick : kick
	, shutdown : shutdown
	, warp : warp
	, warptome : warptome
}

function old_message(data){
	console.log(data.msg.substr(0, 6));

if(this.player !== undefined && this.player.hasInit && data.msg !== undefined && data.msg.length <= 200) {
	if(data.msg.substr(0, 1) === '!'){
	
		data.command = 'pm';
		data.pm_name = data.msg.split(' ')[0].substring(1);
		
		this.emit('message', data);
		
		for(var client in my_clients)
			if(my_clients[client].player.username === data.pm_name)
				my_clients[client].emit('message', data);
		
	}else if(data.msg.substr(0, 1) == '~') {
		sendToWorld('message', {player: this.player.username, msg: data.msg.substr(1), channel : 'global'});
	} else if(data.msg.substr(0, 6) == '$toall' && this.player.admin >= 2) {
		sendToWorld('broadcast', {player: this.player.data(), msg: data.msg.substr(7)});
	} else if(data.msg.substr(0, 6) == '#stats') {
		console.log('stats ran');
		var kdr = this.player.arenaDeaths == 0 ? 'DNE' : g.roundNumber(this.player.arenaKills / this.player.arenaDeaths, 2);
		client.emit('arena stats', {msg: this.player.arenaKills + ' kills, ' + this.player.arenaDeaths + ' deaths. ' + kdr + ' KDR.'});
	} else if(data.msg.substr(0, 7) == '#nowall' && this.player.admin >= 3) {
		this.player.nowall = true;
	} else if(data.msg.substr(0, 5) == '$skin' && this.player.admin >= 2) {
		var parts = data.msg.split(' ');
		if(parts.length >= 3) {
			var player = getPlayerByUsername(parts[1]);
			if(player !== false) {
				var skinid = parseInt(parts[2]);
				if(skinid >= 0 && skinid <= 6) {
					player.skin = skinid;
					sendToMap(player.map, 'change skin', {player: player.data()});
				}
			}
		}
	} else if(data.msg.substr(0, 6) == '$spawn' && this.player.admin >= 3) {
		var parts = data.msg.split(' ');
		if(parts.length >= 2 && parts[1] == 'boss') {
			var m = new Monster('hg.png', this.player.map, this.player.x, this.player.y, 3);
			m.exp = 170000;
			m.health = 100000;
			m.maxHealth = 100000;
			m.minAttack = 20;
			m.maxAttack = 50;
			this.player.map.addMonster(m);
			sendToMap(this.player.map, 'monster enter', {monster: m.data()});
		} else if(parts.length >= 2 && parts[1] == 'apozen') {
			var m = new Monster('apozen.png', this.player.map, this.player.x, this.player.y, 3);
			m.exp = 25000;
			m.health = 35000;
			m.maxHealth = 35000;
			this.player.map.addMonster(m);
			sendToMap(this.player.map, 'monster enter', {monster: m.data()});
		} else if(parts.length >= 2 && options.indexOf(parts[1] + '.png') != -1) {
			var m = new Monster(parts[1] + '.png', this.player.map, this.player.x, this.player.y, 3);
			m.exp = monsterStats[options.indexOf(parts[1] + '.png')].exp;
			m.health = monsterStats[options.indexOf(parts[1] + '.png')].health;
			m.maxHealth = m.health;
			this.player.map.addMonster(m);
			sendToMap(this.player.map, 'monster enter', {monster: m.data()});
		}
	} else if(data.msg.substr(0, 10) == '$massspawn' && this.player.admin >= 3) {
		var parts = data.msg.split(' ');
		if(parts.length >= 3) {
			var monster = parts[1];
			var choice = 0;
			switch(monster) {
				case 'mummy.png': choice = 0; break;
				case 'bogoman.png': choice = 1; break;
				case 'centaur.png': choice = 2; break;
				case 'chaos.png': choice = 3; break;
				case 'pig.png': choice = 4; break;
				case 'sheep.png': choice = 5; break;
				case 'gorilla.png': choice = 6; break;
				case 'gnoll.png': choice = 7; break;
			}
			var numberToSpawn = parseInt(parts[2]);
			for(var i = 0;i < numberToSpawn;++i) {
				var m = new Monster(monster, this.player.map, g.rand(0, this.player.map.width - 1), g.rand(0, this.player.map.height - 1), 3);
				m.health = monsterStats[choice].health;
				m.maxHealth = monsterStats[choice].health;
				m.exp = monsterStats[choice].exp;
				this.player.map.addMonster(m);
				sendToMap(this.player.map, 'monster enter', {monster: m.data()});
			}
		}
	} else if(data.msg.substr(0, 5) == '$kick' && this.player.admin >= 2) {
		var parts = data.msg.split(' ');
		if(parts.length >= 2) {
			var p = getPlayerByUsername(parts[1]);
			if(p !== false && p.admin < this.player.admin) {
				p.client.disconnect();
			}
		}
	} else if(data.msg.substr(0, 9) == '$shutdown' && this.player.admin >= 3) {
		for(var i = 0;i < maps.length;++i) {
			for(var j = 0;j < maps[i].players.length;++j) {
				maps[i].players[j].client.disconnect();
			}
		}
	} else if(data.msg.substr(0, 5) == '$warp' && this.player.admin >= 2) {
		var parts = data.msg.split(' ');
		if(parts.length >= 5) {
			var p = getPlayerByUsername(parts[1]);
			if(p !== false) {
				var mapID = parseInt(parts[2]);
				if(mapID < maps.length) {
					var toX = parseInt(parts[3]);
					var toY = parseInt(parts[4]);
					if(toX >= 0 && toX < maps[mapID].width && toY >= 0 && toY < maps[mapID].height) {
						warpPlayer(p, maps[mapID], toX, toY);
					}
				}
			}
		}
	} else if(data.msg.substr(0, 9) == '$warptome' && this.player.admin >= 2) {
		var parts = data.msg.split(' ');
		if(parts.length >= 2) {
			var p = getPlayerByUsername(parts[1]);
			if(p !== false) {
				p.x = this.player.x;
				p.y = this.player.y;
				p.map = this.player.map;
				sendToMap(p.map, 'warp player', {player: p.data()});
			}
		}
	} else {
		sendToMapLimited(this.player.map, 'chat', {user_id: this.player.id, msg: data.msg}, this.player);
	}
}

}

function message(data){
	var msg = data.msg, command;
	
	// Find if it's a chat type
	data.command = command = commands[ msg.substring(0,1) ];
	
	
	// Setup pm
	if(command === 'pm')
		data.pm_name =  msg.split(' ')[0].substr(1);
	
	
	if(command === 'admin'){
		admin_commands [ msg.split(' ')[0].substr(1) ].call(this, data);
		return;
	}
	

		//********//
		// Emit   //
		//********//
		
		// If global emit to all sockets
		if(command === 'global'){
			data.channel = 'global';
			io.sockets.emit('message', data);
		}else this.emit('message', data);

		// If pm emit to specific client
		if(command === 'pm')
			for(var client in my_clients)
				if(my_clients[client].player.username === data.pm_name)
					my_clients[client].emit('message', data);
			


}


//*****************//
//  ADMIN COMMANDS //
//*****************//
function toall(data){
	this.emit('broadcast', {player: this.player.data(), msg: data.msg.substr(7), bubble : 'none'});
}
function stats(data){
	console.log('stats ran');
	var kdr = this.player.arenaDeaths == 0 ? 'DNE' : g.roundNumber(this.player.arenaKills / this.player.arenaDeaths, 2);
	this.emit('arena stats', {msg: this.player.arenaKills + ' kills, ' + this.player.arenaDeaths + ' deaths. ' + kdr + ' KDR.'});
}

function nowall(){
	this.player.nowall = true;
}

function spawn(data){
	console.log('spawn ran baby');
	var parts = data.msg.split(' ');
	if(parts.length >= 2 && parts[1] == 'boss') {
		var m = new Monster('hg.png', this.player.map, this.player.x, this.player.y, 3);
		m.exp = 170000;
		m.health = 100000;
		m.maxHealth = 100000;
		m.minAttack = 20;
		m.maxAttack = 50;
		this.player.map.addMonster(m);
		sendToMap(this.player.map, 'monster enter', {monster: m.data()});
	} else if(parts.length >= 2 && parts[1] == 'apozen') {
		var m = new Monster('apozen.png', this.player.map, this.player.x, this.player.y, 3);
		m.exp = 25000;
		m.health = 35000;
		m.maxHealth = 35000;
		this.player.map.addMonster(m);
		sendToMap(this.player.map, 'monster enter', {monster: m.data()});
	} else if(parts.length >= 2 && options.indexOf(parts[1] + '.png') != -1) {
		var m = new Monster(parts[1] + '.png', this.player.map, this.player.x, this.player.y, 3);
		m.exp = monsterStats[options.indexOf(parts[1] + '.png')].exp;
		m.health = monsterStats[options.indexOf(parts[1] + '.png')].health;
		m.maxHealth = m.health;
		this.player.map.addMonster(m);
		sendToMap(this.player.map, 'monster enter', {monster: m.data()});
	}
}

function massspawn(data){
	var parts = data.msg.split(' ');
	if(parts.length >= 3) {
		var monster = parts[1];
		var choice = 0;
		switch(monster) {
			case 'mummy.png': choice = 0; break;
			case 'bogoman.png': choice = 1; break;
			case 'centaur.png': choice = 2; break;
			case 'chaos.png': choice = 3; break;
			case 'pig.png': choice = 4; break;
			case 'sheep.png': choice = 5; break;
			case 'gorilla.png': choice = 6; break;
			case 'gnoll.png': choice = 7; break;
		}
		var numberToSpawn = parseInt(parts[2]);
		for(var i = 0;i < numberToSpawn;++i) {
			var m = new Monster(monster, this.player.map, g.rand(0, this.player.map.width - 1), g.rand(0, this.player.map.height - 1), 3);
			m.health = monsterStats[choice].health;
			m.maxHealth = monsterStats[choice].health;
			m.exp = monsterStats[choice].exp;
			this.player.map.addMonster(m);
			sendToMap(this.player.map, 'monster enter', {monster: m.data()});
		}
	}
}


function skin(data){
	console.log('skin ran', data)
	var parts = data.msg.split(' ');
	if(parts.length >= 3) {
		var player = getPlayerByUsername(parts[1]);
		if(player !== false) {
			var skinid = parseInt(parts[2]);
			if(skinid >= 0 && skinid <= 6) {
				player.skin = skinid;
				sendToMap(player.map, 'change skin', {player: player.data()});
			}
		}
	}
}
function warptome(data){
	var parts = data.msg.split(' ');
	if(parts.length >= 2) {
	var p = getPlayerByUsername(parts[1]);
		if(p !== false) {
			p.x = this.player.x;
			p.y = this.player.y;
			p.map = this.player.map;
			sendToMap(p.map, 'warp player', {player: p.data()});
		}
	}
}

function warp(data){
	var parts = data.msg.split(' ');
	if(parts.length >= 5) {
		var p = getPlayerByUsername(parts[1]);
		if(p !== false) {
			var mapID = parseInt(parts[2]);
			if(mapID < maps.length) {
				var toX = parseInt(parts[3]);
				var toY = parseInt(parts[4]);
				if(toX >= 0 && toX < maps[mapID].width && toY >= 0 && toY < maps[mapID].height) {
					warpPlayer(p, maps[mapID], toX, toY);
				}
			}
		}
	}
}
function kick(data){
	var parts = data.msg.split(' ');
	if(parts.length >= 2) {
		var p = getPlayerByUsername(parts[1]);
		if(p !== false && p.admin < this.player.admin) {
			p.client.disconnect();
		}
	}
}

function shutdown(data){
	for(var i = 0;i < maps.length;++i) {
		for(var j = 0;j < maps[i].players.length;++j) {
			maps[i].players[j].client.disconnect();
		}
	}
}
