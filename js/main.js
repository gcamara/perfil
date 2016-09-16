angular.module('app', ['ngResource']);
//'datatables', 'datatables.bootstrap', 'datatables.buttons'

(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	var sobreHeight = $('.sobre').outerHeight();
	function parallax(){
	    var scrolled = $(window).scrollTop();
	    $('.jumbo-bg').css('height', (jumboHeight-scrolled) + 'px');
	    $('.sobre').css('height', (sobreHeight) + 'px');
	}

	$(window).scroll(function(e){
	    parallax();
	});
})();