document.addEventListener('DOMContentLoaded', function() {
  const galleryTrack = document.querySelector('.gallery-track');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const prevButton = document.querySelector('.gallery-prev');
  const nextButton = document.querySelector('.gallery-next');
  const dotsContainer = document.querySelector('.gallery-dots');
  
  let currentGalleryIndex = 0;
  
  // Create dots
  galleryItems.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('gallery-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  function updateGallery() {
    // Calculate the slide position based on item width (400px) plus margins (80px total)
    const slideWidth = 480; // 400px + 80px margins
    const offset = currentGalleryIndex * -slideWidth;
    galleryTrack.style.transform = `translateX(${offset}px)`; // Use pixels instead of percentage
    
    // Update active dot
    document.querySelectorAll('.gallery-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentGalleryIndex);
    });
  }
  
  function goToSlide(index) {
    currentGalleryIndex = index;
    updateGallery();
  }
  
  function nextSlide() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
    updateGallery();
  }
  
  function prevSlide() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
    updateGallery();
  }
  
  // Event listeners
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  
  // Auto advance
  let interval = setInterval(nextSlide, 5000);
  
  // Pause on hover
  galleryTrack.addEventListener('mouseenter', () => clearInterval(interval));
  galleryTrack.addEventListener('mouseleave', () => interval = setInterval(nextSlide, 5000));
});