// Add Event Listeners to Tip Percentage Buttons
const tipButtons = document.querySelectorAll(".tip-percentage-btn");
let selectedPercentage = undefined;

function removeClass(arr) {
  arr.forEach((button) => {
    button.classList.remove("selected");
  });
}

function selectPercentage(button) {
  removeClass(tipButtons);
  this.classList.toggle("selected");
  selectedPercentage = this.innerHTML.trim();
}

tipButtons.forEach((button) => {
  button.addEventListener("click", selectPercentage);
});
