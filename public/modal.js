const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const openButton = document.querySelector("#open-button");
const closeButton = document.querySelector("#close-button");

openButton.addEventListener("click", () => {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

closeButton.addEventListener("click", () => {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});


function multiply() {
  a = Number(document.getElementById('QTY').value);
  b = Number(document.getElementById('PPRICE').value);
  c = a * b;

  document.getElementById('TOTAL').value = c;
}

