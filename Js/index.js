window.addEventListener("scroll",()=>{
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", scrollY>0)
})

let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let ico_hamburguer = true;

function toggleHamburguer() {
    enlaces_header.classList.toggle("hamburgueropen");
}

// Seleccionar todos los elementos por su clase
let house = document.querySelector(".fa-house");
let html5 = document.querySelector(".fa-html5");
let css3 = document.querySelector(".fa-css3-alt");
let javas = document.querySelector(".fa-fire");
let parc = document.querySelector(".fa-book-open-reader");
let user = document.querySelector(".fa-user");

// Agregar evento de clic a cada elemento
house.addEventListener("click", toggleHamburguer);
html5.addEventListener("click", toggleHamburguer);
css3.addEventListener("click", toggleHamburguer);
javas.addEventListener("click", toggleHamburguer);
parc.addEventListener("click", toggleHamburguer);
user.addEventListener("click", toggleHamburguer);


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



user.addEventListener("click",()=>{
    ico_hamburguer=true;
    main.style.display="";
})

document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function(){
    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(".hamburgueri")[0].style.color = "#000";
})