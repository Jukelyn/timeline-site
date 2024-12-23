particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 500,
      },
    },
    color: { value: "#EF798A" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#EF798A" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#EE6352",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  retina_detect: true,
});
