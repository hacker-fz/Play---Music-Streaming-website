import {songs} from  '../data/songs.js';
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

/* end of animations */





function renderSongs() {
  let songsHTML = '';

  const randomSongs = songs.sort(() => 0.5 - Math.random()).slice(0, 3);

  randomSongs.forEach((song) => {
      songsHTML += `
      <div class="card-container">
        <img src="${song.image}" alt="music-card" />
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
