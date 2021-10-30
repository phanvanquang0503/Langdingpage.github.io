//STICKY HEADER
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// section__06
//VARIABLES FILTERS
let menuBtn = document.querySelector(".menu__filter").children;
let itemBtn = document.querySelector(".filter__item").children;
// funtion filters

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", function () {
    for (let j = 0; j < menuBtn.length; j++) {
      menuBtn[j].classList.remove("current");
    }
    this.classList.add("current");
    let targetData = this.getAttribute("data-target");
    for (let k = 0; k < itemBtn.length; k++) {
      itemBtn[k].classList.remove("active");
      itemBtn[k].classList.add("hidden");
      if (
        itemBtn[k].getAttribute("data-item") == targetData ||
        targetData == "all"
      ) {
        itemBtn[k].classList.remove("hidden");
        itemBtn[k].classList.add("active");
      }
    }
  });
}
