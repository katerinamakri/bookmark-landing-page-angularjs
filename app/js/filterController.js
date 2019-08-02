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


	.controller('filterController', ['filterFilter', function(filterFilter) {
		$ctrl = this;

		$ctrl.names = [
			{ id : 1 , name : 'George', gender : 'male', age : 42 },
			{ id : 2 , name : 'Nick', gender : 'male', age : 28 },
			{ id : 3 , name : 'Mary', gender : 'female', age : 13 },
			{ id : 4 , name : 'Kate', gender: 'female', age : 55 },
			{ id : 5 , name : 'Alexander', gender : 'male', age : 9 },
			{ id : 6 , name : 'Margarita', gender : 'female', age : 72 }
		];

		$ctrl.filtered = filterFilter($ctrl.names, {gender:'female'});

	}])