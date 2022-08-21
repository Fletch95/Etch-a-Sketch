// FUNCTIONS 

function removeSquares() {
    const squares = detectSquares();

    if (squares.length = 0) { return };

    squares.forEach((square) => {
        square.remove();
    })
}

function createGrid(size) {
    if (size > 100) { size = 100 };

    const borderSize = getComputedStyle(container).borderWidth.slice(0, -2);

    const squareSize = (container.offsetHeight - 2 * borderSize) / size;

    for (let i = 0; i < size ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.height = `${squareSize}px`;

        div.style.width = `${squareSize}px`;
        container.appendChild(div);
    }
}

function detectSquares() {
    return document.querySelectorAll('.square');
}

function addEvents() {
    squares = detectSquares();
    squares.forEach((sqaure) => {
        sqaure.addEventListener('mouseover', (e) => {
            e.target.classList.add('marker');
        })
    })
}


// MAIN
const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const sizeButton = document.querySelector('.size')

createGrid(16);
addEvents();


resetButton.addEventListener('click', () => location.reload());

sizeButton.addEventListener('click', () => {
    size = prompt("Grid size? (100 max)");
    if (!size) return;
    removeSquares();
    createGrid(size);
    addEvents();
})

