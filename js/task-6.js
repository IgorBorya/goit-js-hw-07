function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";

  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10;
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const input = document.querySelector("#controls input");
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});
