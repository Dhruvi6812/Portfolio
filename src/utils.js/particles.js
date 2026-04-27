const particles = {
  background: {
    color: {
      value: "#0a192f", // matches your dark theme
    },
  },
  fpsLimit: 60,

  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab", // smoother than repulse
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 2,
      },
      grab: {
        distance: 140,
        links: {
          opacity: 0.3,
        },
      },
    },
  },

  particles: {
    color: {
      value: "#64ffda", // your accent color
    },

    links: {
      color: "#64ffda",
      distance: 120,
      enable: true,
      opacity: 0.15,
      width: 1,
    },

    collisions: {
      enable: false, // smoother movement
    },

    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: true,
      speed: 1.2, // MUCH smoother
      straight: false,
    },

    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 40, // less clutter
    },

    opacity: {
      value: 0.2, // subtle
    },

    shape: {
      type: "circle",
    },

    size: {
      value: { min: 1, max: 3 },
    },
  },

  detectRetina: true,
};

export default particles;