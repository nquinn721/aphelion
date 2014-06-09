<div id="character-select" class="view" style="display:none">
	<div id="character-select-info">
		<div id="title">Character Select</div>
		<div id="character-area">
		

			<div id="character-images">
				
				
				<div class="character-image" style="display:none">
					<img src="content/resources/image2.png">
					<div class="character-level">Level : <span>2</span></div>
				</div>
				
				
			</div>
			<div id="character-info">
				<div id="character-info-inner" style="display:none">
					<div class="character-class">Warrior</div>
					<div class="stats">
						<div class="str">STR: <span>10</span></div>
						<div class="int">INT: <span>5</span></div>
						<div class="wis">WIS: <span>5</span></div>
						<div class="agi">AGI: <span>5</span></div>
						<div class="con">CON: <span>5</span></div>
						<div class="cha">CHA: <span>5</span></div>
					</div>
					<input type="button" class=" btn large btn-primary " id="start_game" value="Login" >
					<input type="button" class="btn large btn-danger" id="delete_char" value="Delete" >
				</div>
	
			</div>
		</div>
		<input type="button" class=" btn large btn-primary " id="create_char" value="Create" >
		<input type="button" class="btn large btn-danger" id="reset_pw" value="Password">
	</div>
</div>

<div id="create-character">
	<div id="classes"></div>
	<div id="character-story"></div>
	<div id="info">
		<div id="img"></div>
		
		<div id='stats'>
			STR: <span class="str"></span><br>
			INT: <span class="int"></span><br>
			WIS: <span class="wis"></span><br>
			AGI: <span class="agi"></span><br>
			CON: <span class="con"></span><br>
			CHA: <span class="cha"></span><br>
		</div>
		
		<div id="edit">
			Skin 	&nbsp;&nbsp;
			<span class='arrow_wrap left'>
				<span class="arrow-left"></span>
			</span>
			<span class="num skin_type">0</span>
			<span class="arrow_wrap right">
				<span class="arrow-right"></span>
			</span>
		</div>
		<input type="button" value="Create" class="btn large btn-primary"id="create">
	</div>
	<div id="character-created" class="none">
		Character Created!
	</div>
</div>