/* Menu */
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

   /* Reveal */
  window.addEventListener("scroll", function(){
    const reveals  = document.querySelectorAll(".reveal", ".reveal__welcome")
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
  let header=document.getElementById("header")
  let sticky=header.offsetTop;
  let prevScrollpos = window.pageYOffset;
  // let topNav=window.scrollBy(0,0);
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos==sticky) {
      header.style.display="block";
      // document.getElementById("header").style.display = "block";
    } else {
      header.style.display="none";
      // document.getElementById("header").style.display = "none";
    }
    prevScrollpos = currentScrollPos; 
  }




function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}


  

