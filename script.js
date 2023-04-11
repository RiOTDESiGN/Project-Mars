window.location.hash = '';//remove hash text
window.location.href.replace('#', '');//remove hash
history.replaceState(null, null, window.location.href);//replace state


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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


const redBtn = document.querySelector('#red');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');
const yellowBtn = document.querySelector('#yellow');

redBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color', 'rgb(165, 42, 42)');
});

blueBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color', 'rgb(0, 124, 226)');
});

greenBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color', 'rgb(48, 121, 0)');
});

yellowBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color', 'rgb(209, 171, 0)');
});