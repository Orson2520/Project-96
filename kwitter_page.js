//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send()
{
      msg =document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

