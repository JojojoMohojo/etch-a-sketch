const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const square =  document.createElement("div");
    square.id = "square" + i;
    square.addEventListener("mouseover", () => {
        square.classList.add("black");
    })
    container.appendChild(square);
}
