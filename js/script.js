document.addEventListener("DOMContentLoaded", () => {
    console.log("MiniMaisy Portfolio Style Loaded 🎀");

    // Animation dynamique d'apparition au défilement (Scroll Reveal)
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Appliquer l'animation de base sur les cartes de projets et sections
    const elementsToAnimate = document.querySelectorAll(".product-card, .circle-item, .about-container");
    
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = `all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) ${index * 0.1}s`;
        observer.observe(el);
    });
});

let currentElenaPage = 1;
  const totalElenaPages = document.querySelectorAll('.elena-page').length;

  function changeElenaPage(direction) {
    const pages = document.querySelectorAll('.elena-page');
    const counter = document.getElementById('elenaCounter');

    let nextPage = currentElenaPage + direction;

    if (nextPage >= 1 && nextPage <= totalElenaPages && nextPage !== currentElenaPage) {
      
      // ARRÊTE TOUTES LES VIDÉOS LORSQU'ON TOURNE LA PAGE
      const allVideos = document.querySelectorAll('video');
      allVideos.forEach(video => {
        video.pause();
        video.currentTime = 0;
      });

      currentElenaPage = nextPage;

      pages.forEach(page => {
        page.classList.remove('active');
        if (parseInt(page.getAttribute('data-page')) === currentElenaPage) {
          page.classList.add('active');
        }
      });

      if (counter) {
        counter.textContent = `page ${currentElenaPage} / ${totalElenaPages}`;
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.products-grid .product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons et l'ajouter au cliqué
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.index = 0;
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const nav = document.querySelector('header nav');
    const navLinks = document.querySelectorAll('header nav ul li a');

    if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            nav.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                nav.classList.remove('open');
            });
        });
    }
});