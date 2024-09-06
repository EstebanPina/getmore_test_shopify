
let currentImageIndex = 0;
let images;
let slideshow;

function calculateImageWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 749) {
    return window.innerWidth * 0.35; // 35% del ancho de la ventana
  } else {
    return window.innerWidth; // 100% del ancho de la ventana
  }
}

function showImage(index) {
  const imageWidth = calculateImageWidth(); // Calcula el ancho actual
  const scrollPosition = index * imageWidth;
  console.log(index)
  console.log(scrollPosition)
  console.log(imageWidth)
  if (slideshow) {
    console.log("hay scroll se supone")
    slideshow.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
}

function nextImage() {
  
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

document.addEventListener('DOMContentLoaded', function() {
  slideshow = document.getElementById('slideshow');
  images = document.querySelectorAll('#slideshow img');
  showImage(currentImageIndex); // Muestra la primera imagen inicialmente

  // Agrega un controlador para el evento de cambio de tamaño
  window.addEventListener('resize', function() {
    showImage(currentImageIndex); // Actualiza la posición del slider al cambiar el tamaño de la ventana
  });
});

