document.getElementById('next').addEventListener('click', () => {
    // Move the first card to the end
    const carousel = document.getElementById('carousel');
    carousel.appendChild(carousel.children[0]);
  });
  
  document.getElementById('prev').addEventListener('click', () => {
    // Move the last card to the beginning
    const carousel = document.getElementById('carousel');
    carousel.prepend(carousel.children[carousel.children.length - 1]);
  });