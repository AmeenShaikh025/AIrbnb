var nav = document.querySelector(".nav__center");

window.addEventListener('DOMContentLoaded', (event) => {
    scrollDetect();
});

function scrollDetect(){
    var lastScroll = 0;

    window.onscroll = function() {
        
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
        
        if (currentScroll > 0 && lastScroll <= currentScroll){
            lastScroll = currentScroll;
            //console.log("Scrolling DOWN");
            nav.classList.add("hide__nav");
            nav.classList.remove("show__nav");
        }else{
            lastScroll = currentScroll;
            //console.log("Scrolling UP");
            nav.classList.add("show__nav");
            nav.classList.remove("hide__nav");
        }
    };
  }
  
  
