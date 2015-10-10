(function(){
	angular.module('knowyouApp').controller('LoginController', ['$state', '$ionicPopup', 'KyService', LoginController]);

	function LoginController($state, $ionicPopup, kyService){
		var lc = this;
		lc.doLogin = function(){
			var onSuccess = function(){
				$state.go('home');
			};

			var onError = function(){
				$ionicPopup.alert({
					title: 'Login Failed :(',
					template: 'Incorrect email or password'
				});
			};

			kyService.login(lc.email, lc.password).then(onSuccess, onError);
		}
	}
})();