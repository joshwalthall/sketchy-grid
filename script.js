// Initialize variable to hold grid size
let gridCount = 64;

// Initialize variables to hold containers
const main = document.querySelector('main');
const buttonContainer = document.querySelector('#button-container');
const gridContainer = document.querySelector('#grid-container');

// Initialize variable to hold grid container size as an integer and a 'px' string
let gridContainerSize = 700;
let gridContainerPixels = `${gridContainerSize}px`;

// Initialize variable to hold grid square size in pixels
let gridSquareSize = 0;

function setButtonContainerStyle() {
    buttonContainer.style.display = 'flex';
    // buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.flex = 'auto';
    buttonContainer.style.gap = '25px';
    buttonContainer.style.padding = '30px 0px';
    buttonContainer.style.margin = 'auto';
};

function setButtonStyle(button) {
    const buttonColor = '#757575';
    const buttonHoverColor = '#4DD0E1';
    button.style.backgroundColor = buttonColor;
    button.style.color = '#FFFFFF';
    button.style.border = 'none';
    button.style.borderRadius = '8px';
    button.style.fontSize = '14px';
    button.style.fontWeight = '700';
    button.style.padding = '15px 20px';
    button.style.transitionDuration = '0.2s';
    button.addEventListener('mouseenter', (e) => {
        button.style.backgroundColor = buttonHoverColor;
    });
    button.addEventListener('mouseleave', (e) => {
        button.style.backgroundColor = buttonColor;
    });
};

function createChangeGridCountButton() {
    const changeGridCountButton = document.createElement('button');
    changeGridCountButton.textContent = 'Change Grid Count';
    setButtonStyle(changeGridCountButton);
    changeGridCountButton.addEventListener('click', function () {changeGridCount();});
    buttonContainer.appendChild(changeGridCountButton);
};

function createClearGridButton() {
    const clearGridButton = document.createElement('button');
    clearGridButton.textContent = 'Clear Grid';
    setButtonStyle(clearGridButton);
    clearGridButton.addEventListener('click', function() {clearGrid();});
    buttonContainer.appendChild(clearGridButton);
};

function clearGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    };
    createGrid();
};

function justifyButtonContainer() {
    buttonContainer.style.justifyContent = 'center';
};

function setGridContainerStyle() {
    gridContainer.style.width = gridContainerPixels;
    gridContainer.style.height = gridContainerPixels;
    gridContainer.style.display = 'flex';
    gridContainer.style.flexDirection = 'column';
    gridContainer.style.flex = '0 0 0';
    gridContainer.style.border = '8px solid #9E9E9E';
    gridContainer.style.borderRadius = '8px';
}

function createGrid() {
    // Set grid square size based on grid count and grid container size
    gridSquareSize = (gridContainerSize / gridCount);
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
            gridSquare.style.backgroundColor = '#F5F5F5';
            // Make grid squares change color when mouse passes over them
            gridSquare.addEventListener('mouseenter', (e) => {
                gridSquare.style.backgroundColor = '#424242';
            });
            gridRowContainer.appendChild(gridSquare);
        };
        gridRowContainer.style.display = 'flex';
        gridRowContainer.style.flex = 'auto';
        gridContainer.appendChild(gridRowContainer);
    };
};

function changeGridCount() {
    const promptMessage = "Please enter a new grid count as a whole number between 1 and 100"
    let newGridCount = parseInt(prompt(promptMessage, `${gridCount}`));
    
    if (Number.isNaN(newGridCount)) {
        alert("Invalid entry. Please try again.");
    } else if (newGridCount < 1 || newGridCount > 100) {
        alert("Grid count not within valid range. Please try again.");
    } else {
        gridCount = newGridCount;
        clearGrid();
    };
};

setButtonContainerStyle();
createChangeGridCountButton();
createClearGridButton();
justifyButtonContainer();
setGridContainerStyle();
createGrid();

// Create user entry pop-up button
// When button is clicked, open pop-up to prompt for grid size
// Remove existing grid, replace with grid of the user-provided size