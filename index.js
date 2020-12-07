const btn = document.querySelector(".hamburger");
const body = document.getElementById("body");
const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("nav-btn");
const desktopSize = window.matchMedia("(min-width: 748px)");

desktopSize.addEventListener("change", () => {
  if (desktopSize.matches) {
    body.classList.remove("full-height");
    navbar.classList.remove("full-height");
    btn.classList.remove("is-active");
    navBtn.classList.remove("btn-dark");
    navBtn.classList.add("btn-light");
  }
});

btn.addEventListener("click", () => {
  window.scroll(0, 0);
  if (btn.classList.contains("is-active")) {
    body.classList.remove("full-height");
    navbar.classList.remove("full-height");
    btn.classList.remove("is-active");
    navBtn.classList.remove("btn-dark");
    navBtn.classList.add("btn-light");
  } else {
    body.classList.add("full-height");
    navbar.classList.add("full-height");
    btn.classList.add("is-active");
    navBtn.classList.remove("btn-light");
    navBtn.classList.add("btn-dark");
  }
});
