// Nav scroll 
let header = document.querySelector('#header');
let nav = document.querySelector(".nav__center");
let bottomNav = document.querySelector(".bottom__mobile__nav");

window.addEventListener('DOMContentLoaded', (event) => {
    scrollDetect();
});

function scrollDetect(){
    let lastScroll = 0, scrolledDistance = 0;

    window
    .addEventListener('scroll', _.throttle(callback, 300, { trailing: true, leading: true }));

    function callback() {

        // Menu Bar background color
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
        
        //let bottomScroll = document.documentElement.scrollHeight - window.innerHeight + currentScroll;

        // Top nav
        if (currentScroll > 20) {
            nav.classList.add("hide__nav");
            nav.classList.remove("show__nav");
        } else {
            nav.classList.add("show__nav");
            nav.classList.remove("hide__nav");
        }

        scrolledDistance = lastScroll-currentScroll;

        // Bottom nav
        if(currentScroll < lastScroll) {
            lastScroll = currentScroll;
            //console.log("Scrolling UP");
            if(scrolledDistance <= 6) {
                bottomNav.style.transform = "translateY(0)"
            }
            // else {
            //     bottomNav.style.transform = "translateY(100px)"
            // }
        }
        else {
            lastScroll = currentScroll;
            //console.log("Scrolling DOWN");
            if(scrolledDistance >= -6) {
                //console.log(scrolledDistance);
                bottomNav.style.transform = "translateY(100px)"
            }
            // else {
            //     bottomNav.style.transform = "translateY(0)"
            // }
        }
    }

} 
