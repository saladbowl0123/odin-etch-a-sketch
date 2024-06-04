const defaultSideLength = 16;

const body = document.querySelector("body");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let sideLength = prompt("Enter side length for new grid:");
  body.removeChild(body.lastElementChild);
  createGrid(sideLength, sideLength);
});

function createGrid (height, width) {
  let grid = document.createElement("div");
  grid.classList.add("grid");
  for (let i = 0; i < height; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < width; j++) {
      let tile = document.createElement("div");
      tile.classList.add("tile");
      row.appendChild(tile);
      tile.addEventListener("mouseover",
        () => tile.style.background = "black");
    }
    grid.appendChild(row);
  }
  body.appendChild(grid);
}

createGrid(defaultSideLength, defaultSideLength);