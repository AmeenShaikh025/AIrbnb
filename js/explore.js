var nav = document.querySelectorAll(".nav__center");

window.addEventListener('DOMContentLoaded', (event) => {
    scrollDetect(nav);
});

function scrollDetect(nav){
    var lastScroll = 0;

    window.onscroll = function() {
        
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
        
        if (currentScroll > 0 && lastScroll <= currentScroll){
            lastScroll = currentScroll;
            //console.log("Scrolling DOWN");
            nav[0].classList.add("hide__nav");
            nav[0].classList.remove("show__nav");
        }else{
            lastScroll = currentScroll;
            //console.log("Scrolling UP");
            nav[0].classList.add("show__nav");
            nav[0].classList.remove("hide__nav");
        }
    };
  }
  
  
