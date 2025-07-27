
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = document.querySelector('.glass-card').offsetWidth + 24; // include gap
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 2;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 2) {
      currentIndex += 2;
      updateCarousel();
    }
  });

