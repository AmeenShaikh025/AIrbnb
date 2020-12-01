// Nav scroll 
let header = document.querySelector('#header');
let nav = document.querySelector(".nav__center");

window.addEventListener('DOMContentLoaded', (event) => {
    scrollDetect();
});

function scrollDetect(){
    let lastScroll = 0;


    window
    .addEventListener('scroll', _.throttle(callback, 800, { trailing: true, leading: true }));


    function callback() {

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
        
        //console.log(currentScroll);

        if (currentScroll > 0 && lastScroll <= currentScroll){
            lastScroll = currentScroll;
            //console.log("Scrolling DOWN");
            nav.classList.add("hide__nav");
            nav.classList.remove("show__nav");
        }
        else{
            lastScroll = currentScroll;
                lastScroll = currentScroll;
                nav.classList.add("show__nav");
                nav.classList.remove("hide__nav");
        }
    }

} 
