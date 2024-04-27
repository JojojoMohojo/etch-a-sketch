const container = document.querySelector(".container");


for (let i = 0; i < 256; i++) {
    const square =  document.createElement("div");
    square.id = "square";
    square.style.opacity = 0;
    square.addEventListener("mouseover", () => {
        square.classList.add("black");
        let opacity = parseFloat(square.style.opacity);
        if (opacity < 1) {
            opacity += 0.1;
            square.style.opacity = opacity;
            console.log(square.style.opacity);
        };
    });
    container.appendChild(square);
}

const sizeButton = document.querySelector("button");
sizeButton.addEventListener("click", resetGrid);

function resetGrid() {
    let gridSize = prompt("Enter a new grid size (max 100)");
    while (gridSize > 100) {
        gridSize = prompt("Enter a new grid size under 100)");
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let totalSquares = gridSize * gridSize;
    let squareSize = 880 / gridSize;
    for (let i = 0; i < totalSquares; i++) {
        const square =  document.createElement("div");
        square.className = "square"
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        square.style.opacity = 0;
        square.addEventListener("mouseover", () => {
            square.classList.add("black");
            let opacity = parseFloat(square.style.opacity);
            if (opacity < 1) {
                opacity += 0.1;
                square.style.opacity = opacity;
                console.log(square.style.opacity);
        };
    });
        container.appendChild(square);
    }
}
