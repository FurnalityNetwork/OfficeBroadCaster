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
