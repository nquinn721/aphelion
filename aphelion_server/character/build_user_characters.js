function build_user(data){
	var self = this;
	
	// Get user and characters from db object
	db.get_user.call(this, data, function(user){
		var c, all_characters = [];
		
		
		
		// If no characters send and leave
		if(!user.characters){
			self.emit('characters', 'No characters');
			return;
		}
		
		
		
				
		// Build character classes
		for( var i = 0; i < user.characters.length; i++){
			c = user.characters[i];
			
			c.class = Classes.create_class(c.class, {
				str : c.str
				, int : c.int
				, wis : c.wis
				, agi : c.agi
				, con : c.con
				, cha : c.cha
			});
			
			// Clear attributes from character since copies are in class
			delete c.int, delete c.str, delete c.wis, delete c.agi, delete c.con, delete c.cha;
			
		
		}
		
		// Add user to socket
		self.user = user;
		
		

		// Emit user to client
		self.emit('login success', { user : user});
		
	
	})
		
}

module.exports = build_user;