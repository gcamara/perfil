(function(){ 
	'use strict'

	var app = angular.module('portfolio');

	app.factory('ESService', ESService);

	function ESService() {
		var vm = this;

		vm.textos = {
			'sobre': 			'Sobre mi',
			'projetos': 		'Proyectos',
			'certificacoes': 	'Certificaciones',
			'hobbies': 			'Hobbies',
			'subtitulo': 		'Desarrollador, Analista y videojugador..',
			'eai': 				'Hola, que tal?',
			'eai.content':		'<p>Me llamo Gabriel Câmara Carvalho, soy desarrollador de sistemas y amo logo que hago desde mis 8 años.'+
								'Yo he utilizado muchas tecnologías para desarrollar y estoy trabajo desde hace 5 años, y he creado una buena relación con todos los clientes donde he trabajado.</p>'+
								'<p>Yo he vivido en Chile por dos meses - para donde, seguramente, volveré a visitar - y donde he tenido una de las mejores experiencias de mi vida. Además la lengua latina, el país '+
								'tambien tiene muchas cosas que buenas, sitios que visitar, pero la comida no es de las mejores jeje.'+
								'</p><p>Yo he practicado muchos esportes como: Judo, Jiu-jitsu brasileño y voleibol, pero hoy en dia divido mi tiempo entre mi empleo, mi increíblemente larga graduación y además estudo francés y español todos los sabados.</p>',
								
			'skills': 			'Principales Habilidads',
			'so': 				'Sistemas Operacionales',
			'so_desc': 			'Ese trabajo yo lo he creado para una asignatura de Sistemas Operacionales. Lo que hace el trabajo es exibir y ejecutar los algoritmos de escalonamiento '+
						        '<b>Round Robin, LTG y Interval-based Schedule</b>, en una pantalla "sencilla" para el usuario '+
						        'y además ejecutar algorítmos de memoria como los '+
						        '<b>Best, Quick e Merge Fit</b>.',

			'tecnologias': 		'Tecnologías',
			'owl_desc': 		'App desarrollado para ayudar y ofrecer a los estudiantes de una universidad los siguientes servicios: <b>mapa de la universidad, acceso a los mensajes, asignaturas, horas, mensualidad e notificaiones</b>. Hoy en dia el app ya no está disponible, pues fue una iniciativa personal y la universidad has decidido crear el suyo.',

			'starwars_desc': 	'Aunque yo no sea un fan antiguo de la franquicia, '+
								'es mi favorita, incluso yo he comprado algunas muñecas de la colección de Disney.'+
								'Cuando yo he mirado las peliculas antiguas, ellas me han impresionado por sus efectos especiales que tenían aquel tiempo,'+
								'y yo me puse en una situación como si volviera en el tiempo y eso me cambió para todo siempre jaja.',

			'programar_desc': 	'Si tengo tiempo, seguro que estaré desarrollando o mirando al Netflix.',
			'netflix_desc': 	'A quién no le gusta el Netflix? Dime una sola persona.',
			'pizza_desc': 		'Pepperoni, pollo con queso o pizza de chocolate',
			'idiomas_desc': 	'Una cosa que yo he tenido ganas es de aprender nuevas lenguas, además el inglés y español yo, hoy en día, estudo francés y me parece increíble.'

		};
		
		return vm;
	}
})();