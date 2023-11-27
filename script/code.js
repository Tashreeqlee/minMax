let numbers = [11, 6, 5, 11, 3]; // can change numbers in the array to get different outcomes

function getMinNumber() {
  return Math.min(...numbers);
}
function getMaxNumber() {
  return Math.max(...numbers);
}
document.getElementById("minNumber").textContent = getMinNumber();
document.getElementById("maxNumber").textContent = getMaxNumber();