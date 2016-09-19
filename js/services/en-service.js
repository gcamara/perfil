(function(){ 
	'use strict'

	var app = angular.module('portfolio');

	app.factory('ENGService', ENGService);
	function ENGService() {
		var vm = this;

		vm.textos = {
			'sobre': 			'About Me',
			'projetos': 		'Projects',
			'certificacoes': 	'Certifications',
			'hobbies': 			'Hobbies',
			'subtitulo': 		'Developer, Analyst and gamer..',
			'eai': 				'What\'s Up?',
			'eai.content':		'<p>Hi, I\'m Gabriel Câmara Carvalho, a developer and passionate for what I do ever since my 8 years.'+
								'I\'ve used many technologies to develop and I\'m in market for like 5 years now and I\'ve left a good legacy with the clients I\'ve worked with.</p>'+
								'<p>I\'ve lived in Chile for two months - to where I\'m going to get back for a visit - and which was one of the very bests experiences I\'ve ever had. Besides the lange, the country'+
								'has a lot a good stuff, lots of places to visit, but forget about eating a good food.'+
								'</p><p>I\'ve practiced a many sports, such as: Judo, Brazilian Jiu-jitsu and volleyball, but nowadas I split my time between my job, my incredible-endless-hard bachelor degree and French and Spanish classes on Saturdays.</p>',

			'so': 				'Operational Systems',
			'so_desc': 			'Work created for a course of operating systems. Consists mainly in execute scheduling algorithms '+
						        '<b>Round Robin, LTG and Interval-based Schedule</b>, in a friendly user interface '+
						        'as well as memory algorithms like '+
						        '<b>Best, Quick e Merge Fit</b>.',

			'tecnologias': 		'Technologies',
			'owl_desc': 		'App developed to offer a few services to the students of an University. Services were these: <b>map of the university, access to the messages, courses, schedules, monthly payment e push notifications</b>. Nowadays the app is unavailable, because it was a personal initiative and the university decided to develop their own app.',

			'starwars_desc': 	'Although not a long time fan of the franchise, '+
								'it\'s one of my favorites which I bought a few toys from Disney collection LoL.'+
								'When you watch an old movie and it makes you impressed about the special effects they had back in the time,'+
								'you end up putting yourself in their shoes and... trust me, that fascinated me at first sight.',

			'programar_desc': 	'If I have free time I\'ll be probably developing something or watching Netflix.',
			'netflix_desc': 	'Who doesn\'t love Netflix? Name one person.',
			'pizza_desc': 		'Pepperoni, chicken with catupiry or chocolate',
			'idiomas_desc': 	'One of the things I felt recently was that I have to learn other languages. Besides English and Spanish, I\'m catching up some French.'

		};
		
		return vm;
	}
})();