window.addEventListener("scroll", () => {

  let scrollTop =
    document.documentElement.scrollTop;

  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let progress =
    (scrollTop / scrollHeight) * 100;

  document.getElementById("progressBar")
    .style.width = progress + "%";

});


// FADE ANIMATION

const fadeElements =
document.querySelectorAll(".fade-up");

const observer =
new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("active");

    }

  });

},{
  threshold:0.15
});

fadeElements.forEach((element)=>{

  observer.observe(element);

});


// NAVBAR EFFECT

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{

  if(window.scrollY > 50){

    navbar.style.background =
    "rgba(5,5,5,.92)";

    navbar.style.boxShadow =
    "0 10px 30px rgba(0,0,0,.4)";

  }

  else{

    navbar.style.background =
    "rgba(10,10,10,.75)";

    navbar.style.boxShadow =
    "none";

  }

});