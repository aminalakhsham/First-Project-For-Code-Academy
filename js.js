window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset <= 550) {
    document.getElementsByClassName("navbar")[0].style.background = "none";
  } else {
    document.getElementsByClassName("navbar")[0].style.background = "#000";
  }
}
