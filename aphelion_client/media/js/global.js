var base_url = '/Aphelion/aphelion_client';


function expToLevel(exp) {
	for(var i = 100;i >= 0;--i) {
		if(20 * Math.pow(i, 3) + 30 * Math.pow(i, 2) + 100 * i <= exp) {
			return i;
		}
	}
}

// Splash screen
function splash(obj){
	var splash = $('<div>', {class : 'splash'});
	splash.css({
		background : 'rgba(0,0,0,0.4)'
		, position : 'absolute'
		, top : 0
		, left : 0
		, width : $(window).width() - 1
		, height : $(window).height() - 1
		, zIndex : 9998
	});

	splash.on('click', function(){
		$(this).remove();
		obj.click.call($(this))
	});
	
	
	this.remove = function(){
		$(splash).remove();
	}
	
	$('body').append(splash);
}

// Set up fullscreen
function setup_fullscreen(){
	var off = $('.switch.fullscreen_switch').find('.off');
	var on = $('.switch.fullscreen_switch').find('.on');
	
	if(off.hasClass('selected')) full_screen();
	else full_screen(true);
		
	off.toggleClass('selected');
	on.toggleClass('selected');
	
	// Fullscreen function
	function full_screen(returnback){
		var client = $('#client');
		var view = $('#viewport');
		var main = $('#main-game-ui');
		
		if(!returnback){
			client.css({position : 'inherit'});
			view.height('73%');
			main.height('27%');
				
		}else{
			client.css({ position : 'relative'});
			view.height('63%');
			main.height('37%');
		}

	}	
}

// Setup sound adjuster
function set_sound_adjust() {
	// Init sliders
	 $(this).slider({
		orientation: 'horizontal',
		range: 'min',
		min: 0,
		max: 100,
		value: 50
	});
	
	var sound = this.className.match(/bgm|sfx/)[0];
	
	adjust_sound(sound, $.cookie(sound + '_volume'));

	// Bind slider change
	$(this).bind('slide slidestop', function() {
		var value = $(this).slider('value');
		adjust_sound(sound, value);
	})
	
	
	// Adjust sound
	function adjust_sound(item, value){
		
		// Set slider val
		$('.' + item).slider('value', value);
		// Set text number of valume
		$('.current-volume.' + item).text(value);
		// Change audio valume
		audio.setVolume(item, value);
		// Update cookie
		$.cookie(item + '_volume', value);

	}
}

function upperFirst(string){
	if(typeof string === 'string')
		return string.charAt(0).toUpperCase() + string.slice(1);
	else return string;
}


$(function(){

	// Set up full screen button
	$('.fullscreen_switch').on('click', setup_fullscreen);
	
	
	
	
	// Inventory sortable
	var prevPagesOrder = [];
	$('.inventory .items').sortable({
		 start: function(event, ui) {
			prevPagesOrder = $(this).sortable('toArray');
		},
		update: function(event, ui) {
			var currentOrder = $(this).sortable('toArray');
			var first = ui.item[0].id;
			var second = currentOrder[prevPagesOrder.indexOf(first)];
			swapOnServer(first, second);
		}
	}).disableSelection();
})



