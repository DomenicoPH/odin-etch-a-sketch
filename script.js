let gridSize = 16;
const grid = document.querySelector('#grid');
const gridSizeInput = document.querySelector('#grid-size');
const createBtn = document.querySelector('#create-grid-btn');
const resetBtn = document.querySelector('#reset-grid-btn');
const alert = document.querySelector('.alert');
const errorText = document.querySelector('#error-text');
const closeBtn = document.querySelector('#close-btn');

let isDrawing = false;

// ---Paint the grid boxes when the mouse is pressed and held while moving over them
grid.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('grid-box')) {
        isDrawing = true;
        e.target.style.backgroundColor = 'black';
    }
});

grid.addEventListener('mouseover', (e) => {
    if (isDrawing && e.target.classList.contains('grid-box')) {
        e.target.style.backgroundColor = 'black';
    }
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

// ---Create grid
gridSizeInput.addEventListener('change', (e) => {
    gridSize = e.target.value;
});

createBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(gridSize);
});

// ---Reset grid
resetBtn.addEventListener('click', () => {
    resetGrid();
});

// ---Close alert box
closeBtn.addEventListener('click', () => {
    alert.style.display = 'none';
});


// Functions
function createGrid(gridSize){
    if(gridSize > 100){
        alert.style.display = 'flex';
        errorText.textContent = 'Grid size cannot be more than 100';
    } else if(gridSize < 1){
        alert.style.display = 'flex';
        errorText.textContent = 'Grid size must be greater than 0';
    } else {
        for(let i = 0; i < gridSize; i++){
            const row = document.createElement('div');
            row.classList.add('grid-row');
            for(let j = 0; j < gridSize; j++){
                const widthAndHeight = 360 / gridSize;;
                const gridBox = document.createElement('div');
                gridBox.classList.add('grid-box');
                gridBox.style.width = `${widthAndHeight}px`;
                gridBox.style.height = `${widthAndHeight}px`;
                row.appendChild(gridBox);
            }
            grid.appendChild(row);
        }
    }
}

function resetGrid(){
    const gridBoxes = document.querySelectorAll('.grid-box');
     gridBoxes.forEach((gridBox) => {
        gridBox.style.backgroundColor = '';
     });
}

function clearGrid(){
    grid.replaceChildren();
}