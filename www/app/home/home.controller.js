(function(){
	angular.module('knowyouApp').factory('NfcService', ['$rootScope','$ionicPlatform', NfcService]);

	function NfcService($rootScope, $ionicPlatform){
		var tag = {};
		  
		$ionicPlatform.ready(function() {
			if(typeof nfc != "undefined"){ //for browsers when testing
				// nfc.addTagDiscoveredListener(function (nfcEvent) {
				//   var tag = nfcEvent.tag;
    //               alert("tag found");
				//   //$rootScope.$broadcast('tagFound', nfcEvent.tag);
				//   // $rootScope.$apply(function(){
				//   //   angular.copy(nfcEvent.tag, tag);
				//   //   // if necessary $state.go('some-route')
				//   // });
				// }, function () {
				//   //alert("Listening for tags.");
				// }, function (reason) {
				//   alert("Error adding NFC Listener " + reason);
				// });

				nfc.addNdefListener(function(nfcEvent){
					var tag = nfcEvent.tag;
					var ndefMessage = tag.ndefMessage;
					if(ndefMessage && ndefMessage[0]){
						$rootScope.$broadcast('tagFound', nfc.bytesToString(ndefMessage[0].payload).substring(3));
					}else{
						alert("Error reading data from NFC. Make sure its compatible.");
					}
				},function(){

				}, function(reason){});

				// nfc.addMimeTypeListener('', function (nfcEvent) {
				// 	var tag = nfcEvent.tag;
				// 	var ndefMessage = tag.ndefMessage;
				// 	if(ndefMessage && ndefMessage[0]){
				// 		$rootScope.$broadcast('tagFound', nfc.bytesToString(ndefMessage[0].payload).substring(3));
				// 	}else{
				// 		alert("Error reading data from NFC. Make sure its compatible.");
				// 	}
					
				// });
			}else{
				alert("NFC is not defined");
			}
		});

		return {
			tag: tag,
			clearTag: function () {
			  angular.copy({}, this.tag);
			}
		};
	}

	angular.module('knowyouApp').controller('HomeController', ['$rootScope', '$scope', 'NfcService', HomeController]);

	function HomeController($rootScope, $scope, nfcService) {
	  $scope.tag = nfcService.tag;
	  $scope.clear = function() {
	    nfcService.clearTag();
	  };

	  $rootScope.$on('tagFound', function() {
	  	  //debugger;
	      alert(arguments[1]); //TODO: a better error check here.
	  });
	}
})();

