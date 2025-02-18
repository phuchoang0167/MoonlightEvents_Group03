document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  const totalImages = images.length;

  function showNextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      const offset = -currentIndex * 100;
      document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
  }

  setInterval(showNextImage, 3000); // Chuyển đổi hình ảnh mỗi 3 giây
});