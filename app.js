

function navslide(){
  const nav = document.querySelector(".navbar");
  const menu = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");


  burger.addEventListener("click",()=>{
    menu.classList.toggle("nav-active");
    burger.classList.toggle("toggle")
  });

}
navslide();

let header=document.querySelectorAll(".header");

for (let i=0; i<header.length; i++){
  header[i].addEventListener("click",function(){
    let ddd=this.nextElementSibling;
    ddd.classList.toggle("active");
    if(this.firstElementChild.innerText==='+'){
      this.firstElementChild.innerText="-"
    }
    else{
      this.firstElementChild.innerText="+"
    }
  })

  
}