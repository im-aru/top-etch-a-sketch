const containerDiv = document.querySelector(".container");
const resizeButton = document.querySelector(".resizeBtn");
resizeGrid(16);

function resizeGrid(sizeInDivs) {
  clearGrid();
  for (let i = 0; i < sizeInDivs; i++) {
    const divGridRow = document.createElement("div");
    divGridRow.classList.add("row", "grid");
    containerDiv.appendChild(divGridRow);
    for (let i = 0; i < sizeInDivs; i++) {
      const divGridCol = document.createElement("div");
      divGridCol.classList.add("col", "grid");
      divGridCol.addEventListener("mouseover", randomColorPicker);
      divGridRow.appendChild(divGridCol);
    }
  }
}

function randomColorPicker(e) {
  const colorValues = [0, 0, 0].map(() => Math.floor(Math.random() * 256));
  e.target.style.background = `rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]})`;
}

function clearGrid() {
  const oldGrid = document.querySelectorAll(".grid");
  oldGrid.forEach((elem) => elem.remove());
}

resizeButton.addEventListener("click", () => {
  let userInput = prompt("Width and height of the canvas? (1-100)");
  if (!Number(userInput) || !(0 < userInput, userInput <= 100)) {
    alert("error: please input a number between 1 and 100.");
    return;
  }
  resizeGrid(userInput);
});