const navbar = document.getElementById("navbar");
const navbtn = document.querySelector("#nav-btn");
const closebtn = document.querySelector("#close-btn");
const sidebar = document.getElementById("sidebar");
const sidebarwidth = document.getElementById("sidebar");
const date = document.querySelector("#date");

// add fixed class to navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add("nav-fix");
    } else {
        navbar.classList.remove("nav-fix");
    }
});


// show sidebar 
navbtn.addEventListener("click", () => {
    sidebar.classList.add("show-sidebar");

});

// hide sidebar
closebtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");

});

// remove sidebar at width >768
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove("show-sidebar");
    }
})



// add data time

date.innerHTML = new Date().getFullYear();




