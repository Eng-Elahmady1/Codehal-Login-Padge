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
let loginField = $(".login-field");
let registerField = $(".register-field");

let loginLink = $(".login-link");
let registerLink = $(".register-link");


$(document).ready(function(){
    registerLink.on("click",function(){
        loginField.addClass("-translate-x-full opacity-0");
        registerField.removeClass("translate-x-full opacity-0");
    });
    loginLink.on("click",function(){{
        registerField.addClass("translate-x-full opacity-0");
        loginField.removeClass("-translate-x-full opacity-0");
    }});
});