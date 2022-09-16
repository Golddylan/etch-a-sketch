const grid = document.querySelector("#grid");

function makeRows(rows,cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c=0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        grid.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })
    };
};

makeRows (16,16);




