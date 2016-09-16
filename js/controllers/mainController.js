(function() {
	'use strict';
	
	angular
		.module('app')
		.controller('MainController', ['UserService', 'DTOptionsBuilder', 'DTColumnBuilder', MainController]);

 function MainController(userService, DTOptionsBuilder, DTColumnBuilder) {
 	var vm = this;
 	vm.usuario = '';
 	vm.dtOptions = DTOptionsBuilder.newOptions()
 					.withOption('responsive', true)
 					.withBootstrap()
 					.withPaginationType('full_numbers');
 	vm.usuarios = {};
    vm.buscar = function() {
    	userService.buscar('', function(dados) {
    		vm.usuarios = dados;
    	});
    }
 }
})();