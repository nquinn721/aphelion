// Structs
function types (type){
	var t = {
		warrior: {class : 'warrior', type : 'damage', range : 'melee', damage : 3, evade : 5, str: 2, int: 0, wis: 0, agi: 0, con: 0, cha: 0}
		, priest  : {class : 'priest', type : 'magic', range : 'ranged',  damage : 3, evade : 3, str: 0, int: 2, wis: 0, agi: 0, con: 0, cha: 0}
		, magician : {class : 'magician', type : 'magic', range : 'ranged', damage : 3, evade : 4, str: 0, int: 0, wis: 2, agi: 0, con: 0, cha: 0 }
		, rogue : {class : 'rogue', type : 'damage', range : 'melee',  damage : 5, evade : 3, str: 0, int: 0, wis: 0, agi: 2, con: 2, cha: 0}
		, archer : {class : 'archer', type : 'damage', range : 'ranged',  damage : 6, evade : 4, str: 0, int: 0, wis: 0, agi: 2, con: 0, cha: 0}
	}
	

	
	if(type)
		return  t[ type ];
	else return t;
}

function Class(stats){

	// In game stats
	this.str = stats.str;
	this.int = stats.int;
	this.wis = stats.wis;
	this.agi = stats.agi;
	this.con = stats.con;
	this.cha = stats.cha;
	
	// Character attributes
	this.class = stats.class;
	this.type = stats.type;
	this.range = stats.range;
	
	
	// Actual Stats
	this.weight = 0;
	this.damage = 0;
	this.tp = 0;
	this.accuracy = 0;
	this.evade = 0;
	this.hp = 0;
	this.armor = 0;
	
	
	// Stats that update charater specific
	this.updateStat = {
		evade : stats.evade
		, damage : stats.damage
	}
}

Class.prototype = {
	setAttr : function(attr, num){
		this[attr] = num;
	}
	, getAttr : function(attr){
		return this[attr];
	}
	
	, update : function(){
	
		// Generic updates that apply to all classes
		this.weight = this.str;
		this.tp = this.int * (1 + 1/4);
		this.evade = Math.floor(this.agi / this.updateStat.evade);
		this.hp = this.con * (1 + 1/4);
		
		// Wisdom also affects tp so we add to it
		// Warrior is the only different class with a 1 to 1 ratio 
		// Everyone else is 1 to 3/4 ratio
		if(this.class !== 'warrior')
			this.tp += (this.wis * .75);
		else this.tp += this.wis;
		
		
		// Upgrade armor, warrior and rogue upgrade faster
		if(this.class === 'warrior' || this.class === 'rogue')
			this.armor = Math.floor(this.con / 4);
		else this.armor = Math.floor(this.con / 5);
		
		// Upgrade damage, magic based by int and damage based by str
		if(this.type === 'damage')
			this.damage = Math.floor( this.str / this.updateStat.damage )  + '-' + Math.floor( this.str / this.updateStat.damage );
		else this.damage = Math.floor( this.int / this.updateStat.damage )  + '-' + Math.floor( this.int/ this.updateStat.damage );
		
		// Upgrade accuracy, magic based on wis and damage based by agi
		// Archor is only class that 5 agi = 1 accuracy
		if(this.type === 'damage')
			if(this.class === 'archor')
				this.accuracy = Math.floor( this.agi / 5 );
			else
				this.accuracy = Math.floor( this.agi / 3 );
		else this.accuracy = Math.floor( this.wis / 3 );
	}
	
	
	
	
	// On lvl up every stat gets 1
	, levelUp : function(){
		var stats = ['str', 'wis', 'agi', 'con', 'cha'];
		
		for(var i = 0; i < stats.length; i++)	
			this.setAttr(stats[i], 1);
			
		this.update();
	}

}

function get_charcter_classes(){
	// Character Class list
	var character_classes = [
		'Warrior'
		, 'Priest'
		, 'Magician'
		, 'Rogue'
		, 'Archer'
	];
	
	var s = {
		warrior : "Strong against large crowds of enemies."
		, priest : "Great heals with some damage support."
		, magician : "Large amounts of magic damage to all enemies."
		, rogue : "Very quick and sneaky, can kill a single enemy in one shot."
		, archer : "Keeps enemies at great distance and has high accuracy."
	}
	
	return { classes : character_classes, story : s, class_info : types() };
}

function get_character_class(type){
	return types( type );
}
function create_class(type, stats){
	var ch = types( type.toLowerCase() );
	
	// If character is already created override stats
	if( stats )
		for( var i in stats )
			ch [ i ] = stats [ i ];
		
	
	// Create class
	var cl = new Class( ch );
	
	// Update class
	cl.update();
	
	// Return class
	return cl;
}

module.exports = {
	get_charcter_classes : get_charcter_classes
	, create_class : create_class
	, get_character_class : get_character_class
}

/*

 Upgrades - Warrior
 //1 STR = 1 Weight     // 2 str
// 3 STR = 1-1 Damage
// 1 INT = 1¼ TP         // 1 int
 //1 WIS = 1 TP          // 1 wis
 //3 AGI = 1 Accuracy    // 2 agi
 //5 AGI = 1 Evade
// 1 CON = 1¼ HP         // 2 con
// 4 CON = 1 Armor

 Upgrades - Priest
 //1 STR = 1 Weight   // 1 str
 //1 INT = 1¼ TP      // 2 int
// 3 INT = 1-1 Damage
// 1 WIS = ¾ TP       // 2 wis
// 3 WIS = 1 Accuracy
 //3 AGI = 1 Evade    // 1 agi
 //1 CON = 1¼ HP     // 2 con
 //5 CON = 1 Armor

 
  Upgrades - Magician
// 1 STR = 1 Weight    // 1 str
 //1 INT = 1¼ TP       // 2 int
// 3 INT = 1-1 Damage
// 1 WIS = ¾ TP        // 2 wis
// 3 WIS = 1 Accuracy
// 4 AGI = 1 Evade     // 1 agi
 //1 CON = 1¼ HP      // 2 con
// 5 CON = 1 Armor

  Upgrades - Rogue
// 1 STR = 1 Weight     // 2 str
// 5 STR = 1-1 Damage
// 1 INT = 1¼ TP        // 1 int
 //1 WIS = ¾ TP        // 1 wis
// 3 AGI = 1 Accuracy, //1 Evade  // 1 agi
// 1 CON = 1¼ HP        // 2 con
 //4 CON = 1 Armor
 
  Upgrades - Archer
 //1 STR = 1 Weight     // 2 str
// 6 STR = 1-1 Damage
 //1 INT = 1¼ TP        // 1 int
// 1 WIS = ¾ TP         // 1 wis
// 4 AGI = 1 Evade      // 2 agi
// 5 AGI = 1 Accuracy
 //1 CON = 1¼ HP        // 2 con
 //5 CON = 1 Armor
 

 Warrior

Starting Stats
 STR: 2
 INT: 0
 WIS: 0
 AGI: 0
 CON: 0
 CHA: 0

 Upgrades
 1 STR = 1 Weight
 3 STR = 1-1 Damage
 1 INT = 1¼ TP
 1 WIS = 1 TP
 3 AGI = 1 Accuracy
 5 AGI = 1 Evade
 1 CON = 1¼ HP
 4 CON = 1 Armor

 Pros:
 + Highest max Weight in the game
 + More Damage than Magicians
 + More Damage than Rogues
 + More Damage than Archers
 + More Armor than Priests
 + More Armor than Magicians
 + More Armor than Archers

 Cons:
 - Lowest Evade in the game
 - Less Accuracy than Magicians
 - Less Accuracy than Rogues
 - Less max TP than Priests
 - Less max TP than Magicians



Priest

Starting Stats
 STR: 0
 INT: 2
 WIS: 0
 AGI: 0
 CON: 0
 CHA: 0

 Upgrades
 1 STR = 1 Weight
 1 INT = 1¼ TP
 3 INT = 1-1 Damage
 1 WIS = ¾ TP
 3 WIS = 1 Accuracy
 3 AGI = 1 Evade
 1 CON = 1¼ HP
 5 CON = 1 Armor

 Pros:
 + Highest max TP in the game
 + More Damage than Magicians
 + More Damage than Rogues
 + More Damage than Archers
 + More Evade than Warriors

 Cons:
 - Less Armor than Warriors
 - Less Armor than Rogues
 - Less Accuracy than Magicians
 - Less Accuracy than Rogues
 - Less Evade than Rogues
 - Less max Weight than Warriors



Magician

Starting Stats
 STR: 0
 INT: 0
 WIS: 2
 AGI: 0
 CON: 0
 CHA: 0

 Upgrades
 1 STR = 1 Weight
 1 INT = 1¼ TP
 3 INT = 1-1 Damage
 1 WIS = ¾ TP
 3 WIS = 1 Accuracy
 4 AGI = 1 Evade
 1 CON = 1¼ HP
 5 CON = 1 Armor

 Pros:
 + More Accuracy than Priests
 + More Damage than Rogues
 + More Damage than Archers
 + More Evade than Warriors

 Cons:
 - Less Damage than Warriors
 - Less Damage than Priests
 - Less Armor than Warriors
 - Less Armor than Rogues
 - Less Evade than Rogues
 - Less max TP than Priests
 - Less max Weight than Warriors



Rogue

Starting Stats
 STR: 0
 INT: 0
 WIS: 0
 AGI: 2
 CON: 2
 CHA: 0

 Upgrades
 1 STR = 1 Weight
 5 STR = 1-1 Damage
 1 INT = 1¼ TP
 1 WIS = ¾ TP
 3 AGI = 1 Accuracy, 1 Evade
 1 CON = 1¼ HP
 4 CON = 1 Armor

 Pros:
 + Highest Evade in the game
 + More Accuracy than Warriors
 + More Accuracy than Priests
 + More Accuracy than Archers
 + More Damage than Archers

 Cons:
 - Less Damage than Warriors
 - Less Damage than Priests
 - Less Damage than Magicians
 - Less max TP than Priests
 - Less max TP than Magicians
 - Less max Weight than Warriors



Archer

Starting Stats
 STR: 0
 INT: 0
 WIS: 0
 AGI: 2
 CON: 0
 CHA: 0

 Upgrades
 1 STR = 1 Weight
 6 STR = 1-1 Damage
 1 INT = 1¼ TP
 1 WIS = ¾ TP
 4 AGI = 1 Evade
 5 AGI = 1 Accuracy
 1 CON = 1¼ HP
 5 CON = 1 Armor

 Pros:
 + More Evade than Warriors
 + More Evade than Priests
 + Able to hold bows and arrows

 Cons:
 - Lowest Damage in the Game
 - Less Armor than Warriors
 - Less Armor than Rogues
 - Less Evade than Magicians
 - Less Evade than Rogues
 - Less max TP than Priests
 - Less max TP than Magicians
 - Less max Weight than Warriors
 

 */