// Nav scroll 
var header = document.querySelector('#header');
window.onscroll = function () { 

    if (document.body.scrollTop >= header.offsetHeight || document.documentElement.scrollTop >= header.offsetHeight ) {
        header.classList.add("nav-colored");
        header.classList.remove("nav-transparent");
    }
    else {
        header.classList.add("nav-transparent");
        header.classList.remove("nav-colored");
    }
};