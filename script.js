const container = document.querySelector('#container');

// Create 16 * 16 grids.
for (let i = 0; i <= 16 * 16 - 1; i++) {
  div = document.createElement('div');
  div.setAttribute('class', 'grid');
  container.appendChild(div);
}

// Function to change the color of the grid.
function changeGridColor() {
  this.style.backgroundColor = 'black'
}

const grids = document.querySelectorAll('.grid');
grids.forEach(grid => {
  grid.addEventListener('mouseenter', changeGridColor);
});

// Clear the grid when the "Reset" button is clicked.
const button = document.querySelector('#button');