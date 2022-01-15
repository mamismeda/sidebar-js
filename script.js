let leftBar = document.querySelector(".side");
let movingBar = document.querySelector(".slide-back");

leftBar.addEventListener("click", function(el){

    movingBar.classList.toggle("slide-back");
})

let burgerIcon = document.querySelector(".butty");

burgerIcon.addEventListener("click", function(element){
   
    
    burgerIcon.classList.toggle("fa-times");
})

