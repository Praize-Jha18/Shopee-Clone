
function myFunction() {
    var x = document.getElementById("iconbtn");
    if (x.className === "button") {
      x.className += " responsive";
      var p = document.getElementById("myTopNav");
      if (p.className === "topnav") {
        p.className += " small";
        console.log("I got this");
      } else {
        p.className = "topnav";
      }

      console.log('got here')


    } else {
      x.className = "button";
      console.log('now here')
      var p = document.getElementById("myTopNav");
      if (p.className === "topnav") {
        p.className += " small";
        console.log("I got this 2");
      } else {
        p.className = "topnav";
      }
    }
  }