var slide = ["doge1.jpg","doge2.jpg","doge3.jpg","doge4.jpg","doge5.jpg" ]
var currentSlide = 0;

function next() {
  let display = document.getElementById('display');
  currentSlide = (currentSlide + 1) % slide.length;
  display.src = slide[currentSlide];
}

function previous(){
  let display = document.getElementById('display');
  currentSlide = (currentSlide - 1) % slide.length;
  display.src = slide[currentSlide];
}
