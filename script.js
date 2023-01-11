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

  var counter = 1;
setInterval(function()  {
  document.getElementById('radio'+ counter).checked = true;
  counter++; 

  if(counter>4){
    counter=1
  }

}, 2000);

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
const body = document.body;
const lottiePlayer = document.querySelector("lottie-player");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    lottiePlayer.play();
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
    lottiePlayer.stop();
  }
  lastScroll = currentScroll;
});