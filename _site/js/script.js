// nav menu
const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__nav-menu");
hamburger.addEventListener("click",function (){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", function (){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

//   var counter = 1;
// setInterval(function()  {
//   document.getElementById('radio'+ counter).checked = true;
//   counter++; 

//   if(counter>4){
//     counter=1
//   }

// }, 2000);

window.addEventListener("scroll", function(){
  const reveals  = document.querySelectorAll(".reveal")
  // const reveals = [div1, div2]


      reveals.forEach(function(oneBlok){
          let windowHeight = window.innerHeight
          let revealTop = oneBlok.getBoundingClientRect().top
          const revealPoint = 50
   
          if (revealTop < windowHeight - revealPoint) {
              oneBlok.classList.add("active")
          } else {
              oneBlok.classList.remove("active")
          }
  
     
  })

})


function scrollWin(x, y) {
  window.scrollBy(x, y);
}
$(function(){
  $(".wednesday__time").show(2000);


}
)

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}