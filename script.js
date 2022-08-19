const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const sizeButton = document.querySelector('.size')

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}

const squares = document.querySelectorAll('.square');

squares.forEach((sqaure) => {
    sqaure.addEventListener('mouseover', (e) => {
        console.log("gone over!");
        e.target.classList.add('marker');
    })
})


resetButton.addEventListener('click', () => location.reload());