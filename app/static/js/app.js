'use strict';

var app = {
	defaults: {
		totalHeight: 0,
		totalSlides: 2,
		pageHeight: 0
	},
	numbers: {
		1: 'home',
		2: 'about_me',
		3: 'projects',
		4: 'technologies',
		5: 'contact',
	},
	initialize: function() {
		// this.calculate_total_height();
		// this.on_scroll();
		this.togle_menu();

	},
	calculate_total_height: function() {
		this.defaults.pageHeight = $(window).height();
		this.defaults.totalHeight = this.defaults.pageHeight*this.defaults.totalSlides;
		$('body').height(this.defaults.totalHeight);
		$('.last_divs').css('top','840px');
	},
	on_scroll: function() {
		var self = this;
		window.onscroll = function() {
			//console.log(window.pageYOffset);
			numberSlide = self.get_number_slide( Math.ceil(window.pageYOffset/self.defaults.pageHeight));
			
			$('#'+numberSlide).css('top',self.defaults.pageHeight-window.pageYOffset);
			
		};
	},
	get_number_slide: function(num) {
		return this.numbers[num];
	},
	togle_menu: function() {
		$('#open-menu').on('click', function() {
			$(this).closest('li').attr('class','open-menu');
			$('#sidebar-wrapper').animate({ width: '200px'});
		});

		$('#close-menu').on('click', function() {
			$(this).closest('li').removeAttr('class','open-menu');
			$('#sidebar-wrapper').animate({ width: '50px'});
		})
	}
};
// window.onscroll = function() {
// 	console.log(window.pageXOffset + " " + window.pageYOffset);
// 	//$('second-div').css('top');
// };

$(function() {
	app.initialize();
});

var person = function (name, lastname) {
	this.name = name;
	this.lastname = lastname;
}