// This is a simple script that changes the header background color on scroll

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) {
      header.style.backgroundColor = '#555';
    } else {
      header.style.backgroundColor = '#333';
    }
  });
  