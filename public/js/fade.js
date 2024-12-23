function handleScroll() {
  const containers = document.querySelectorAll(".timeline .container");
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  containers.forEach((container, index) => {
    const rect = container.getBoundingClientRect();

    // Calculate the visible portion of the container
    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(windowHeight, rect.bottom);
    const visibleHeight = visibleBottom - visibleTop;

    // Determine visibility thresholds
    const threshold = container.offsetHeight * 0.25; // At least 25% should be visible
    const isFullyVisible = visibleHeight >= threshold;

    if (isFullyVisible) {
      container.classList.add("visible");
      container.classList.remove("transitioning");
    } else if (visibleHeight > 0) {
      container.classList.add("transitioning");
      container.classList.remove("visible");
    } else {
      container.classList.remove("visible", "transitioning");
    }
  });
}

function initializeVisibility() {
  const firstContainer = document.querySelector(".timeline .container");
  if (firstContainer) {
    firstContainer.classList.add("visible");
  }
}

// Initialize visibility on page load and attach the scroll event listener
document.addEventListener("DOMContentLoaded", () => {
  initializeVisibility();
  handleScroll(); // Ensure the last container is handled on load
});
document.addEventListener("scroll", handleScroll);
