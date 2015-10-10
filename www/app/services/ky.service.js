(function(){
	angular.module('knowyouApp').factory('KyService', ['$http', '$q', KyService]);

	function KyService($http, $q){
		return{
			login: function(email, password){
				var request = {
					method: 'GET', //Should be POST here :)
					url : 'http://ipinfo.io/json',
					data: {}
				};

				return $http(request).then(function(response){
					var deferred = $q.defer();
					var result = true;
					if(result){
						//All Ok
						deferred.resolve();
					}else{
						deferred.reject();
					}

					return deferred.promise;
				});

				// //DUMMY, until API is ready
				// var deferred = $q.defer();
				// if(email == "taher435@gmail.com" && password == "123456"){
				// 	deferred.resolve();
				// }else{
				// 	deferred.reject();
				// }
			}
		}
	}
})();
