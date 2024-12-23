document.addEventListener("scroll", () => {
  const backToTopButton = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
