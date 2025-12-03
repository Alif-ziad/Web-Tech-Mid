// Theme state
let isDark = false; // default light; could read from localStorage for persistence

const body = document.body;
const toggleBtn = document.getElementById('themeToggle');

// Initialize button text based on current class
function syncButtonLabel() {
  toggleBtn.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  toggleBtn.setAttribute('aria-pressed', String(isDark));
}

// Apply theme by toggling class on body (affects header, main, footer via CSS variables)
function applyTheme() {
  body.classList.toggle('dark', isDark);
  body.classList.toggle('light', !isDark);
  syncButtonLabel();
}

// Toggle handler
toggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  applyTheme();
});

// Set initial theme
applyTheme();