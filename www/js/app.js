// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('knowyouApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    // Read NDEF formatted NFC Tags
    // nfc.addNdefListener (
    //     function (nfcEvent) {
    //         var tag = nfcEvent.tag,
    //             ndefMessage = tag.ndefMessage;

    //         // dump the raw json of the message
    //         // note: real code will need to decode
    //         // the payload from each record
    //         //alert(JSON.stringify(ndefMessage));

    //         // assuming the first record in the message has 
    //         // a payload that can be converted to a string.
    //         alert(nfc.bytesToString(ndefMessage[0].payload).substring(3));
    //     }, 
    //     function () { // success callback
    //         //alert("Waiting for NDEF tag");
    //     },
    //     function (error) { // error callback
    //         alert("Error adding NDEF listener " + JSON.stringify(error));
    //     }
    // );
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('login',{
      url: '/login',
      templateUrl: 'app/login/login.html'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html'
    });

    $urlRouterProvider.otherwise('/login');
});
