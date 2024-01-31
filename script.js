// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function pageFourAnimation() {
  var projects = document.querySelector(".featured-projects");
  var fixedImages = document.querySelector("#fixed-images");
  var project = document.querySelectorAll(".project");

  projects.addEventListener("mouseenter", function () {
    fixedImages.style.display = "block";
  });
  projects.addEventListener("mouseleave", function () {
    fixedImages.style.display = "none";
  });

  project.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      console.log(image);
      fixedImages.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperJsAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

swiperJsAnimation()
pageFourAnimation()

const menu = document.querySelector('.menu-btn');
const hamMenu = document.querySelector('.ham-menu');
const logo = document.querySelector('.logo');

var flag = 0;
menu.addEventListener('click', function(){
  if(flag == 0){
    hamMenu.style.top = 0;
    logo.style.opacity = 0;
    flag = 1;
  }else{
    hamMenu.style.top = '-100%';
    logo.style.opacity = 1;
    flag = 0 
  }
});
