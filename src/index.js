const generateGridButton = document.getElementById("generateGridButton");
const undoColorButton = document.getElementById("undoColorButton");
const addWordButton = document.getElementById("addWordButton");
const playerAddButton = document.getElementById("playerAddButton");
const playerName = document.getElementById("playerName");
const scoreTable = document.getElementById("scoreTable");

generateGridButton.addEventListener("click", () => {
  generateGrid();
});

let word = "";
const generateGrid = () => {
  const gridContainer = document.getElementById("gridContainer");
  // Create the table element
  const table = document.createElement("table");
  for (let i = 0; i < 14; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement("td");
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("maxlength", "1");
      input.classList.add(`grid${i}-input${j}`);
      input.addEventListener("input", (e) => {
        const value = e.target.value.toUpperCase();
        input.value = value;
        // console.log(e.target.value);
      });
      input.addEventListener("dblclick", (e) => {
        input.style.backgroundColor = "yellow";
        word += e.target.value;
      });
      cell.appendChild(input);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  // Clear the grid container before appending the table
  gridContainer.innerHTML = "";
  gridContainer.appendChild(table);
};

let wordLength = 0;
addWordButton.addEventListener("click", () => {
  const wordContainer = document.getElementById("wordContainer");
  // wordContainer.textContent = word;
  if (word === "") {
    wordLength = 0;
  } else {
    wordLength = word.length;
  }
  wordContainer.innerHTML = `${word}    <span style="color: red; border: 1px solid ; padding:0px 10px"> ${wordLength}</span>`;
  // wordContainer.innerHTML = word;
});

undoColorButton.addEventListener("click", () => {
  const gridContainer = document.getElementById("gridContainer");
  // Get all the table cells (td) within the grid container
  const cells = gridContainer.querySelectorAll("table td input");

  // Loop through each cell and reset the background color
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white"; // Set the background color to its default value
  });
  const wordContainer = document.getElementById("wordContainer");
  wordContainer.textContent = "";
  word = "";
});

let player = "";

playerName.addEventListener("change", (e) => {
  player = e.target.value;
});

playerAddButton.addEventListener("click", () => {
  if (player !== "") {
    // Create a new table row (tr) element
    const newRow = document.createElement("tr");

    // Create the first <td> element
    const td1 = document.createElement("td");
    td1.textContent = player;

    const td2 = document.createElement("td");
    td2.textContent = "0";
    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    incrementButton.style.padding = "5px 10px"; // Add padding to the button
    incrementButton.style.border = "none"; // Remove button border if needed
    incrementButton.style.background = "#0070c0"; // Button background color
    incrementButton.style.color = "#fff"; // Button text color
    incrementButton.addEventListener("click", function () {
      // Increment the value
      td2.textContent = parseInt(td2.textContent, 10) + 1;
    });

    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    decrementButton.style.padding = "5px 10px"; // Add padding to the button
    decrementButton.style.border = "none"; // Remove button border if needed
    decrementButton.style.background = "#ff0000"; // Button background color
    decrementButton.style.color = "#fff"; // Button text color
    decrementButton.addEventListener("click", function () {
      // Decrement the value
      const value = parseInt(td2.textContent, 10);
      if (value > 0) {
        td2.textContent = value - 1;
      }
    });


    const td3 = document.createElement("button");
    td3.textContent = "X";
    td3.classList.add("removeButton");
    // Add click event listener to the button
    td3.addEventListener("click", function () {
      // Find the parent <tr> element and remove it
      const row = this.parentNode;
      row.remove();
    });

    // Append the <td> elements to the new row
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(incrementButton);
    newRow.appendChild(decrementButton);
    newRow.appendChild(td3);

    // Append the new row to the score table
    scoreTable.appendChild(newRow);

    // Reset the player variable and input value
    player = "";
    playerName.value = "";
  }
});
