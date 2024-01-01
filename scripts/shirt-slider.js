
(function () {
  const slides = document.querySelectorAll(".fade-slider__shirt");
  const activeClass = "fade-slider__shirt--visible";
  const lessons = document.querySelector(".circle");

  function clearList() {
    slides.forEach(slide => slide.classList.remove(activeClass));
  }

  lessons.addEventListener("click", function(event) {
    const targetClass = event.target.classList.value;
    console.log(targetClass);
    clearList();
    if (event.target.closest(".circle__black")) {
      slides[0].classList.add(activeClass);
    } else if (event.target.closest(".circle__gray")) {
      slides[1].classList.add(activeClass);
    } else if (event.target.closest(".circle__green")) {
      slides[2].classList.add(activeClass);
    } else if (event.target.closest(".circle__blue")) {
      slides[3].classList.add(activeClass);
    } else if (event.target.closest(".circle__red")) {
      console.log("Клик!");
      slides[4].classList.add(activeClass);
    }
  });
})();