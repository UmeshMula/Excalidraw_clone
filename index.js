const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




const centeredContent = document.querySelector('.centered-content');
const headertxt = document.querySelector('.header-text');

const topper = document.querySelector('.topper');

topper.addEventListener('click', () => {
  centeredContent.style.display = 'none';
  headertxt.style.display = 'none';
});

  // JavaScript to show centered-content on pressing the Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      centeredContent.style.display = 'block';
      headertxt.style.display = 'block';
    }
  });


