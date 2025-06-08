window.addEventListener("scroll", () => {
  const navWrapper = document.querySelector(".nav-wrapper");
  if (window.scrollY > 50) {
    navWrapper.classList.add("scrolled");
  } else {
    navWrapper.classList.remove("scrolled");
  }
});
