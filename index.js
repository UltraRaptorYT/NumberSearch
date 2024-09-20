function updateGrid() {
  const parentDiv = document.getElementById("dynamicGrid");
  let row = document.getElementById("row")
    ? document.getElementById("row").value
    : 10;
  let column = document.getElementById("column")
    ? document.getElementById("column").value
    : 10;
  parentDiv.innerHTML = "";
  parentDiv.style.fontSize = `min(calc(100vw/${column}/3.5), calc(100vh/${row}/3.5))`;
  parentDiv.style.gridTemplateColumns = `repeat(${column}, minmax(0, 1fr))`;
  parentDiv.style.gridTemplateRows = `repeat(${row}, minmax(0, 1fr))`;
  for (let i in [...new Array(row * column)]) {
    let node = document.createElement("div");
    node.innerText = i.padStart(2, "0");
    parentDiv.appendChild(node);
  }

  const childrenArray = Array.from(parentDiv.children);

  for (let i = childrenArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [childrenArray[i], childrenArray[j]] = [childrenArray[j], childrenArray[i]];
  }

  parentDiv.innerHTML = "";
  document.getElementById("max").innerText = String(row * column - 1).padStart(
    2,
    "0"
  );

  childrenArray.forEach((child) => parentDiv.appendChild(child));
}

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function randomNumber() {
  let num = "";
  for (let _ in [...new Array(5)]) {
    num += getRandomNumber(0, 9);
  }

  document.getElementById("randomNum").innerText = num;
}

function main() {
  randomNumber();
  updateGrid();
}

main();
