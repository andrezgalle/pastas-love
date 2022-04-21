const navToggle = document.querySelector(".nav-toggle");
const body = document.querySelector("body");
const navMenu = document.querySelector(".nav-menu");


navToggle.addEventListener("click",()=>{
    if(navMenu.classList.contains("nav-menu_visible")){
        navMenu.classList.remove("nav-menu_visible");
        body.style.overflow = "auto"
    }else{
        navMenu.classList.add("nav-menu_visible");
        body.style.overflow = "hidden"
    }
})