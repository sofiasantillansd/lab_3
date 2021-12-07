function getConfirmation() {
  var retVal = confirm("Proceed to order?");
  if (retVal == true) {
    location.replace("confirm.html");
    return true;
  } else {
    location.replace("index.html");
    return false;
  }
}

var dt = new Date();
document.getElementById("datetime").innerHTML = (("0" + (dt.getMonth() + 1)).slice(-2)) + "/" + (("0" + dt.getDate()).slice(-2)) + "/" + (dt.getFullYear()) + " "
  + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));

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

