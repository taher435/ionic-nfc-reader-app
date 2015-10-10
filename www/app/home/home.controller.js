(function(){
	angular.module('knowyouApp').controller('HomeController', ['$scope', '$state', 'KyService', HomeController]);

	function HomeController($scope, $state, kyService) {
	  $scope.state = $state;
	}
})();

