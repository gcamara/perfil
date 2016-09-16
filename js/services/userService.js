(function() {
	'use strict';

	angular
	.module('app')
	.factory('UserService', ['$resource', UserService]);

	function UserService(resource) {
		var service = this;
		service.buscar = function(name, callback) {
			var res = resource('/users/:user', {user: "@user"});
			if (name)
				return res.get({user: name}, callback);
			else
				return res.query({}, callback);
		}
		return service;
	}
})();