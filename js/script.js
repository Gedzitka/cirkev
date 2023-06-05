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
   /* Menu scroll hidden */
   let header=document.getElementById("header")
   let sticky=header.offsetTop;
   let prevScrollpos = window.pageYOffset;
   window.onscroll = function() {
     let currentScrollPos = window.pageYOffset;
     if (prevScrollpos > currentScrollPos || currentScrollPos==sticky) {
       header.style.display="block";
   
     } else {
       header.style.display="none";
      
     }
     prevScrollpos = currentScrollPos; 
   }
 

   /* animation */
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
  window.addEventListener("scroll", function(){
    const reveals  = document.querySelectorAll(".reveal")
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
  window.addEventListener ("scroll",function(){
    const animation=document.querySelectorAll (".animation")
    animation.forEach(function(oneBlok){
     let windowHeight=window.innerHeight
     let animationTop=oneBlok.getBoundingClientRect().top
     const animationPoint=100
     if (animationTop<windowHeight-animationPoint){
         oneBlok.classList.add("active")
 
     }else{
         oneBlok.classList.remove("active")
 
     }
    })
 
 })
 






  

