import {songs} from  '../data/songs.js';





function renderSongs() {
  let songsHTML = '';

  const randomSongs = songs.sort(() => 0.5 - Math.random()).slice(0, 3);

  randomSongs.forEach((song) => {
      songsHTML += `
      <div class="card-container">
        <div class="card-image">
         <img src="${song.image}" alt="${song.title}">
         <img src="Icons/cards-play-btn.svg" class="playbtn icon">
        </div>
        <div class="card-content">
          <h2>${song.name}</h2>
          <p>${song.artist}</p>
          <div class="listener">
            <p><span><i class="ri-headphone-fill"></i></span>${song.listeners} Listens</p>
          </div>
        </div>
      </div>
      `;
  });

  document.querySelector('.tracks-container').innerHTML = songsHTML;
}

renderSongs();

const cards = document.querySelectorAll(".card-container");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const angle = Math.atan2(-x, y);
    card.style.setProperty("--rotation", angle + "rad");
  });
});

const playlists = document.querySelectorAll('.playlist')


/* swiper */

var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  initialSlide: 2,
  speed: 800,
  coverflowEffect: {
    rotate: 0,
    stretch: 90,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20, 
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
      modifier: 3,
    },
  },
});



/* Animations */

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
ScrollReveal().reveal(".hero-content h1, .second-content h1, .library-content h1", {
  ...scrollRevealOption,
  delay: 400,
});


ScrollReveal().reveal(".hero-content p, .second-content p, .library-content p", {
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
ScrollReveal().reveal(".card-container, .slider-container", {
  ...scrollRevealOption,
  delay: 600,
  scale: 0.7,
});

/* end of animations */
