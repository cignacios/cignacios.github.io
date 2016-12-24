


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDTtAanCAZCj8s2m0OcjXrTsXGwR7vYI9M",
    authDomain: "test-1-f53b7.firebaseapp.com",
    databaseURL: "https://test-1-f53b7.firebaseio.com",
    storageBucket: "test-1-f53b7.appspot.com",
    messagingSenderId: "791534646161"
  };
  firebase.initializeApp(config);
var base = firebase.database().ref();

base.on('value',function(snapshot){
	alert(snapshot.val());
});