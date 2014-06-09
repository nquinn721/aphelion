// HASH FUNCS
function bit_rol(a,b){return a<<b|a>>>32-b}function safe_add(a,b){var c=(a&65535)+(b&65535);var d=(a>>16)+(b>>16)+(c>>16);return d<<16|c&65535}function md5_ii(a,b,c,d,e,f,g){return md5_cmn(c^(b|~d),a,b,e,f,g)}function md5_hh(a,b,c,d,e,f,g){return md5_cmn(b^c^d,a,b,e,f,g)}function md5_gg(a,b,c,d,e,f,g){return md5_cmn(b&d|c&~d,a,b,e,f,g)}function md5_ff(a,b,c,d,e,f,g){return md5_cmn(b&c|~b&d,a,b,e,f,g)}function md5_cmn(a,b,c,d,e,f){return safe_add(bit_rol(safe_add(safe_add(b,a),safe_add(d,f)),e),c)}function binl_md5(a,b){a[b>>5]|=128<<b%32;a[(b+64>>>9<<4)+14]=b;var c=1732584193;var d=-271733879;var e=-1732584194;var f=271733878;for(var g=0;g<a.length;g+=16){var h=c;var i=d;var j=e;var k=f;c=md5_ff(c,d,e,f,a[g+0],7,-680876936);f=md5_ff(f,c,d,e,a[g+1],12,-389564586);e=md5_ff(e,f,c,d,a[g+2],17,606105819);d=md5_ff(d,e,f,c,a[g+3],22,-1044525330);c=md5_ff(c,d,e,f,a[g+4],7,-176418897);f=md5_ff(f,c,d,e,a[g+5],12,1200080426);e=md5_ff(e,f,c,d,a[g+6],17,-1473231341);d=md5_ff(d,e,f,c,a[g+7],22,-45705983);c=md5_ff(c,d,e,f,a[g+8],7,1770035416);f=md5_ff(f,c,d,e,a[g+9],12,-1958414417);e=md5_ff(e,f,c,d,a[g+10],17,-42063);d=md5_ff(d,e,f,c,a[g+11],22,-1990404162);c=md5_ff(c,d,e,f,a[g+12],7,1804603682);f=md5_ff(f,c,d,e,a[g+13],12,-40341101);e=md5_ff(e,f,c,d,a[g+14],17,-1502002290);d=md5_ff(d,e,f,c,a[g+15],22,1236535329);c=md5_gg(c,d,e,f,a[g+1],5,-165796510);f=md5_gg(f,c,d,e,a[g+6],9,-1069501632);e=md5_gg(e,f,c,d,a[g+11],14,643717713);d=md5_gg(d,e,f,c,a[g+0],20,-373897302);c=md5_gg(c,d,e,f,a[g+5],5,-701558691);f=md5_gg(f,c,d,e,a[g+10],9,38016083);e=md5_gg(e,f,c,d,a[g+15],14,-660478335);d=md5_gg(d,e,f,c,a[g+4],20,-405537848);c=md5_gg(c,d,e,f,a[g+9],5,568446438);f=md5_gg(f,c,d,e,a[g+14],9,-1019803690);e=md5_gg(e,f,c,d,a[g+3],14,-187363961);d=md5_gg(d,e,f,c,a[g+8],20,1163531501);c=md5_gg(c,d,e,f,a[g+13],5,-1444681467);f=md5_gg(f,c,d,e,a[g+2],9,-51403784);e=md5_gg(e,f,c,d,a[g+7],14,1735328473);d=md5_gg(d,e,f,c,a[g+12],20,-1926607734);c=md5_hh(c,d,e,f,a[g+5],4,-378558);f=md5_hh(f,c,d,e,a[g+8],11,-2022574463);e=md5_hh(e,f,c,d,a[g+11],16,1839030562);d=md5_hh(d,e,f,c,a[g+14],23,-35309556);c=md5_hh(c,d,e,f,a[g+1],4,-1530992060);f=md5_hh(f,c,d,e,a[g+4],11,1272893353);e=md5_hh(e,f,c,d,a[g+7],16,-155497632);d=md5_hh(d,e,f,c,a[g+10],23,-1094730640);c=md5_hh(c,d,e,f,a[g+13],4,681279174);f=md5_hh(f,c,d,e,a[g+0],11,-358537222);e=md5_hh(e,f,c,d,a[g+3],16,-722521979);d=md5_hh(d,e,f,c,a[g+6],23,76029189);c=md5_hh(c,d,e,f,a[g+9],4,-640364487);f=md5_hh(f,c,d,e,a[g+12],11,-421815835);e=md5_hh(e,f,c,d,a[g+15],16,530742520);d=md5_hh(d,e,f,c,a[g+2],23,-995338651);c=md5_ii(c,d,e,f,a[g+0],6,-198630844);f=md5_ii(f,c,d,e,a[g+7],10,1126891415);e=md5_ii(e,f,c,d,a[g+14],15,-1416354905);d=md5_ii(d,e,f,c,a[g+5],21,-57434055);c=md5_ii(c,d,e,f,a[g+12],6,1700485571);f=md5_ii(f,c,d,e,a[g+3],10,-1894986606);e=md5_ii(e,f,c,d,a[g+10],15,-1051523);d=md5_ii(d,e,f,c,a[g+1],21,-2054922799);c=md5_ii(c,d,e,f,a[g+8],6,1873313359);f=md5_ii(f,c,d,e,a[g+15],10,-30611744);e=md5_ii(e,f,c,d,a[g+6],15,-1560198380);d=md5_ii(d,e,f,c,a[g+13],21,1309151649);c=md5_ii(c,d,e,f,a[g+4],6,-145523070);f=md5_ii(f,c,d,e,a[g+11],10,-1120210379);e=md5_ii(e,f,c,d,a[g+2],15,718787259);d=md5_ii(d,e,f,c,a[g+9],21,-343485551);c=safe_add(c,h);d=safe_add(d,i);e=safe_add(e,j);f=safe_add(f,k)}return Array(c,d,e,f)}function binl2rstr(a){var b="";for(var c=0;c<a.length*32;c+=8)b+=String.fromCharCode(a[c>>5]>>>c%32&255);return b}function rstr2binl(a){var b=Array(a.length>>2);for(var c=0;c<b.length;c++)b[c]=0;for(var c=0;c<a.length*8;c+=8)b[c>>5]|=(a.charCodeAt(c/8)&255)<<c%32;return b}function str2rstr_utf16be(a){var b="";for(var c=0;c<a.length;c++)b+=String.fromCharCode(a.charCodeAt(c)>>>8&255,a.charCodeAt(c)&255);return b}function str2rstr_utf16le(a){var b="";for(var c=0;c<a.length;c++)b+=String.fromCharCode(a.charCodeAt(c)&255,a.charCodeAt(c)>>>8&255);return b}function str2rstr_utf8(a){var b="";var c=-1;var d,e;while(++c<a.length){d=a.charCodeAt(c);e=c+1<a.length?a.charCodeAt(c+1):0;if(55296<=d&&d<=56319&&56320<=e&&e<=57343){d=65536+((d&1023)<<10)+(e&1023);c++}if(d<=127)b+=String.fromCharCode(d);else if(d<=2047)b+=String.fromCharCode(192|d>>>6&31,128|d&63);else if(d<=65535)b+=String.fromCharCode(224|d>>>12&15,128|d>>>6&63,128|d&63);else if(d<=2097151)b+=String.fromCharCode(240|d>>>18&7,128|d>>>12&63,128|d>>>6&63,128|d&63)}return b}function rstr2any(a,b){var c=b.length;var d,e,f,g,h;var i=Array(Math.ceil(a.length/2));for(d=0;d<i.length;d++){i[d]=a.charCodeAt(d*2)<<8|a.charCodeAt(d*2+1)}var j=Math.ceil(a.length*8/(Math.log(b.length)/Math.log(2)));var k=Array(j);for(e=0;e<j;e++){h=Array();g=0;for(d=0;d<i.length;d++){g=(g<<16)+i[d];f=Math.floor(g/c);g-=f*c;if(h.length>0||f>0)h[h.length]=f}k[e]=g;i=h}var l="";for(d=k.length-1;d>=0;d--)l+=b.charAt(k[d]);return l}function rstr2b64(a){try{b64pad}catch(b){b64pad=""}var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var d="";var e=a.length;for(var f=0;f<e;f+=3){var g=a.charCodeAt(f)<<16|(f+1<e?a.charCodeAt(f+1)<<8:0)|(f+2<e?a.charCodeAt(f+2):0);for(var h=0;h<4;h++){if(f*8+h*6>a.length*8)d+=b64pad;else d+=c.charAt(g>>>6*(3-h)&63)}}return d}function rstr2hex(a){try{hexcase}catch(b){hexcase=0}var c=hexcase?"0123456789ABCDEF":"0123456789abcdef";var d="";var e;for(var f=0;f<a.length;f++){e=a.charCodeAt(f);d+=c.charAt(e>>>4&15)+c.charAt(e&15)}return d}function rstr_hmac_md5(a,b){var c=rstr2binl(a);if(c.length>16)c=binl_md5(c,a.length*8);var d=Array(16),e=Array(16);for(var f=0;f<16;f++){d[f]=c[f]^909522486;e[f]=c[f]^1549556828}var g=binl_md5(d.concat(rstr2binl(b)),512+b.length*8);return binl2rstr(binl_md5(e.concat(g),512+128))}function rstr_md5(a){return binl2rstr(binl_md5(rstr2binl(a),a.length*8))}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72"}function any_hmac_md5(a,b,c){return rstr2any(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)),c)}function b64_hmac_md5(a,b){return rstr2b64(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function hex_hmac_md5(a,b){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function any_md5(a,b){return rstr2any(rstr_md5(str2rstr_utf8(a)),b)}function b64_md5(a){return rstr2b64(rstr_md5(str2rstr_utf8(a)))}function hex_md5(a){return rstr2hex(rstr_md5(str2rstr_utf8(a)))}var hexcase=0;var b64pad="";
/* *****************

	CHANGE BACK WHEN CONNECTING ON ONOTHER SERVER
	CHANGE BACK WHEN CONNECTING ON ONOTHER SERVER
	CHANGE BACK WHEN CONNECTING ON ONOTHER SERVER
	CHANGE BACK WHEN CONNECTING ON ONOTHER SERVER
	CHANGE BACK WHEN CONNECTING ON ONOTHER SERVER
	CHANGE BACK WHEN CONNECTING ON ONOTHER SERVER


********************/
var mysql_client = require('mysql').createClient();

mysql_client.host = 'localhost';
mysql_client.user = 'b56cb47dfb38a5';//'root';
mysql_client.password = 'e1757965';//'root';
// mysql_client.database = 'aphelion';//'DB';
mysql_client.database = 'heroku_7f0556c4ad1fb74';

// Create tables if doesn't exist
mysql_client.query("SELECT 1 FROM accounts", function (e, r) {
	if(e) 
		mysql_client.query("CREATE TABLE `accounts` (" + 
		    "`id` INT(11) NOT NULL AUTO_INCREMENT," +
		    "PRIMARY KEY(id)," +
			"`account_id` INT(12) NOT NULL," +
			"`email` VARCHAR(255) NOT NULL," +
			"`username` VARCHAR(255) NOT NULL," +
			"`password` VARCHAR(255) NOT NULL," +
			"`gender` INT(3) NOT NULL," +
			"`map` INT(3) NOT NULL," +
			"`characters` INT(11) NOT NULL," +
			"`admin` BOOLEAN NOT NULL" +
		")");
})
mysql_client.query("SELECT 1 FROM characters", function (e, r) {
	if(e)
		mysql_client.query("CREATE TABLE `characters` (" +
		    "`id` INT(11) NOT NULL AUTO_INCREMENT," +
		    "PRIMARY KEY(id)," +
			"`account_id` INT(12) NOT NULL," +
			"`char_id` int(12) NOT NULL," +
			"`class` VARCHAR(255) NOT NULL," +
			"`str` INT(11) NOT NULL," +
			"`wis` INT(11) NOT NULL," +
			"`agi` INT(11) NOT NULL," +
			"`con` INT(11) NOT NULL," +
			"`cha` INT(11) NOT NULL," +
			"`int` INT(11) NOT NULL," +
			"`skin` INT(11) NOT NULL," +
			"`health` INT(11) NOT NULL," +
			"`maxHealth` INT(11) NOT NULL," +
			"`experience` INT(255) NOT NULL," +
			"`map` INT(11) NOT NULL," +
			"`x` INT(11) NOT NULL," +
			"`y` INT(11) NOT NULL," +
			"`arenaKills` INT(12) NOT NULL," +
			"`arenaDeaths` INT(12) NOT NULL," +
			"`dir` VARCHAR(5) NOT NULL," +
			"`gender` VARCHAR(5) NOT NULL" +
		")");
})

module.exports = {

	register : function(data){
		var self = this;
		if(this.player === undefined) {
			if(data.username !== undefined && data.password !== undefined && data.email !== undefined && data.gender !== undefined) {
				if(data.username.length >= 4 && data.username.length <= 12) {
					if(data.username.match(/^[a-z]+$/i)) {
						if(data.password.length >= 6 && data.password.length <= 24) {
							if(data.gender == "male" || data.gender == "female") {
								// todo: validate email
								var gender = (data.gender == 'male') ? 0 : 1;
								mysql_client.query("SELECT email FROM `accounts` WHERE username = " + mysql_client.escape(data.username) + " OR email = " + mysql_client.escape(data.email), function(err, results, fields) {
								console.log(err, results, fields);
									if(err == null && results.length == 0) {
										mysql_client.query("INSERT INTO `accounts` (username, password, email, gender, map) VALUES(" + mysql_client.escape(g.strtolower(data.username)) + ", '" + hex_md5('$^34y54k&*yl' + data.password) + "', " + mysql_client.escape(data.email) + ", " + gender + ", 1)");
										self.emit('register success', {});
									} else if(err != null) {
										if(data.email == results[0].email) {
											self.emit('register error', {error: 'Email is already registered'});
										} else {
											self.emit('register error', {error: 'Username is already registered'});
										}
									}
								});
							}
						} else {
							this.emit('register error', {error: 'Password is invalid length'});
						}
					} else {
						this.emit('register error', {error: 'Username may only contain letters'});
					}
				} else {
					this.emit('register error', {error: 'Username is invalid length'});
				}
			} else {
				this.emit('register error', {error: 'Missing fields'});
			}
		}
	}
	, login : function(data){
	
		// No player instantiated
		if(!this.player)
		
			// Check if un and pw were filled out
			if(data.username  && data.password) 
				if(!playerLoggedIn(data.username)) Build_user_characters.call(this, data);
				 else this.emit('login error', {error: 'Account already logged in'});
				
			else this.emit('login error', {error: 'Missing fields'});
			
		
	}
	, get_user : get_user
	, update_user : update_user
	, create_character : create_character
	, get_characters : get_characters
}

function update_user(){
	
	mysql_client.query(
		"UPDATE characters SET x = " 
		+ this.player.x + ", y = " 
		+ this.player.y + ", experience = " 
		+ this.player.exp + ", arenaKills = " 
		+ this.player.arenaKills + ", arenaDeaths = " 
		+ this.player.arenaDeaths + ", map = " 
		+ this.player.map.id + ", health = " 
		+ this.player.health + ", maxHealth = "
		+ this.player.health + " WHERE account_id = " 
		+ this.player.id + " AND char_id = "
		+ this.player.char_id);
}



function get_user(data, cb){
	var self = this;
	var user;
	
	// Get user
	mysql_client.query("SELECT username, account_id  FROM accounts WHERE username = " + mysql_client.escape(data.username) + " AND password = '" + hex_md5('$^34y54k&*yl' + data.password) + "' LIMIT 1", function(err, results, fields) {
		if(err == null && results.length == 1){
			user = results[0];
			
			get_characters(user.account_id, function(chars){
				user.characters = chars;
				
				cb(user);
			});
			
			
			
		}else self.emit('login error', {error: 'Incorrect login information'});
	});
	

}
// Get characters
function get_characters(id, cb){
	
		mysql_client.query("SELECT  * FROM characters WHERE account_id = " + id , function(err, results, fields) {
			console.log(err);
			if(!err) cb(results);
				
			
		})
			
}

function create_character(cl, cb){
	var c = Classes.get_character_class(cl.class), id = this.user.account_id, self = this;
	
	
	var obj = {
		table : 'characters'
		, account_id : id
		, char_id : this.user.characters.length
		, class : c.class
		, str : c.str
		, wis : c.wis
		, agi : c.agi
		, con : c.con
		, cha : c.cha
		, int : c.int
		, skin : cl.skin
		, health : 10
		, maxHealth : 10
	}
	

	mysql_client.query("SELECT characters FROM accounts WHERE account_id = " + id , function(err, results, fields) {
		var chars = Number(results[0].characters);
		console.log(chars);
		if(chars < 3){
			insert(obj);
			update({ table : 'accounts', characters : ++chars, where : 'account_id = ' + id});
			cb('new');
		}else cb('full');
			
	})
	


}

function insert(obj){
	var str = 'INSERT INTO ', x = 0, y = 0, total = 0;
	
	str += obj.table + "(";
	
	// Get total columns in obj
	for(var i in obj)
		total++;
	
	
	// Build columns
	for(var i in obj){
		x++;
		
		
		if(i !== 'table'){
			str +=  '`' + i + '`' ;
			
			if(x < total)
				str += ',';
		}
	}
	
	str += ') VALUES (';
	
	// Build values
	for(var i in obj){
		y++;
		
		
		if(i !== 'table'){
			if(typeof obj[i] === 'string')
				str += "'" + obj[i] + "'";
			else str += obj[i];
			
		
			if(y < total)
				str += ',';
			
		}
	}
	
	
	str += ')';

	mysql_client.query(str);
}


function update(obj){
	var str = 'UPDATE ';
	
	str += obj.table;
	
	str += ' SET ';
	
	
	for(var i in obj)
		if(i !== 'table' && i !== 'where')
			str += i + '=' + obj[i];
		
	str += ' WHERE ' + obj.where;
	
	mysql_client.query(str);
}