let gridSize = 16;
const grid = document.querySelector('#grid');
const gridSizeInput = document.querySelector('#grid-size');
const createBtn = document.querySelector('#create-grid-btn');
const alert = document.querySelector('.alert');
const errorText = document.querySelector('#error-text');
const closeBtn = document.querySelector('#close-btn');

gridSizeInput.addEventListener('change', (e) => {
    gridSize = e.target.value;
});

createBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(gridSize);
});

closeBtn.addEventListener('click', () => {
    alert.style.display = 'none';
});

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

function clearGrid(){
    grid.replaceChildren();
}