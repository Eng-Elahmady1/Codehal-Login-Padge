// JavaScript Code
// const inputField = document.querySelector(".input-field");
// const loginLink = document.querySelector(".login-link");
// const registerLink = document.querySelector(".register-link");


// registerLink.addEventListener("click", () =>{
//     inputField.classList.add("active");
// });
// loginLink.addEventListener("click", () =>{
//     inputField.classList.remove("active");
// });


// Jquery Code 
let inputField = $(".input-field");
let loginLink = $(".login-link");
let registerLink = $(".register-link");


$(document).ready(function(){
    registerLink.on("click",function(){
        inputField.addClass("active");
    });
    loginLink.on("click",function(){{
        inputField.removeClass("active");
    }});
});