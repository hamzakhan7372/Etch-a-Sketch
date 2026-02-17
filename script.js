const gridContainer = document.querySelector("#grid-container");
const GRID_SIZE_PX = 640;

function createGrid(size) {
    gridContainer.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = GRID_SIZE_PX / size + "px";
        cell.style.height = GRID_SIZE_PX / size + "px";
        gridContainer.append(cell);
    }

    const cells = document.querySelectorAll(".cell");

    cells.forEach(function (cell) {
        cell.addEventListener("mouseover", function (e) {
            if (e.buttons === 1) {
                cell.style.backgroundColor = "#e94560";
            };
        });
    });
}

createGrid(16);

const gridSizeInput = document.querySelector("#grid-size-input");
const gridSizeValue = document.querySelector("#grid-size-value");

gridSizeInput.addEventListener("input", function () {
    gridSizeValue.textContent = gridSizeInput.value + " x " + gridSizeInput.value;
});

const createGridBtn = document.querySelector("#create-grid-btn");
createGridBtn.addEventListener("click", function () {
    const gridSize = gridSizeInput.valueAsNumber;
    createGrid(gridSize);
});

const clearGridBtn = document.querySelector("#clear-grid-btn");
clearGridBtn.addEventListener("click", function () {
    gridContainer.innerHTML = "";
});
