const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var projects = document.querySelector('.featured-projects');
var fixedImages = document.querySelector('#fixed-images');


projects.addEventListener('mouseenter', function(){
    fixedImages.style.display = "block";
})
projects.addEventListener('mouseleave', function(){
    fixedImages.style.display = "none";
})