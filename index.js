let lastScroll = 0;

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-60px";
  }
  lastScroll = window.scrollY;
});
