
let hamburgerIcon = document.querySelector("#hamburger-icon");
let closeIcon = document.querySelector("#close-icon");
let navToglle = document.querySelector(".nav-toggle");

hamburgerIcon.addEventListener("click",(open)=>{

   navToglle.classList.toggle("active");


})

closeIcon.addEventListener("click", (close)=>{
     
        navToglle.classList.toggle("close");
})