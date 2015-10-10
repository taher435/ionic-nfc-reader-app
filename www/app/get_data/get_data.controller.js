(function(){
	angular.module('knowyouApp').controller('GetDataController', ['$rootScope', '$scope', '$stateParams', 'NfcService', 'KyService', GetDataController]);

	function GetDataController($rootScope, $scope, $stateParams, nfcService, kyService){		
		$scope.$on('tagFound', function() {
		    $scope.requestData(arguments[1]); //TODO: a better error check here and a better way of handling arguments
		});

		$scope.serviceType = null;

		$scope.newAccount = function(){
			nfcService.init();
			$scope.serviceType = "new_account"; //TODO: Add id here
		};

		$scope.newCreditCard = function(){
			nfcService.init();
			$scope.serviceType = "new_cc"; //TODO: Add id here
		};

		$scope.newLoan = function(){
			nfcService.init();
			$scope.serviceType = "new_loan"; //TODO: Add id here
		};

		$scope.requestData = function(tag){
			alert("Requesting Data for " + $scope.serviceType + " with tag " + tag);
		};

		switch(parseInt($stateParams.type)){
			case 1: 
				$scope.title = "Bank Account";
				$scope.newAccount();
				break;
			case 2:
				$scope.title = "Loan";
				$scope.newLoan();
				break;
			case 3:
				$scope.title = "Credit Card";
				$scope.newCreditCard();
				break;
			default:
				$scope.title = "Something"
				alert("something is wrong lah");
		};


	}
})();