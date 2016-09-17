(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
	    var scrolled = $(window).scrollTop();
	    $('.jumbo-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
	    parallax();
	});
	
	var trabalhoSO = $('#trabalho-so');
	var trabalhoOWL = $('#trabalho-owl');

	trabalhoSO.on('click', function() {
		window.open('/so');
	})

	trabalhoOWL.on('click', function() {
		window.open('https://play.google.com/store/apps/details?id=br.owl.activity&hl=pt_BR');
	});
})();