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

function randomNum() {
  return Math.floor(Math.random() * 256);
}

// Function to get the number of color.
function getGridColorArray() {
  return [randomNum(), randomNum(), randomNum()];
}

// Function to random the background color.
function randomBackgroundColor() {
  if (colorChangeTimes === 0) {
    rgb = getGridColorArray();
    this.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    colorChangeTimes++;
  } else if (colorChangeTimes === 9) {
    this.style.backgroundColor = 'rgb(0, 0, 0)';
    colorChangeTimes = 0;
  } else {
    // Change each number in rgb array.
    rgb.forEach((color, index) => rgb[index] = Math.floor(color * 0.9));
    this.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    colorChangeTimes++;
  }
}

// Function to detect when mouse is hovering over the grid.
let colorChangeTimes = 0;
let rbg;
function detectMouseHovering() {
  const grids = document.querySelectorAll('.grid');

  // Add event listener to each grid.
  grids.forEach(grid => {
    grid.addEventListener('mouseenter', randomBackgroundColor);
  });
}

detectMouseHovering()

// Clear the grid when the "Reset" button is clicked.
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.style.backgroundColor = 'white';
  });
});

// Create a new sketch pad when the "New" button is clicked.
const newButton = document.querySelector('#new');
newButton.addEventListener('click', () => {
  // Remove all the grids in the container.
  container.textContent = "";

  // Ask the user for the number squares per side.
  numSquares = prompt('Enter the number of squares per side [Max is 100].', '16');
  while (!(numSquares > 0 && numSquares <= 100)) {
    alert('Please enter a number between 1-100.');
    numSquares = prompt('Enter the number of squares per side [Max is 100].', '16');
  }
  createGrids(numSquares);
  detectMouseHovering();
});
