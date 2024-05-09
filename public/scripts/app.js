const navBtnOpen = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navBtnclose = document.querySelector(".closeBtn");
const overlayBtn = document.querySelector(".overlayBtn");

// left mobile menu shopping menu Btns 
const storeBtnOpen = document.querySelector(".store-icon-open");
const storeNav = document.querySelector(".store-nav");
const overlayleft = document.querySelector(".overlay-left");
const storeBtnclose = document.querySelector(".closeBtn-left");
const overlayBtnLeft = document.querySelector(".overlayBtn-left");

function applyThemeToggle(className) {
    const toggleBtns = document.querySelectorAll(className);
    toggleBtns.forEach(toggleBtn => {
        toggleBtn.addEventListener("click", () => {
            if (localStorage.theme === "dark") {
                document.documentElement.classList.remove("dark");
                localStorage.theme = "light";
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            }
        });
    });
}

// Example usage for multiple classes
applyThemeToggle(".toggle-theme");
// Add more calls for other classes as needed

      //sub menu 

      document.addEventListener("DOMContentLoaded", function() {
        const dropdown = document.getElementById("dropdown");
        const submenu = dropdown.querySelector(".submenu");
    
        dropdown.addEventListener("click", function() {
            submenu.classList.toggle("hidden");
        });
    });
    






// nav bar icon open

navBtnOpen.addEventListener("click", function(){
    nav.classList.remove("-right-64")
    nav.classList.add("right-0")
    overlay.classList.remove("invisible")
    overlay.classList.add("visible")
})


// close mobile menu
navBtnclose.addEventListener("click", function(){
    nav.classList.remove("right-0")
    nav.classList.add("-right-64")
    overlay.classList.remove("visible")
    overlay.classList.add("invisible")
    
})



//close with click on blend mode
overlayBtn.addEventListener("click", function(){
    overlayBtn.classList.remove("visible")
    nav.classList.remove("right-0")
    nav.classList.add("-right-64")
    overlay.classList.remove("visible")
    overlay.classList.add("invisible")
})





     
// nav left store codes ********************************************************************* //


// nav bar icon open

storeBtnOpen.addEventListener("click", function(){
    storeNav.classList.remove("-left-64")
    storeNav.classList.add("left-0")
    overlayleft.classList.remove("invisible")
    overlayleft.classList.add("visible")
})


// close mobile menu
storeBtnclose.addEventListener("click", function(){
    storeNav.classList.remove("left-0")
    storeNav.classList.add("-left-64")
    overlayleft.classList.remove("visible")
    overlayleft.classList.add("invisible")
    
})



//close with click on blend mode
overlayBtnLeft.addEventListener("click", function(){
    overlayBtnLeft.classList.remove("visible")
    storeNav.classList.remove("left-0")
    storeNav.classList.add("-left-64")
    overlayleft.classList.remove("visible")
    overlayleft.classList.add("invisible")
})

// . *******************************************************************************************************//