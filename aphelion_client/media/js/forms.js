$(document).ready(function() {

	jQuery.validator.addMethod('alpha', function(value, element) {
		return this.optional(element) || value == value.match(/^[a-zA-Z]+$/);
	}, 'Only letters are allowed.');

	$('#main-menu form').each(function() {

		var options = { 
			highlight: function (element, errorClass, validClas) { 
					$(element).closest('div.control-group').addClass('error'); 
			}, 
			unhighlight: function (element, errorClass, validClass) { 
					$(element).closest('.error').removeClass('error'); 
			}, 
			errorElement: 'span',
			errorClass: 'help-inline'
		}
		
		var handler;
		
		// Register form
		if ($(this).hasClass('register')) {
			options.rules = {
				password_confirm: {
					equalTo: '#register-password'
				}
			}
			options.submitHandler = function() { $('#client').trigger('submit-register'); }
		}
		
		// Login
		if ($(this).hasClass('login')) {
			options.submitHandler = function() { $('#client').trigger('submit-login'); }
		}
		
		
		var validator = $(this).validate(options);
		$(this).data('validator', validator)

	});
	

	//******************************//
	// Home screen  buttons		    //
	//******************************//
	
	// Settings
	$('#menu_screen_settings').on('click', function(){
		var div = $('<div>', {class : 'home_screen_settings'});
		var close = $('<a>', {class : 'close', text : 'x'})
		
		
		div.css({
			position : 'absolute'
			, width : 500
			, height : 200
			, background : 'white'
			, borderRadius : 10
			, border : '1px solid #222'
			, top : $(window).height() / 2 - 150
			, left : $(window).width() / 2 - 250
			, zIndex : 9999
			, padding : 20
		});
		
		
		$('body').append(div);
		
		
		settings_menu('.home_screen_settings');
		
		
		div.find('.switch').css('color', 'white').end()
			.find('.setting').css('margin-top', 10);
		splash({
			click : function(){
				div.remove();
				
			}
		})
		
		close.on('click', function(){
			div.remove();
		})
		
		div.prepend(close);
	});
	
	
	//***********************//
	//*** ESC MENU **********//
	//**********************///
	
	
	// log out
	$('#logout').on('click', function(){
		location.reload();
	})
	
	// Settings menu
	$('#main-menu-settings').on('click', function(){
		settings_menu('.modal-body-data');
	});	
	
	function settings_menu(c){
		var settings_menu = $('#main-game-ui-settings').clone();
		
		$(c).html(settings_menu);
		$(c + ' .fullscreen_switch').on('click', setup_fullscreen);
		
		$('.adjust-sound').each(set_sound_adjust);
	}
	
	
	

});