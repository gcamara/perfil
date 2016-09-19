(function() {
	'use strict'

	var app = angular.module('portfolio');

	app.controller('MainController', ['LangService', '$sce', 'lang', MainController]);

	function MainController(langService, $sce, lang) {
		var vm = this;

		trocarLingua(vm, langService, lang);
		vm.trocar = function(lang) { trocarLingua(vm, langService, lang); }
		vm.sanitize = function(html) {
			return $sce.trustAsHtml(html);
		}
		return vm;
	}


	function trocarLingua(vm, langService, lang) {
		var service = langService.escolherServico(lang);
		vm.sobre = service.textos['sobre'];
		vm.subtitulo = service.textos['subtitulo'];
		vm.projetos = service.textos['projetos'];
		vm.certificacoes = service.textos['certificacoes'];
		vm.hobbies = service.textos['hobbies'];
		vm.eai = service.textos['eai'];
		vm.eaicontent = service.textos['eai.content'];
		vm.so = service.textos['so'];
		vm.so_desc = service.textos['so_desc'];
		vm.tecnologias = service.textos['tecnologias'];
		vm.owl_desc = service.textos['owl_desc'];
		vm.starwars_desc = service.textos['starwars_desc'];
		vm.netflix_desc = service.textos['netflix_desc'];
		vm.pizza_desc = service.textos['pizza_desc'];
		vm.programar_desc = service.textos['programar_desc'];
		vm.idiomas_desc = service.textos['idiomas_desc'];
	}

})();