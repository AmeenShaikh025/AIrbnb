
let dropdown__country = document.querySelectorAll(".dropdown__country");
let dropdown__user = document.querySelectorAll(".dropdown__user");


document.querySelector(".dropdown__country").addEventListener("click", () => {
    document.querySelector(".dropdown__1").classList.toggle("show");
    document.querySelector(".dropdown__2").classList.remove("show");
});

document.querySelector(".dropdown__country > svg").addEventListener("click", (event) => {
    document.querySelector(".dropdown__1").classList.toggle("show");
    document.querySelector(".dropdown__2").classList.remove("show");
    event.stopPropagation();
});

document.querySelector(".dropdown__user").addEventListener("click", () => {
    document.querySelector(".dropdown__2").classList.toggle("show");
    document.querySelector(".dropdown__1").classList.remove("show");
});
document.querySelector(".dropdown__user > svg").addEventListener("click", (event) => {
    document.querySelector(".dropdown__2").classList.toggle("show");
    document.querySelector(".dropdown__1").classList.remove("show");
    event.stopPropagation();
});


window.addEventListener("click", (event) => {
    //console.log(event.target)
    if(!event.target.matches(".dropdown__button")) {
        //console.log(event.target)
        let dropdowns = document.querySelectorAll(".dropdown__content");
        for(let i =0; i< dropdowns.length; i++) {
            let openedDropdowns = dropdowns[i];
            if(openedDropdowns.classList.contains("show")) {
                openedDropdowns.classList.remove("show")
            }
        }
    }
    // document.querySelector(".dropdown__1").classList.remove("show");
    // document.querySelector(".dropdown__2").classList.remove("show");
});


