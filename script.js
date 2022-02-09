const container = document.querySelector('#container');

function createGrids(num) {
  for (let i = 0; i <= num * num - 1; i++) {
    div = document.createElement('div');
    div.setAttribute('class', 'grid');
    div.style.width = `${800 / num - 6}px`
    div.style.height = `${800 / num - 6}px`
    container.appendChild(div);
  }
}
// Create 16 * 16 grids.
createGrids(16)

// Function to change the color of the grid.
function changeGridColor() {
  this.style.backgroundColor = 'black'
}

const grids = document.querySelectorAll('.grid');
grids.forEach(grid => {
  grid.addEventListener('mouseenter', changeGridColor);
});

// Clear the grid when the "Reset" button is clicked.
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  grids.forEach(grid => {
    grid.style.backgroundColor = 'white';
  });
});