
//ADD YOUR FIREBASE LINKS
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

function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose :"adding user"
    });
}