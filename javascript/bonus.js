// JavaScript to toggle the navbar
document.querySelector('.menu-icon').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.display === 'flex') {
      navbar.style.display = 'none';
    } else {
      navbar.style.display = 'flex';
    }
  });
  