const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    easing: "ease-out",
  };

  ScrollReveal().reveal(".hero-img", {
    ...scrollRevealOption,
    delay: 600,
    origin: "left",
  });
  ScrollReveal().reveal(".hero-content h1", {
    ...scrollRevealOption,
    delay: 400,
  });

  ScrollReveal().reveal(".hero-content p", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".hero-content .hero-extra", {
    ...scrollRevealOption,
    delay: 700,
  });

  ScrollReveal().reveal(".hero-content .hero-btn", {
    ...scrollRevealOption,
    delay: 600,
  });


