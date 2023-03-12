// Navabr = document.getElementById("navbar");

// window.onscroll = function () {
//   Navabr.style.backgroundColor = "white";
// };

let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 300
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function changeBG() {
  document.getElementsByClassName(".get").style.backgroundColor = "blue";
}
function returnBG() {
  document.getElementsByClassName(".get").style.backgroundColor = "#f53838";
}

// const menuToggle = document.querySelector(".menu-toggle");
// const nav = document.querySelector("#navbar nav");

// menuToggle.addEventListener("click", function () {
//   menuToggle.classList.toggle("open");
//   nav.classList.toggle("open");
// });


// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('nav');

// menuToggle.addEventListener('click', function() {
//   this.classList.toggle('open');
//   nav.classList.toggle('open');
// });
