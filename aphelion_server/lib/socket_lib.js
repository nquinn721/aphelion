// HASH FUNCS
function bit_rol(a,b){return a<<b|a>>>32-b}function safe_add(a,b){var c=(a&65535)+(b&65535);var d=(a>>16)+(b>>16)+(c>>16);return d<<16|c&65535}function md5_ii(a,b,c,d,e,f,g){return md5_cmn(c^(b|~d),a,b,e,f,g)}function md5_hh(a,b,c,d,e,f,g){return md5_cmn(b^c^d,a,b,e,f,g)}function md5_gg(a,b,c,d,e,f,g){return md5_cmn(b&d|c&~d,a,b,e,f,g)}function md5_ff(a,b,c,d,e,f,g){return md5_cmn(b&c|~b&d,a,b,e,f,g)}function md5_cmn(a,b,c,d,e,f){return safe_add(bit_rol(safe_add(safe_add(b,a),safe_add(d,f)),e),c)}function binl_md5(a,b){a[b>>5]|=128<<b%32;a[(b+64>>>9<<4)+14]=b;var c=1732584193;var d=-271733879;var e=-1732584194;var f=271733878;for(var g=0;g<a.length;g+=16){var h=c;var i=d;var j=e;var k=f;c=md5_ff(c,d,e,f,a[g+0],7,-680876936);f=md5_ff(f,c,d,e,a[g+1],12,-389564586);e=md5_ff(e,f,c,d,a[g+2],17,606105819);d=md5_ff(d,e,f,c,a[g+3],22,-1044525330);c=md5_ff(c,d,e,f,a[g+4],7,-176418897);f=md5_ff(f,c,d,e,a[g+5],12,1200080426);e=md5_ff(e,f,c,d,a[g+6],17,-1473231341);d=md5_ff(d,e,f,c,a[g+7],22,-45705983);c=md5_ff(c,d,e,f,a[g+8],7,1770035416);f=md5_ff(f,c,d,e,a[g+9],12,-1958414417);e=md5_ff(e,f,c,d,a[g+10],17,-42063);d=md5_ff(d,e,f,c,a[g+11],22,-1990404162);c=md5_ff(c,d,e,f,a[g+12],7,1804603682);f=md5_ff(f,c,d,e,a[g+13],12,-40341101);e=md5_ff(e,f,c,d,a[g+14],17,-1502002290);d=md5_ff(d,e,f,c,a[g+15],22,1236535329);c=md5_gg(c,d,e,f,a[g+1],5,-165796510);f=md5_gg(f,c,d,e,a[g+6],9,-1069501632);e=md5_gg(e,f,c,d,a[g+11],14,643717713);d=md5_gg(d,e,f,c,a[g+0],20,-373897302);c=md5_gg(c,d,e,f,a[g+5],5,-701558691);f=md5_gg(f,c,d,e,a[g+10],9,38016083);e=md5_gg(e,f,c,d,a[g+15],14,-660478335);d=md5_gg(d,e,f,c,a[g+4],20,-405537848);c=md5_gg(c,d,e,f,a[g+9],5,568446438);f=md5_gg(f,c,d,e,a[g+14],9,-1019803690);e=md5_gg(e,f,c,d,a[g+3],14,-187363961);d=md5_gg(d,e,f,c,a[g+8],20,1163531501);c=md5_gg(c,d,e,f,a[g+13],5,-1444681467);f=md5_gg(f,c,d,e,a[g+2],9,-51403784);e=md5_gg(e,f,c,d,a[g+7],14,1735328473);d=md5_gg(d,e,f,c,a[g+12],20,-1926607734);c=md5_hh(c,d,e,f,a[g+5],4,-378558);f=md5_hh(f,c,d,e,a[g+8],11,-2022574463);e=md5_hh(e,f,c,d,a[g+11],16,1839030562);d=md5_hh(d,e,f,c,a[g+14],23,-35309556);c=md5_hh(c,d,e,f,a[g+1],4,-1530992060);f=md5_hh(f,c,d,e,a[g+4],11,1272893353);e=md5_hh(e,f,c,d,a[g+7],16,-155497632);d=md5_hh(d,e,f,c,a[g+10],23,-1094730640);c=md5_hh(c,d,e,f,a[g+13],4,681279174);f=md5_hh(f,c,d,e,a[g+0],11,-358537222);e=md5_hh(e,f,c,d,a[g+3],16,-722521979);d=md5_hh(d,e,f,c,a[g+6],23,76029189);c=md5_hh(c,d,e,f,a[g+9],4,-640364487);f=md5_hh(f,c,d,e,a[g+12],11,-421815835);e=md5_hh(e,f,c,d,a[g+15],16,530742520);d=md5_hh(d,e,f,c,a[g+2],23,-995338651);c=md5_ii(c,d,e,f,a[g+0],6,-198630844);f=md5_ii(f,c,d,e,a[g+7],10,1126891415);e=md5_ii(e,f,c,d,a[g+14],15,-1416354905);d=md5_ii(d,e,f,c,a[g+5],21,-57434055);c=md5_ii(c,d,e,f,a[g+12],6,1700485571);f=md5_ii(f,c,d,e,a[g+3],10,-1894986606);e=md5_ii(e,f,c,d,a[g+10],15,-1051523);d=md5_ii(d,e,f,c,a[g+1],21,-2054922799);c=md5_ii(c,d,e,f,a[g+8],6,1873313359);f=md5_ii(f,c,d,e,a[g+15],10,-30611744);e=md5_ii(e,f,c,d,a[g+6],15,-1560198380);d=md5_ii(d,e,f,c,a[g+13],21,1309151649);c=md5_ii(c,d,e,f,a[g+4],6,-145523070);f=md5_ii(f,c,d,e,a[g+11],10,-1120210379);e=md5_ii(e,f,c,d,a[g+2],15,718787259);d=md5_ii(d,e,f,c,a[g+9],21,-343485551);c=safe_add(c,h);d=safe_add(d,i);e=safe_add(e,j);f=safe_add(f,k)}return Array(c,d,e,f)}function binl2rstr(a){var b="";for(var c=0;c<a.length*32;c+=8)b+=String.fromCharCode(a[c>>5]>>>c%32&255);return b}function rstr2binl(a){var b=Array(a.length>>2);for(var c=0;c<b.length;c++)b[c]=0;for(var c=0;c<a.length*8;c+=8)b[c>>5]|=(a.charCodeAt(c/8)&255)<<c%32;return b}function str2rstr_utf16be(a){var b="";for(var c=0;c<a.length;c++)b+=String.fromCharCode(a.charCodeAt(c)>>>8&255,a.charCodeAt(c)&255);return b}function str2rstr_utf16le(a){var b="";for(var c=0;c<a.length;c++)b+=String.fromCharCode(a.charCodeAt(c)&255,a.charCodeAt(c)>>>8&255);return b}function str2rstr_utf8(a){var b="";var c=-1;var d,e;while(++c<a.length){d=a.charCodeAt(c);e=c+1<a.length?a.charCodeAt(c+1):0;if(55296<=d&&d<=56319&&56320<=e&&e<=57343){d=65536+((d&1023)<<10)+(e&1023);c++}if(d<=127)b+=String.fromCharCode(d);else if(d<=2047)b+=String.fromCharCode(192|d>>>6&31,128|d&63);else if(d<=65535)b+=String.fromCharCode(224|d>>>12&15,128|d>>>6&63,128|d&63);else if(d<=2097151)b+=String.fromCharCode(240|d>>>18&7,128|d>>>12&63,128|d>>>6&63,128|d&63)}return b}function rstr2any(a,b){var c=b.length;var d,e,f,g,h;var i=Array(Math.ceil(a.length/2));for(d=0;d<i.length;d++){i[d]=a.charCodeAt(d*2)<<8|a.charCodeAt(d*2+1)}var j=Math.ceil(a.length*8/(Math.log(b.length)/Math.log(2)));var k=Array(j);for(e=0;e<j;e++){h=Array();g=0;for(d=0;d<i.length;d++){g=(g<<16)+i[d];f=Math.floor(g/c);g-=f*c;if(h.length>0||f>0)h[h.length]=f}k[e]=g;i=h}var l="";for(d=k.length-1;d>=0;d--)l+=b.charAt(k[d]);return l}function rstr2b64(a){try{b64pad}catch(b){b64pad=""}var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var d="";var e=a.length;for(var f=0;f<e;f+=3){var g=a.charCodeAt(f)<<16|(f+1<e?a.charCodeAt(f+1)<<8:0)|(f+2<e?a.charCodeAt(f+2):0);for(var h=0;h<4;h++){if(f*8+h*6>a.length*8)d+=b64pad;else d+=c.charAt(g>>>6*(3-h)&63)}}return d}function rstr2hex(a){try{hexcase}catch(b){hexcase=0}var c=hexcase?"0123456789ABCDEF":"0123456789abcdef";var d="";var e;for(var f=0;f<a.length;f++){e=a.charCodeAt(f);d+=c.charAt(e>>>4&15)+c.charAt(e&15)}return d}function rstr_hmac_md5(a,b){var c=rstr2binl(a);if(c.length>16)c=binl_md5(c,a.length*8);var d=Array(16),e=Array(16);for(var f=0;f<16;f++){d[f]=c[f]^909522486;e[f]=c[f]^1549556828}var g=binl_md5(d.concat(rstr2binl(b)),512+b.length*8);return binl2rstr(binl_md5(e.concat(g),512+128))}function rstr_md5(a){return binl2rstr(binl_md5(rstr2binl(a),a.length*8))}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72"}function any_hmac_md5(a,b,c){return rstr2any(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)),c)}function b64_hmac_md5(a,b){return rstr2b64(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function hex_hmac_md5(a,b){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function any_md5(a,b){return rstr2any(rstr_md5(str2rstr_utf8(a)),b)}function b64_md5(a){return rstr2b64(rstr_md5(str2rstr_utf8(a)))}function hex_md5(a){return rstr2hex(rstr_md5(str2rstr_utf8(a)))}var hexcase=0;var b64pad="";


// Optimize client js
io.enable('browser client minification');
io.enable('browser client etag');
io.enable('browser client gzip');  



io.set('log level', 2);
io.set('transports', ['websocket', 'flashsocket']);

io.sockets.on('connection', function(client){
	my_clients.push(client);
	console.log('New client found: ' + client.id);
	//console.log(client.handshake.address.address);
	client.has_init = false;
	
	// Send Available Classes To Client
	client.emit('classes', Classes.get_character_classes());
	
	
	client.on('init', function(data) {
		if(this.player === undefined) {
			
		}
		console.log('socket inited on server');
	});
	
	client.on('ping', function(data) {
		client.emit('ping', {});
	});
	
	client.on('register', function(data) {
		db.register.call(this, data);
	});
	
	client.on('create_char', function(data){
		db.create_character.call(this, data, function(data){
			client.emit('character_avail', data);
		});
	})
	client.on('get_chars', function(id){
		db.get_characters(id, function(chars){
			client.emit('get_chars', chars);
		})
	})
	
	client.on('player chosen', function(num){
		var self = this;
		db.get_characters(this.user.account_id, function (chars) {
			var c = chars[num];
			self.player = new Character(
				self, 
				c.class, 
				maps[ c.map ], 
				self.user.username, 
				c.x, 
				c.y, 
				self.user.admin, 
				c.gender, 
				c.skin, 
				c.experience, 
				c.arenaKills, 
				c.arenaDeaths, 
				c.health,
				self.user.account_id,
				c.char_id
			);
			
			maps[ c.map ].addPlayer(self.player);
		})
	
	})
	
	// process a login
	client.on('login', function(data) {
		db.login.call(this, data);
	});
	
	client.on('done loading', function(data) {
		
		// Check for done loading
		console.log('done loading');
		
		console.log(client.player.data());
		if(client.player !== undefined && !client.player.hasInit) {
			sendToMapLimited(client.player.map, 'player enter', {
				player: client.player.data()
			}, client.player);
		
			client.emit('init', {
				map: {
					id: client.player.map.id,
					width: client.player.map.width,
					height: client.player.map.height
				},
				player: client.player.data(),
				players: client.player.map.playerData(),
				monsters: client.player.map.monsterData()
			});
			client.player.hasInit = true;
		}
	});
	
	// done loading for secondardy map, kinda slopppy
	client.on('map init', function(data) {
		if(client.player !== undefined && client.player.hasInit) {
			client.player.currentlyLoadingMap = false;
			client.emit('load map', {
				map: {
					id: client.player.map.id,
					width: client.player.map.width,
					height: client.player.map.height
				},
				player: client.player.data(),
				players: client.player.map.playerData(),
				monsters: client.player.map.monsterData()
			});
		}
	});
	
	// process a chat packet handle commands and things like that
	client.on('message', function(data) {
		message.call(client, data);
	});

	
	client.on('attack', function(data) {
	
		if(this.player !== undefined && this.player.hasInit) {
	
			sendToMapLimited(this.player.map, 'player attack', {player: this.player.data()}, this.player);
		}
	});
	
	client.on('arena attack', function(data) {
		if(this.player !== undefined && this.player.hasInit) {
			var oldX = this.player.x, oldY = this.player.y;
			switch(this.player.dir) {
				case 0: ++oldX; break;
				case 1: --oldY; break;
				case 2: --oldX; break;
				case 3: ++oldY; break;
			}
			if(this.player.map.id == 1 && oldX > 1 && oldY > 1 && oldX < 16 && oldY < 11) {
				var killed = this.player.map.playerAtPoint(oldX, oldY);
				if(killed !== false) {
					killed.x = 2;
					killed.y = 13;
					++killed.arenaDeaths;
					++this.player.arenaKills;
					killed.killStreak = 0;
					++this.player.killStreak;
					sendToMap(killed.map, 'warp player', {player: killed.data()});
					sendToMap(this.player.map, 'arena announcement', {msg: this.player.username + ' has eliminated ' + killed.username + '!' + ((this.player.killStreak >= 2) ? ' (' + this.player.killStreak + ' kill kill streak!)' : '')});
				}
			}
		}
	});
	
	client.on('attack monster', function(data) {
		if(this.player !== undefined && this.player.hasInit) {
			var oldX = this.player.x, oldY = this.player.y;
			switch(this.player.dir) {
				case 0: ++oldX; break;
				case 1: --oldY; break;
				case 2: --oldX; break;
				case 3: ++oldY; break;
			}
			var m = this.player.map.monsterAtPoint(oldX, oldY);
			if(m !== false) {
				var p = playerAttackedMonster(m, this.player.username);
				var damage = (m.health - (this.player.level + 1) >= 0) ? (this.player.level + 1) : m.health;
				if(p === false) {
					m.slayers.push({username: this.player.username, damage: damage});
				} else {
					p.damage += damage;
				}
				m.health -= damage;
				if(m.health > 0) {
					sendToMap(this.player.map, 'monster attacked', {monster: m.data()});
				} else {
					sendToMap(this.player.map, 'monster remove', {monster: m.data()});
					m.die();
					this.player.map.monsters.splice(this.player.map.monsters.indexOf(m), 1);
					for(var i = 0;i < m.slayers.length;++i) {
						var slayer = getPlayerByUsername(m.slayers[i].username);
						if(slayer !== false) {
							var expToGain = Math.floor((m.slayers[i].damage / m.maxHealth) * m.exp);
							slayer.exp += expToGain;
							var newLevel = expToLevel(slayer.exp);
							if(slayer.level != newLevel) {
								slayer.level = newLevel;
								slayer.client.emit('level up', {level: slayer.level});
							}
							slayer.client.emit('gain exp', {exp: expToGain, total: slayer.exp, level: slayer.level});
						}
					}
				}
			}
		}
	});
	
	client.on('walk', function(data) {
		if(this.player !== undefined && this.player.hasInit && data.direction !== undefined) {
			if(data.direction >= 0 && data.direction <= 3) {
				this.player.dir = data.direction;
				var cX = this.player.x, cY = this.player.y;
				switch(this.player.dir) {
					case 0:	++cX; break;
					case 1: --cY; break;
					case 2: --cX; break;
					case 3: ++cY; break;
					default: break;
				}
				if(this.player.map.pointIsWalkable(cX, cY) || this.player.nowall) {
					this.player.x = cX;
					this.player.y = cY;
					if(this.player.map.id == 1 && this.player.y == 19 && (this.player.x == 4 || this.player.x == 6 || this.player.x == 8 || this.player.x == 10 || this.player.x == 12 || this.player.x == 14)) {
						this.player.x = g.rand(2, 15);
						this.player.y = g.rand(2, 10);
						sendToMap(this.player.map, 'warp player', {player: this.player.data()});
					} else if(this.player.map.id == 0 && this.player.x == 0 && this.player.y >= 13 && this.player.y <= 16) {
						warpPlayer(this.player, maps[1], 18, 10);
					} else if(this.player.map.id == 1 && this.player.x == 19 && this.player.y >= 9 && this.player.y <= 11) {
						warpPlayer(this.player, maps[0], 1, 15);
					} else {
						sendToMapLimited(this.player.map, 'player walk', {player: this.player.data()}, this.player);
					}
				}
			}
		}
	});
	
	client.on('online list', function(data) {
		if(this.player !== undefined && this.player.hasInit) {
			client.emit('online list', {list: onlineList()});
		}
	});
	
	client.on('turn', function(data) {
		if(this.player !== undefined && this.player.hasInit && data.dir !== undefined) {
			if(data.dir >= 0 && data.dir <= 3) {
				this.player.dir = data.dir;
				sendToMapLimited(this.player.map, 'player turn', {player: this.player.data()}, this.player);
			}
		}
	});
	
	client.on('disconnect', function(){
		console.log('Client disconnected');
		if(this.player !== undefined) {
			var m = this.player.map;
			this.player.map.removePlayer(this.player);
			db.update_user.call(this);
			if(this.player.hasInit) {
				sendToMap(m, 'player remove', {player: this.player.data()});
			}
		}
		for(var i = 0;i < my_clients.length;++i) {
			if(my_clients[i] == this) {
				my_clients.splice(i, 1);
			}
		}
	});
}); 