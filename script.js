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
