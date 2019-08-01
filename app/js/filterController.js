angular
	.module('app')
	// .filter('minLength', function() {
	// 	return function(number) {
	// 		for (var i=0; i === array.length; i++) {
	// 			if (array[i].name.length === number) {
	// 				out = array[i]
	// 			}
	// 		}

	// 		return out
	// 	}
	// });


	.controller('filterController', ['filterFilter', 'orderByFilter', function(filterFilter, orderBy) {
		$ctrl = this;

		$ctrl.names = [
			{ name : 'George', gender : 'male', age : 42 },
			{ name : 'Nick', gender : 'male', age : 28 },
			{ name : 'Mary', gender : 'female', age : 13 },
			{ name : 'Kate', gender: 'female', age : 55 },
			{ name : 'Alexander', gender : 'male', age : 9 },
			{ name : 'Margarita', gender : 'female', age : 72 }
		];

		$ctrl.filtered = filterFilter($ctrl.names, {gender:'female'});

		// var defaultNames = angular.copy($ctrl.names);

		$ctrl.propertyName = 'name';

		$ctrl.sortByName = function() {
			$ctrl.names = orderBy($ctrl.names, $ctrl.propertyName);
		};

		// $ctrl.length = 4;
		// $ctrl.filteredByLength = minLengthFilter($ctrl.length);
		// $ctrl.sorted = sortingFilter ($ctrl.names)
	}])