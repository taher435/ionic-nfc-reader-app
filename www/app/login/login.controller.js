(function(){
	angular.module('knowyouApp').controller('LoginController', ['$state', '$ionicPopup', 'KyService', LoginController]);

	function LoginController($state, $ionicPopup, kyService){
		var lc = this;
		lc.doLogin = function(){
			var onSuccess = function(){
				console.log("login successfull");
				$state.go('home');
			};

			var onError = function(){
				console.log("login failed");
				$ionicPopup.alert({
					title: 'Login Failed :(',
					template: 'Incorrect email or password'
				});
			};

			kyService.login(lc.email, lc.password).then(onSuccess, onError);
		}
	}
})();