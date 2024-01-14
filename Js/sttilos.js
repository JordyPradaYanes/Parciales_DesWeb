window.addEventListener("scroll",()=>{
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", scrollY>0)
})

let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let ico_hamburguer = true;

document.querySelectorAll(".hamburgueri")[0].addEventListener("click", function(){
    if(ico_hamburguer){
        document.querySelectorAll(".hamburgueri")[0].style.color="#312BD9";
        ico_hamburguer = false;
    } 
    else {
        document.querySelectorAll(".hamburgueri")[0].style.color="#000";
        ico_hamburguer = true;
    }

    enlaces_header.classList.toggle("hamburgueropen");

})

document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function(){
    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(".hamburgueri")[0].style.color = "#000";
})