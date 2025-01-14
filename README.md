# Timeline Site (was Xmas Project 2024)

This repository contains a timeline project that showcases events or milestones along with images. The project uses HTML, CSS, and JavaScript to create an interactive scrolling timeline with fade-in effects and image transitions.

## Project Structure

- **index.html**: The main HTML file, containing the structure for the timeline and favicon links.
- **styles.css**: The CSS file for styling the page, including the timeline, containers, and media queries for responsiveness.
- **fade.js**: JavaScript that handles the fade-in and slide-up animations for the timeline containers on scroll.
- **timeline.js**: JavaScript that handles the timeline cards, inputing the data from timelineData.json one directory level up.
- **snow.js**: JavaScript for snow effect.

## Features

- **Interactive Timeline**: A timeline with images and text that reveals new events as you scroll.
- **Generated Timeline Cards**: Timeline events are stored in a json file and the style is predefined and then populated to the main html file.
- **Responsive Design**: The timeline is fully responsive, ensuring it looks good on mobile devices as well as larger screens.
- **Fade & Transition Effects**: Timeline containers fade and slide into view when they become visible on the screen.


### Todo

- Heart theme animated background to replace snow soon
- Add footer with banner with link to github and/or code showcase
- Use image CDN for images with optimized sizes for better loading
- Prerendering + preloading images
- General optimizations
