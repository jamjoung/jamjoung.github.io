//navbar
function myFunction() {
    var x = document.getElementById("topNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }


  

 var txt = document.getElementById("textBox");
 var btn = document.getElementById("addNote");
 var ul = document.getElementById("messageLog");

 btn.onclick = function () {
 
    if (txt.value == "") {

        alert("An invisible message? Type out a note and add it to your notepad!")
    } 
    else {
        var li = document.createElement("li");

        li.innerHTML =  txt.value + "<i id='deleteBtn' class='fa-solid fa-trash-can'></i>" 
        txt.value = "";

        ul.insertBefore(li, ul.children[0]);
        var deleteMsg = document.querySelectorAll("i");

        for (var i = 0; i < deleteMsg.length; i++) {
            deleteMsg[i].onclick = function () {
                ul.removeChild(this.parentNode);
            }
        }
    }
}