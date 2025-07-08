// ------------- Accessed HTML Elements -------------
// Grid container
const container = document.querySelector(".grid-container");
// New Grid Button
const newGridBtn = document.querySelector("#newGridBtn");
// Rainbow button
const rainbowBtn = document.querySelector("#rainbowBtn");

// Variables
let gridSize = 16;
let isRainbow = false;

// ------------------- Functions ----------------------
function generateGrid() {
    container.innerHTML = "";

    for (let j = 0; j < gridSize; j++) {
        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `calc(100% / ${gridSize}`;
            cell.style.height = `calc(100% / ${gridSize}`;
            container.appendChild(cell);
        }
    }
}
function clearGrid() {
    container.innerHTML = "";
}
function generateRBG() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
    
}
// ------------- Program - Event Listeners -------------
// On page load
document.addEventListener("DOMContentLoaded", () => {
    generateGrid();
})

// Fill squares---------------
//Default 
container.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "green";
        event.target.classList.add("filled");
    });
// Rainbow Toggle
rainbowBtn.addEventListener("click", () => {
    if (isRainbow === true) {
        isRainbow = false;
        container.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "green";
        event.target.classList.add("filled");
    });
    }
    else if (isRainbow === false) {
        isRainbow = true;
        container.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = generateRBG();
    event.target.classList.add("filled");
    });
    }
})
// New grid button functionality
newGridBtn.addEventListener("click", () => {
    let response = prompt("How many squares per side for the new grid? (100 max)");

    if (response > 100 || response < 5) {
        response = prompt("Please choose between 5-100");
    }
    else {
        clearGrid();
        gridSize = response;
        generateGrid();
    }
});