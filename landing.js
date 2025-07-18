const toggleBtn = document.getElementById('toggle-mode');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change button emoji and text
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = "☀";
  } else {
    toggleBtn.textContent = "🌙";
  }
});