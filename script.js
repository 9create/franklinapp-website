// Hamburger Menu Toggle
function toggleMenu() {
 var menu = document.getElementById("navLinks");
 menu.classList.toggle("active");
}

// Auto close menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
 const links = document.querySelectorAll('.nav-links a');
 const navLinks = document.getElementById('navLinks');
 
 links.forEach(link => {
  link.addEventListener('click', () => {
   navLinks.classList.remove('active');
  });
 });
 
 console.log("Franklin App Academy Loaded.");
});