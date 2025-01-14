document.addEventListener("DOMContentLoaded", () => {
  fetch("../timelineData.json")
    .then((response) => response.json())
    .then((data) => {
      const timelineContainer = document.querySelector(".timeline");

      data.forEach((item, index) => {
        const container = document.createElement("div");
        container.classList.add("container");
        if (index % 2 === 0) {
          container.classList.add("left");
        } else {
          container.classList.add("right");
        }

        if (index === 0) {
          container.classList.add("visible");
        }

        if (index === 1) {
          container.classList.add("transitioning");
        }
        
        if (index === data.length - 1) {
          container.classList.add("last_container");
          container.id = "last_container";
        }

        const content = document.createElement("div");
        content.classList.add("content");

        const title = document.createElement("h2");
        title.textContent = item.title;
        content.appendChild(title);

        const dateDescription = document.createElement("p");
        dateDescription.textContent = `${item.date}: ${item.description}`;
        content.appendChild(dateDescription);

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.title;
        image.loading = "lazy";
        image.width = 400;
        image.style.height = "auto";

        content.appendChild(image);

        container.appendChild(content);
        timelineContainer.appendChild(container);
      });
    })
    .catch((error) => {
      console.error("Error loading timeline data:", error);
    });
});
