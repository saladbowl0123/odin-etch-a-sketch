let grid = document.querySelector(".grid");

function createTiles (height, width) {
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
}

createTiles(16, 16);