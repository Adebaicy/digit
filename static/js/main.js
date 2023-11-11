const harm = document.querySelector(".nav__harmburger");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const overly = document.querySelector(".overlay");
let mob_nav = document.querySelector(".mobile_nav");
let harmOpen = false;
let less = false;

harm.addEventListener("click", () => {
  if (!harmOpen) {
    harm.classList.add("open");
    overly.style.display = "block";
    body.classList.add("noscroll");
    harmOpen = true;
  } else {
    harm.classList.remove("open");
    overly.style.display = "none";
    body.classList.remove("noscroll");
    harmOpen = false;
  }
});



//get the links
let links = document.getElementsByClassName("nav_item");

//loop through the nav link
for (let index = 0; index < links.length; index++) {
  links[index].addEventListener("click", () => {
    console.log("clicked");
    //get the current active
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    links[index].classList.add("active");
  });
}


window.addEventListener("scroll", ()=>{
  nav.classList.toggle("active", window.scrollY > 0)
})
