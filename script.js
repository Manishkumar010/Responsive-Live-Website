let menu = document.querySelector("#navbar-click");
let menuItems = document.querySelector("#come-out");

let close = document.querySelector("#close-icon");

menu.addEventListener("click",function(){
    menuItems.style.display = "block";
    close.style.display = "block";
    menu.style.display = "none"
});
close.addEventListener("click",function(){
    menuItems.style.display = "none";
    close.style.display = "none";
    menu.style.display = "block"
})