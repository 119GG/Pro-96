//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBJqFht2FpZm5Q0nDINo9Jrsv32R17GXCA",
      authDomain: "kwitter-e956b.firebaseapp.com",
      databaseURL: "https://kwitter-e956b-default-rtdb.firebaseio.com",
      projectId: "kwitter-e956b",
      storageBucket: "kwitter-e956b.appspot.com",
      messagingSenderId: "605211873343",
      appId: "1:605211873343:web:8cf3664f6111eb4578e88a",
      measurementId: "G-2V02CNBTKH"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
