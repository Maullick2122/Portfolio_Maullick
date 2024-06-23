 let isScrolling;

window.addEventListener('scroll', () => {
    const slideshows = document.querySelectorAll('.slideshow');
    
    slideshows.forEach(slideshow => {
        slideshow.classList.add('paused');
    });

    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        slideshows.forEach(slideshow => {
            slideshow.classList.remove('paused');
        });
    }, 100);
});