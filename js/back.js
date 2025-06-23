document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.slideshow-container img');
    let currentIndex = 0;

    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    // Start slideshow
    setInterval(nextSlide, 3000); // Change image every 3 seconds
});
//=============== CAROUSEL ===============//
document.querySelectorAll('.carousel').forEach(carousel => {
    const prevButton = carousel.querySelector('.carousel-prev');
    const nextButton = carousel.querySelector('.carousel-next');
    const carouselImages = carousel.querySelector('.carousel-images');
    const images = carouselImages.querySelectorAll('img');
    let currentIndex = 0;
    const slideInterval = 5000; // Auto-slide interval in milliseconds (5 seconds)
    let intervalId;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    // Start auto-slide
    function startAutoSlide() {
        intervalId = setInterval(nextSlide, slideInterval);
    }

    // Stop auto-slide
    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    // Initialize carousel
    updateCarousel();
    startAutoSlide();

    // Add event listeners for manual slide control
    nextButton.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide(); // Stop auto-slide on manual interaction
        startAutoSlide(); // Restart auto-slide
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide(); // Stop auto-slide on manual interaction
        startAutoSlide(); // Restart auto-slide
    });

    // Optional: Restart auto-slide on mouse hover
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
});
