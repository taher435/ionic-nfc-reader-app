(function(){
	angular.module('knowyouApp').factory('NfcService', ['$rootScope','$ionicPlatform', NfcService]);

	function NfcService($rootScope, $ionicPlatform){
		var initiated = false;

		function NfcHandler(nfcEvent){
			alert("Handler called");
			var tag = nfcEvent.tag;
			var ndefMessage = tag.ndefMessage;
			if(ndefMessage && ndefMessage[0]){
				$rootScope.$broadcast('tagFound', nfc.bytesToString(ndefMessage[0].payload).substring(3));
			}else{
				alert("Error reading data from NFC. Make sure its compatible.");
			}
		}

		return {
			init: function(){
				if(initiated)
					return;

				$ionicPlatform.ready(function() {
					if(typeof nfc != "undefined"){ //for browsers when testing
						initiated = true;
						//supporting only NDEF for now. What are other types of Tags? No idea right now :P
						nfc.addNdefListener(NfcHandler,function(){/*Do nothing on success*/},
							function(reason){
								alert("Error with NDEF Listener. Not sure what to do. Reason : " + reason);
							}
						);

					}else{
						alert("NFC is not defined");
					}
				});
			}
		}
	}
})();

