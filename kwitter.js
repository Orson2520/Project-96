function adduser()
{
    user_name  = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}

function check()
 {
     email = document.getElementById("email_id").innerHTML = "email_name";
     console.log("email");
     document.getElementById("email_id").innerHTML = email_name;
 }