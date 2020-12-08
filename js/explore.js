let nav = document.querySelector(".nav__center");
let bottomNav = document.querySelector(".bottom__mobile__nav");
let mapFrame = document.querySelector("#map");

window.addEventListener('DOMContentLoaded', (event) => {
    scrollDetect();
});
window.addEventListener("load", (event) => {
    addIframe();
});

function scrollDetect(){
    let lastScroll = 0;

    window.addEventListener('scroll', _.throttle(callback, 300, { trailing: true, leading: true }));


    function callback() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
        
        console.log(currentScroll);

        // Top nav
        if (currentScroll > 20) {
            nav.classList.add("hide__nav");
            nav.classList.remove("show__nav");
        } else {
            nav.classList.add("show__nav");
            nav.classList.remove("hide__nav");
        }

        // Bottom nav
        if(currentScroll < lastScroll) {
            lastScroll = currentScroll;
            //console.log("Scrolling UP");
            bottomNav.classList.add("scroll-up");
            bottomNav.classList.remove("scroll-down");
        } else {
            lastScroll = currentScroll;
            //console.log("Scrolling DOWN");
            bottomNav.classList.add("scroll-down");
            bottomNav.classList.remove("scroll-up");
        }

        // if (currentScroll > 0 && lastScroll <= currentScroll){
        //     lastScroll = currentScroll;
        //     //console.log("Scrolling DOWN");
        //     nav.classList.add("hide__nav");
        //     nav.classList.remove("show__nav");
        //     bottomNav.classList.add("hide__bottom__nav");
        //     bottomNav.classList.remove("show__bottom__nav");
        // }else{
        //     lastScroll = currentScroll;
        //     //console.log("Scrolling UP");
        //     nav.classList.add("show__nav");
        //     nav.classList.remove("hide__nav");
        //     bottomNav.classList.add("show__bottom__nav");
        //     bottomNav.classList.remove("hide__bottom__nav");
        // }
    }

}

function addIframe() {
    mapFrame.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3415558.652907079!2d77.37909911729892!3d15.01010069536179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1606193713215!5m2!1sen!2sin")
}