const containerDiv = document.querySelector(".container");

console.log(containerDiv);

for (let i = 0; i < 16; i++) {
  const divGridRow = document.createElement("div");
  divGridRow.className = "row"
  containerDiv.appendChild(divGridRow);

  for (let i = 0; i < 16; i++) {
    const divGridCol = document.createElement("div");
    divGridCol.className = "col";
    divGridRow.appendChild(divGridCol);
  }
}
