function cookTofu() {
    if (document.getElementById("Tofu").src == "https://cdn.i-scmp.com/sites/default/files/styles/1920x1080/public/d8/images/2020/05/15/tofu-cover.jpg?itok=92kc2uwN") 
        {
            document.getElementById("Tofu").src = "https://www.maangchi.com/wp-content/uploads/2019/09/mapotofu.jpg";
            document.getElementById("CookButton").innerHTML = "Uncook Tofu";
        }
        else 
        {
            document.getElementById("Tofu").src = "https://cdn.i-scmp.com/sites/default/files/styles/1920x1080/public/d8/images/2020/05/15/tofu-cover.jpg?itok=92kc2uwN";
            document.getElementById("CookButton").innerHTML = "Cook Tofu";

        }


  }

function openMouth(x) {
    x.src="../img/openPop.jpg"
  }
  
  function closeMouth(x) {
    x.src="../img/closedPop.jpg"
  }

  //from midterm
  function myFunction() {
    var x = document.getElementById("topNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
