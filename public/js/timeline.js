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
        // "https://cdn.jukelyn.com/unsafe/400x0/example.jpg"
        // const imageBaseName = item.imageSource.replace(/\.[^/.]+$/, ""); // Match, with dir, no extension
        // const imageExtension = item.imageSource.split(".").pop(); // extension
        const imageNoDir = item.imageSource.split("/").pop(); // Match, no dir, with extension
        image.src = item.imageSource
        // image.src = `https://cdn.jukelyn.com/unsafe/400x0/${imageNoDir}`;

        imageSmall = item.imageSourceSmall;
        imageMedium = item.imageSourceMedium;
        imageLarge = item.imageSourceLarge; 

        image.alt = item.title;
        image.loading = "lazy";
        image.width = 400;
        image.style.height = "auto";
        
        // Set up srcset for responsive image sources
        image.srcset = `${imageSmall} 400w, ${imageMedium} 800w, ${imageLarge} 1200w`;

        // Define sizes for different viewport widths
        image.sizes = `(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw`;

        content.appendChild(image);

        container.appendChild(content);
        timelineContainer.appendChild(container);
      });
    })
    .catch((error) => {
      console.error("Error loading timeline data:", error);
    });
});
