
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
apiKey: "AIzaSyBZnG8jfrml_v6CHGLD9a-AiaSBq_9KBdw",
authDomain: "class-test-b88dd.firebaseapp.com",
projectId: "class-test-b88dd",
storageBucket: "class-test-b88dd.appspot.com",
messagingSenderId: "370213677707",
appId: "1:370213677707:web:21c4ff9b9b2fc3115f428e"
}
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"   
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name -" + Room_name);
       row = "<div class='row_name' id="Room_names +" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";"
       document.getElementById("output").innerHTML += row;
      //End code
      });
      });
      }
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
