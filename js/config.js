(function() {
	'use strict'

	angular.module('portfolio')
	.config(['$routeProvider', configs]);

	function configs($routeProvider) {
		$routeProvider
		.when('/:lang', {
			templateUrl: 'template.html',
			controller: 'MainController',
			controllerAs: 'main',
			resolve: {
				lang: function($route) { return retornaLingua($route.current.params.lang) }
			}
		}).when('/', {
			templateUrl: 'template.html',
			controller: 'MainController',
			controllerAs: 'main',
			resolve: {
				lang: function() { return retornaLingua('pt') }
			}
		});
	}

	function retornaLingua(lingua) {
		return lingua;
	}
})();