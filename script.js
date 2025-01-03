// Testimonial carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonial-track');
    const slides = Array.from(document.querySelectorAll('.testimonial'));
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const dotsContainer = document.querySelector('.dots');
    
    let currentIndex = 0;

    function goToSlide(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        
        // Update dots
        document.querySelectorAll('.dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === index);
        });
    }

    // Create dots
    slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });

    // Navigation
    nextButton.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    });

    prevButton.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    });
});

// Gallery carousel functionality (if it exists in your code)
document.addEventListener('DOMContentLoaded', function() {
    const galleryTrack = document.querySelector('.gallery-track');
    if (!galleryTrack) return; // Skip if gallery doesn't exist

    const gallerySlides = Array.from(document.querySelectorAll('.gallery-item'));
    const galleryNext = document.querySelector('.gallery-next');
    const galleryPrev = document.querySelector('.gallery-prev');
    const galleryDots = document.querySelector('.gallery-dots');
    
    let galleryIndex = 0;

    // Create gallery dots
    gallerySlides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.classList.add('gallery-dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToGallerySlide(idx));
        galleryDots.appendChild(dot);
    });

    const dots = Array.from(document.querySelectorAll('.gallery-dot'));

    function updateGalleryDots() {
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === galleryIndex);
        });
    }

    function goToGallerySlide(index) {
        const offset = index * -100;
        galleryTrack.style.transform = `translateX(${offset}%)`;
        galleryIndex = index;
        updateGalleryDots();
    }

    function nextGallerySlide() {
        const nextIndex = (galleryIndex + 1) % gallerySlides.length;
        goToGallerySlide(nextIndex);
    }

    function prevGallerySlide() {
        const prevIndex = (galleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
        goToGallerySlide(prevIndex);
    }

    // Event listeners for gallery
    galleryNext.addEventListener('click', nextGallerySlide);
    galleryPrev.addEventListener('click', prevGallerySlide);
});