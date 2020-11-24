// Nav scroll 
var header = document.querySelector('#header');
var nav = document.querySelector(".nav__center");

window.addEventListener('DOMContentLoaded', (event) => {
    scrollDetect();
});

function scrollDetect(){

    var lastScroll = 0;

    window.onscroll = function() {


        // Menu Bar
        if (document.body.scrollTop >= header.offsetHeight || document.documentElement.scrollTop >= header.offsetHeight ) {
            header.classList.add("nav-colored");
            header.classList.remove("nav-transparent");
        }
        else {
            header.classList.add("nav-transparent");
            header.classList.remove("nav-colored");
        }
        // Menu Bar
        
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


