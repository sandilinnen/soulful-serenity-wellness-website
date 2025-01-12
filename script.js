// Testimonial carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonial-track');
    const slides = Array.from(document.querySelectorAll('.testimonial-wrapper'));
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const dotsContainer = document.querySelector('.dots');
    
    let currentIndex = 0;
    let startX;
    let currentX;
    let isDragging = false;

    // Initialize touch events
    track.addEventListener('touchstart', dragStart);
    track.addEventListener('touchmove', drag);
    track.addEventListener('touchend', dragEnd);

    function dragStart(e) {
        isDragging = true;
        startX = e.touches[0].clientX;
        currentX = startX;
        track.style.transition = 'none';
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].clientX;
        const diff = x - startX;
        currentX = x;
        track.style.transform = `translateX(calc(-${currentIndex * 100}% + ${diff}px))`;
    }

    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;

        const threshold = 50; // minimum distance for slide change
        const diff = currentX - startX;

        track.style.transition = 'transform 0.3s ease';

        if (Math.abs(diff) > threshold) {
            if (diff > 0 && currentIndex > 0) {
                currentIndex--;
            } else if (diff < 0 && currentIndex < slides.length - 1) {
                currentIndex++;
            }
        }

        goToSlide(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
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

    // Keep existing button navigation
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
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
    let startX;
    let currentX;
    let isDragging = false;

    // Initialize touch events for gallery
    galleryTrack.addEventListener('touchstart', dragStart);
    galleryTrack.addEventListener('touchmove', drag);
    galleryTrack.addEventListener('touchend', dragEnd);

    function dragStart(e) {
        isDragging = true;
        startX = e.touches[0].clientX;
        currentX = startX;
        galleryTrack.style.transition = 'none';
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.touches[0].clientX;
        const diff = x - startX;
        currentX = x;
        galleryTrack.style.transform = `translateX(calc(-${galleryIndex * 100}% + ${diff}px))`;
    }

    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;

        const threshold = 50;
        const diff = currentX - startX;

        galleryTrack.style.transition = 'transform 0.3s ease';

        if (Math.abs(diff) > threshold) {
            if (diff > 0 && galleryIndex > 0) {
                galleryIndex--;
            } else if (diff < 0 && galleryIndex < gallerySlides.length - 1) {
                galleryIndex++;
            }
        }

        goToGallerySlide(galleryIndex);
    }

    function goToGallerySlide(index) {
        galleryIndex = index;
        galleryTrack.style.transform = `translateX(-${index * 100}%)`;
        updateGalleryDots();
    }

    function updateGalleryDots() {
        document.querySelectorAll('.gallery-dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === galleryIndex);
        });
    }

    // Create gallery dots
    gallerySlides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.classList.add('gallery-dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToGallerySlide(idx));
        galleryDots.appendChild(dot);
    });

    // Gallery navigation buttons
    if (galleryNext && galleryPrev) {
        galleryNext.addEventListener('click', () => {
            if (galleryIndex < gallerySlides.length - 1) {
                goToGallerySlide(galleryIndex + 1);
            }
        });

        galleryPrev.addEventListener('click', () => {
            if (galleryIndex > 0) {
                goToGallerySlide(galleryIndex - 1);
            }
        });
    }
});