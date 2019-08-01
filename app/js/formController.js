angular
	.module('app')
	.controller('formController', function() {
		$ctrl = this;

		$ctrl.data = {
			email : null
		};

		var initialErrors = angular.copy($ctrl.data.email);

		$ctrl.errors = {
			email : null
		};

		$ctrl.validation = function() {

			if (($ctrl.data.email == undefined) || ($ctrl.data.email == "")) {
				$ctrl.errors.email = "Field cannot be empty";
			}
			else if (!$ctrl.data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
				$ctrl.errors.email = "Whoops, make sure it's an email!";
			} 
			else {
				$ctrl.errors.email = initialErrors;
			}
		};
	})