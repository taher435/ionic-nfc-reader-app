(function(){
	angular.module('knowyouApp').factory('KyService', ['$http', '$q', KyService]);

	function KyService($http, $q){
		var clientId = null, clientSecret = null;
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
						//TODO: Use from server once done
						clientId = 1;
						clientSecret = "sa846hghtn8874jgyth";
						deferred.resolve();
					}else{
						deferred.reject();
					}

					return deferred.promise;
				});
			},

			requestData: function(tag){
				if(clientId && clientSecret && tag && tag != ""){
					
				}
			}
		}
	}
})();
