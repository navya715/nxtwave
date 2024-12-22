let setTimeoutBtnEl = document.getElementById("setTimeoutBtn");

let uniqueId = null;

setTimeoutBtnEl.onclick = function() {
  setTimeout(function() {
    console.log("Hello");
  }, 3000);
};