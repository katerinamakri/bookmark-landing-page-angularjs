angular
	.module('app')
	.filter ('format', ['$filter', function($filter) {
		return function(value, type) {
			var result = value;
			switch (type) {
				case 'uppercase':
						result = $filter('uppercase')(value);
					break;

			}
			return result;
		}
	}])
	.filter('sort', ['$filter', function($filter) {
		return function(value, type) {
			var result = value;
			switch (type) {
				case 'asc':
						result = $filter('orderBy')(value, '+');
					break;
				case 'desc':
						result = $filter('orderBy')(value, '-');
					break;	
			}
			return result;
		}
	}])