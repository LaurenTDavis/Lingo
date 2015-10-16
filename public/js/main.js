angular.module('lingoApp', []);

angular.module('lingoApp').controller('translateController',['$scope', '$http', function($scope, $http) {
	

	$scope.translateSubmit = function() {
		

		$http({
			method 	: 'POST',
			url		: '/',
			data 	: $scope.translateData
		}).then(function(returnData){
			$scope.translation = returnData.data
		})
	}


}]);

angular.module('lingoApp').controller('quizController',['$scope', '$http', function($scope, $http) {



}]);