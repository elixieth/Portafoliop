document.addEventListener("DOMContentLoaded", () => {

  /* ======================= */
  /* ESTRELLAS */
  /* ======================= */

  const starsContainer =
  document.querySelector('.stars');

  if(starsContainer){

    for(let i = 0; i < 120; i++){

      const star =
      document.createElement('div');

      star.classList.add('star');

      star.style.top =
      Math.random() * 100 + '%';

      star.style.left =
      Math.random() * 100 + '%';

      star.style.animationDuration =
      (Math.random() * 3 + 2) + 's';

      starsContainer.appendChild(star);
    }

  }

  /* ======================= */
  /* LOADER */
  /* ======================= */

  window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(loader){

      setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

          loader.style.display = "none";

        },1000)

      },3000)

    }

  })

  /* ======================= */
  /* CURSOR */
  /* ======================= */

  const cursor =
  document.querySelector(".cursor");

  if(cursor){

    document.addEventListener("mousemove",(e)=>{

      cursor.style.left =
      e.clientX + "px";

      cursor.style.top =
      e.clientY + "px";

    })

  }

  /* ======================= */
  /* MUSIC */
  /* ======================= */

  const music =
  document.getElementById("bgMusic");

  const musicBtn =
  document.getElementById("musicBtn");

  let playing = false;

  if(music && musicBtn){

    musicBtn.addEventListener("click",()=>{

      if(!playing){

        music.play();

        musicBtn.innerHTML = "❚❚";

        playing = true;

      }else{

        music.pause();

        musicBtn.innerHTML = "♫";

        playing = false;
      }

    })

  }

  /* ======================= */
  /* HOVER SOUND */
  /* ======================= */

  const hoverSound =
  document.getElementById("hoverSound");

  const cards =
  document.querySelectorAll(
  ".project-card, .ability-card");

  if(hoverSound){

    cards.forEach(card=>{

      card.addEventListener("mouseenter",()=>{

        hoverSound.currentTime = 0;

        hoverSound.play();

      })

    })

  }

  /* ======================= */
  /* PARTICLES */
  /* ======================= */

  const particles =
  document.querySelector(".particles");

  if(particles){

    for(let i = 0; i < 80; i++){

      const p =
      document.createElement("div");

      p.classList.add("particle");

      p.style.left =
      Math.random() * 100 + "%";

      p.style.animationDuration =
      Math.random() * 10 + 5 + "s";

      p.style.opacity =
      Math.random();

      particles.appendChild(p);
    }

  }

  /* ======================= */
  /* SCROLL ANIMATION */
  /* ======================= */

  const hiddenElements =
  document.querySelectorAll(
  ".project-card, .ability-card");

  if(hiddenElements.length > 0){

    const observer =
    new IntersectionObserver((entries)=>{

      entries.forEach(entry=>{

        if(entry.isIntersecting){

          entry.target.classList.add("show");

        }

      })

    })

    hiddenElements.forEach(el=>{

      el.classList.add("hidden");

      observer.observe(el);

    })

  }

});
/* ======================= */
/* CAROUSEL LOGIC */
/* ======================= */

// Objeto para guardar en qué imagen va cada carrusel
const carouselStates = {
  'track-1': 0,
  'track-2': 0,
  'track-3': 0
};

window.moveSlide = function(trackId, direction) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const images = track.querySelectorAll('img');
  const totalImages = images.length;
  
  // Actualizar el estado
  carouselStates[trackId] += direction;

  // Hacer que sea un bucle (si pasa de la última, vuelve a la primera y viceversa)
  if (carouselStates[trackId] >= totalImages) {
    carouselStates[trackId] = 0;
  } else if (carouselStates[trackId] < 0) {
    carouselStates[trackId] = totalImages - 1;
  }

  // Mover el contenedor
  const movePercentage = -(carouselStates[trackId] * 100);
  track.style.transform = `translateX(${movePercentage}%)`;
};