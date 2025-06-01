// particles.js
tsParticles.load("tsparticles", {
  background: {
    color: { value: "black" }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: { value: "#ff6347" },
    shape: { type: "circle" },
    opacity: { value: 0.7 },
    size: { value: { min: 1, max: 5 } },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outMode: "bounce"
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ff6347",
      opacity: 0.4,
      width: 1
    }
  },
  detectRetina: true
});
