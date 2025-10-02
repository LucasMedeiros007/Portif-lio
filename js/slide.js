function enableDragSlide() {
  const slide = document.querySelector('.trabalhos');
  if (!slide) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse events
  slide.addEventListener('mousedown', (e) => {
    isDown = true;
    slide.classList.add('active');
    startX = e.pageX - slide.offsetLeft;
    scrollLeft = slide.scrollLeft;
  });
  slide.addEventListener('mouseleave', () => {
    isDown = false;
    slide.classList.remove('active');
  });
  slide.addEventListener('mouseup', () => {
    isDown = false;
    slide.classList.remove('active');
  });
  slide.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slide.offsetLeft;
    const walk = (x - startX) * 2;
    slide.scrollLeft = scrollLeft - walk;
  });

  // Touch events
  slide.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slide.offsetLeft;
    scrollLeft = slide.scrollLeft;
  });
  slide.addEventListener('touchend', () => {
    isDown = false;
  });
  slide.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - slide.offsetLeft;
    const walk = (x - startX) * 2;
    slide.scrollLeft = scrollLeft - walk;
  });
}

// Ativa o slide apenas em telas <= 820px
function checkSlideResponsive() {
  if (window.innerWidth <= 820) {
    enableDragSlide();
  }
}

window.addEventListener('DOMContentLoaded', checkSlideResponsive);
window.addEventListener('resize', checkSlideResponsive);
