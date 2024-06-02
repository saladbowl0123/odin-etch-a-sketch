let grid = document.querySelector(".grid");

const createTiles = function(height, width) {
  for (let i = 0; i < height; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < width; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      row.appendChild(tile);
      if ((i + j) % 2 == 0) tile.style.background = "black";
    }
    grid.appendChild(row);
  }
}

createTiles(16, 16);