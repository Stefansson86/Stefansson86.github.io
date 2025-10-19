// Highlight active navigation link based on current page
function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Call on page load
document.addEventListener('DOMContentLoaded', highlightActiveNav);

// Dad jokes array - shared across the site
const DAD_JOKES = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why did the scarecrow win an award? He was outstanding in his field!",
  "What do you call a fake noodle? An impasta!",
  "Why don't eggs tell jokes? They'd crack each other up!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why did the coffee file a police report? It got mugged!",
  "How do you organize a space party? You planet!",
  "What did the ocean say to the beach? Nothing, it just waved!",
  "Why don't skeletons fight each other? They don't have the guts!",
];

// Get a random joke
function getRandomJoke() {
  return DAD_JOKES[Math.floor(Math.random() * DAD_JOKES.length)];
}
