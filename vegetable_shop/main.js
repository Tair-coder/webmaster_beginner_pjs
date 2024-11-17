const arrow = document.querySelectorAll(".arrow"),
  arrowleft = document.querySelector(".arrowLeft"),
  arrowright = document.querySelector(".arrowRight"),
  instagram1Section = document.querySelector(".instagram1__section"),
  instagram2Section = document.querySelector(".instagram2__section");

arrowLeft();
arrow.forEach((item, index) => {
  item.addEventListener("click", (iem) => {
    index == 0 ? arrowLeft() : arrowRight();
  });
});

  function arrowLeft() {
  arrowleft.src = "img/arrow_left.png";
  arrowright.src = "img/arrow_right_active.png";
  instagram2Section.style.opacity = 0;
  instagram2Section.classList.remove('active')
  instagram1Section.classList.add('active')
  instagram1Section.style.opacity = 1;
}
function arrowRight() {
  arrowright.src = "img/arrow_right.png";
  arrowleft.src = "img/arrow_left_active.png";
  instagram1Section.style.opacity = 0;
  instagram1Section.classList.remove('active')
  instagram2Section.classList.add('active');
  instagram2Section.style.opacity = 1;

}
