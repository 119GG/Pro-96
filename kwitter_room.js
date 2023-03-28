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


  
  
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

 /* function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData(); */

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}