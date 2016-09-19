(function(){ 
	'use strict'

	var app = angular.module('portfolio');
	app.service('PTService', PTService);

	function PTService() {
		var vm = this;
		vm.textos = {
			'sobre': 			'Sobre Mim',
			'projetos': 		'Projetos',
			'certificacoes': 	'Certificações',
			'hobbies': 			'Hobbies',
			'subtitulo': 		'Desenvolvedor, Analista e gamer..',
			'eai': 				'E aí?',
			'eai.content':		'<p>Sou Gabriel Câmara Carvalho, desenvolvedor desde os 8 anos e apaixonado pelo que faz. '+
								'Já desenvolvi em várias tecnologias e estou no mercado há cerca de 5 anos, tendo deixado um bom legado com os clientes que trabalhei.</p>'+
								'<p>Morei por dois meses no Chile - pra onde com certeza voltarei para visitar - e foi uma das melhores experiências que já tive. Além da língua, o país'+
								'tem muita coisa massa, muitos lugares pra visitar, só a comida que não é das melhores.'+
								'</p><p>Já pratiquei vários esportes, como: Judô, Jiu-jitsu e vôlei e hoje divido meu tempo entre trabalho, graduação e curso de francês e espanhol aos sábados.</p>',

			'so': 				'Sistemas Operacionais',
			'so_desc': 			'Trabalho criado para uma disciplina de sistemas operacionais. Consiste em executar algorítmos de escalonamento '+
						        '<b>Round Robin, LTG e Interval-based Schedule</b>, '+
						        'bem como exemplificar os algorítmos de memória '+
						        '<b>Best, Quick e Merge Fit</b>.',

			'tecnologias': 		'Tecnologias',
			'owl_desc': 		'Aplicativo desenvolvido para oferecer serviços aos alunos de uma universidade. Dentre eles: <b>mapa da universidade, acesso às mensagens, disciplinas, horários, cálculo de semestralidade e notificações</b>. Atualmente o aplicativo está fora do ar, pois era uma iniciativa pessoal e a universidade optou por desenvolver um próprio.',

			'starwars_desc': 	'Apesar de acompanhar a saga há pouco tempo, '+
								'é uma das minhas preferidas, tendo inclusive comprado alguns bonecos da coleção.'+
								'Quando você assiste a um filme antigo e se impressiona com os efeitos especiais da época,'+
								'você acaba se colocando na posição de quem estava assistindo à epoca e... acreditem, isso me fascinou na franquia.',

			'programar_desc': 	'Se eu tiver um tempo livre, ou estarei programando ou vendo netflix.',
			'netflix_desc': 	'Quem não?',
			'pizza_desc': 		'De pepperoni, frango c/ catupiry ou chocolate',
			'idiomas_desc': 	'Uma das coisas que descobri recentemente foi o gosto por aprender novas linguas. Além de Inglês e Espanhol, agora o desafio é o Francês.'

		};

		return vm;
	}
})();