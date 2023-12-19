const containerDiv = document.querySelector(".container");
const resizeButton = document.querySelector("button");

resizeGrid(16);

function resizeGrid(sizeInDivs) {
  removeOldGrid();
  for (let i = 0; i < sizeInDivs; i++) {
    const divGridRow = document.createElement("div");
    divGridRow.classList.add("row", "grid");
    containerDiv.appendChild(divGridRow);

    for (let i = 0; i < sizeInDivs; i++) {
      const divGridCol = document.createElement("div");
      divGridCol.classList.add("col", "grid");
      divGridRow.appendChild(divGridCol);
    }
  }
  makeGridDynamic();
}

function makeGridDynamic() {
  const divGrid = Array.from(document.querySelectorAll(".grid"));
  divGrid.forEach(function (elem) {
    elem.addEventListener("mouseover", () => {
      elem.style.background = "pink";
    });
  });
}

function removeOldGrid() {
  const oldGrid = document.querySelectorAll(".grid");
  oldGrid.forEach(function (elem) {
    elem.remove();
  });
}

resizeButton.addEventListener("click", () => {
  let userInput = prompt("How many squares would you like? (1-100)");
  if (!Number(userInput) || !(0 < userInput, userInput <= 100)) {
    alert("error: please input a number between 1 and 100.");
    return;
  }
  resizeGrid(userInput);
});
