let lastScrollY = window.scrollY;
const $header = document.querySelector('.header');
const headerHeight = $header.offsetHeight;

document.body.style.paddingTop = headerHeight + 'px';

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
        $header.style.transform = 'translateY(-100%)';
    } else if (currentScrollY < lastScrollY) {
        $header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
});


window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        $header.style.transform = 'translateY(0)';
    }
});

document.addEventListener('DOMContentLoaded', () => {
  // Initialisation des icônes
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Menu Mobile
  const menuBtn = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Fermeture du menu au clic sur un lien
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }
});