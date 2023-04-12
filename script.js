// ---------------------------------------- RESET PAGE POSITION TO TOP ON RELOAD PAGE
window.location.hash = '';//remove hash text
window.location.href.replace('#', '');//remove hash
history.replaceState(null, null, window.location.href);//replace state


// ----------------------------------------------------------------- GO TO TOP BUTTON

let mybutton = document.getElementById("myBtn"); // Get the button

window.onscroll = function() {scrollFunction()}; // When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// --------------------------------------------------------------------- COLORCHANGER
const redBtn = document.querySelector('#red');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');
const yellowBtn = document.querySelector('#yellow');

function changeColor(color, text, background) {
  document.documentElement.style.setProperty("--color", `rgb(${ color })`);
  document.documentElement.style.setProperty("--text", `#${ text }`);
  document.documentElement.style.setProperty("--bckgrnd", `url(${ background })`);
}

redBtn.addEventListener("click", () => changeColor("111, 28, 32", "ffffff", "https://media.giphy.com/media/WPwD0gdWFsNRy8LA2P/giphy-downsized-large.gif"));
blueBtn.addEventListener("click", () => changeColor("55, 84, 133", "ffffff", "https://media.giphy.com/media/Wy3Q0fuNIJmYn62Lcv/giphy-downsized-large.gif"));
greenBtn.addEventListener("click", () => changeColor("68, 124, 73", "ffffff", "https://media.giphy.com/media/EIbqAlY9yJlJ3WBHjc/giphy-downsized-large.gif"));
yellowBtn.addEventListener("click", () => changeColor("122, 73, 25", "ffffff", "https://media.giphy.com/media/UNHplVba2fweBfkLHv/giphy-downsized-large.gif"));