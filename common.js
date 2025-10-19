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
  "What do you call cheese that isn't yours? Nacho cheese!",
  "Why did the bicycle fall over? Because it was two tired!",
  "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks!",
  "Why can't you hear a pterodactyl go to the bathroom? Because the 'P' is silent!",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "Why did the math book look so sad? Because it had too many problems!",
  "What do you call a fish wearing a bowtie? Sofishticated!",
  "How does a penguin build its house? Igloos it together!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "What do you call a sleeping bull? A bulldozer!",
  "Why don't oysters donate to charity? Because they're shellfish!",
  "What did the grape do when he got stepped on? Nothing but let out a little wine!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call a belt made of watches? A waist of time!",
  "Why did the stadium get hot after the game? All the fans left!",
  "What do you call a pig that does karate? A pork chop!",
  "Why don't programmers like nature? It has too many bugs!",
  "What did the janitor say when he jumped out of the closet? Supplies!",
  "Why did the cookie go to the doctor? Because it felt crumbly!",
  "What do you call a factory that makes okay products? A satisfactory!",
];

// Get a random joke
function getRandomJoke() {
  return DAD_JOKES[Math.floor(Math.random() * DAD_JOKES.length)];
}
