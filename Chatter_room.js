var firebaseConfig = {
    apiKey: "AIzaSyAKBVN0N4Ww5GsOoka45qh_DA6w006zkhw",
    authDomain: "chatter-app-cec23.firebaseapp.com",
    databaseURL: "https://chatter-app-cec23-default-rtdb.firebaseio.com",
    projectId: "chatter-app-cec23",
    storageBucket: "chatter-app-cec23.appspot.com",
    messagingSenderId: "39504431647",
    appId: "1:39504431647:web:d6a92c8b60e044939de32a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function logout(){
window.location="index.html";
}


