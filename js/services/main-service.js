(function() {
	'use strict'

	var app = angular.module('portfolio');
	app.factory('LangService', ['PTService', 'ESService', 'ENGService', 'FRService', LangService]);

	function LangService(ptService, esService, engService, frService) {

		var vm = this;
		vm.escolherServico = function(data) {
			var service = ptService;
			switch (data) {
				case 'es':
					service = esService;
					break;
				case 'en':
					service = engService;
					break;
				case 'fr':
					service = frService;
					break;
			}

			return service;
		}
		return vm;
	}

})();