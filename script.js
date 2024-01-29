// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var projects = document.querySelector('.featured-projects');
var fixedImages = document.querySelector('#fixed-images');
var project = document.querySelectorAll('.project') 


projects.addEventListener('mouseenter', function(){
    fixedImages.style.display = "block";
});
projects.addEventListener('mouseleave', function(){
    fixedImages.style.display = "none";
});


project.forEach(function(e){
    e.addEventListener('mouseenter', function(){
        var image = e.getAttribute('data-image');
        console.log(image)
        fixedImages.style.backgroundImage = `url(${image})`;
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


