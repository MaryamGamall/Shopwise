/* start nav-section js */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.querySelector(".dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function myFun() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn2")) {
    var dropdowns = document.querySelector(".dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// end
// start
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn3")) {
    var dropdowns = document.querySelector(".dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function myFunction10() {
  document.getElementById("myDropdown10").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn10")) {
    var dropdowns = document.querySelector(".dropdown-content10");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function myFun11() {
  document.getElementById("myDropdown11").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn11")) {
    var dropdowns = document.querySelector(".dropdown-content11");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function myFunction12() {
  document.getElementById("myDropdown12").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn12")) {
    var dropdowns = document.querySelector(".dropdown-content12");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function myFun13() {
  document.getElementById("myDropdown13").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn13")) {
    var dropdowns = document.querySelector(".dropdown-content13");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function myFunction14() {
  document.getElementById("myDropdown14").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn14")) {
    var dropdowns = document.querySelector(".dropdown-content14");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function myFun15() {
  document.getElementById("myDropdown15").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn15")) {
    var dropdowns = document.querySelector(".dropdown-content15");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
/* end nav-section  js */
/* start slides-section  js */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.querySelectorAll(".mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000);
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.querySelectorAll(".mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
/* end slides-section  js */
/* start images-section  js */
var btn = document.querySelector(".display-right");
var btn2 = document.querySelector(".display-left");
var immgg = document.querySelector(".mySlides");
immgg.onmouseover = function () {
  btn.style.opacity = 1;
  btn2.style.opacity = 1;
};
/* end images-section  js */
