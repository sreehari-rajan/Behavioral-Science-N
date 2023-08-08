// script.js

// Add event listeners to theme options
document.getElementById('darkTheme').addEventListener('click', function() {
  setTheme('dark');
  window.location.href = 'homepage.html';
});

document.getElementById('retroTheme').addEventListener('click', function() {
  setTheme('retro');
  window.location.href = 'homepage.html';
});

document.getElementById('countryTheme').addEventListener('click', function() {
  setTheme('country');
  window.location.href = 'homepage.html';
});

document.getElementById('lightTheme').addEventListener('click', function() {
  setTheme('light');
  window.location.href = 'homepage.html';
});