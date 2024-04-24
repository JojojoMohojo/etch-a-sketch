const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const square =  document.createElement("div");
    square.id = "square" + i;
    container.appendChild(square);
    console.log(`Appended square${i}`)
}

const pageHeight = document.body.scrollHeight;
console.log("Page height:", pageHeight, "pixels");
