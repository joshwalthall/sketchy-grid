// Initialize variable to hold grid size
let gridCount = 64;

// Initialize variable to hold grid container element
const gridContainer = document.querySelector("#grid-container");

// Set grid container size
let gridContainerSize = 700;
let gridContainerPixels = `${gridContainerSize}px`;
gridContainer.style.width = gridContainerPixels;
gridContainer.style.height = gridContainerPixels;
gridContainer.style.display = 'flex';
gridContainer.style.flexDirection = 'column';
gridContainer.style.flex = '0 0 0';

// Get number of pixels per grid square by dividing grid container size by grid size
let gridSquareSize = (gridContainerSize / gridCount);
console.log(`gridSquareSize = ${gridSquareSize}`);

// Create "grid size" number of rows, each containing "grid size" number of divs
for (i = 0; i < gridCount; i++) {
    // Create grid row container
    const gridRowContainer = document.createElement('div');
    gridRowContainer.height = `${gridCount}px`;
    // For each grid square in the grid row
    for (j = 0; j < gridCount; j++) {
        const gridSquare = document.createElement('div');
        let gridSquarePixels = `${gridSquareSize}px`;
        gridSquare.style.width = gridSquarePixels;
        gridSquare.style.height = gridSquarePixels;
        gridSquare.style.backgroundColor = '#A4FBE7'
        // Make grid squares change color when mouse passes over them
        gridSquare.addEventListener('mouseenter', (e) => {
            gridSquare.style.backgroundColor = '#C2455E';
        });
        gridRowContainer.appendChild(gridSquare);
    };
    gridRowContainer.style.display = 'flex';
    gridRowContainer.style.flex = 'auto';
    gridContainer.appendChild(gridRowContainer);
};

// Create user entry pop-up button
// When button is clicked, open pop-up to prompt for grid size
// Remove existing grid, replace with grid of the user-provided size