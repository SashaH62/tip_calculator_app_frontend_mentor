// Retrieve Buttons and Inputs
const billInput = document.querySelector(".bill-input");
const tipButtons = document.querySelectorAll(".tip-percentage-btn");
const totalTip = document.querySelector(".total-tip");
const totalAmount = document.querySelector(".total-output");
const resetBtn = document.querySelector(".reset-btn");
const numPeopleInput = document.querySelector(".numPeople");
const customField = document.querySelector(".custom-tip-percentage");
const billWarning = document.querySelector(".bill-warning");
const numPeopleWarning = document.querySelector(".people-warning");
let tipPercentage = 0;
let bill = 0;

function removeClass(arr) {
  arr.forEach((button) => {
    button.classList.remove("selected");
  });
}

const resetWarnings = () => {
  billWarning.style.display = "";
  billInput.style.border = "";
  numPeopleWarning.style.display = "";
  numPeopleInput.style.border = "";
};

const resetCalc = () => {
  totalTip.innerHTML = "$0";
  totalAmount.innerHTML = "$0";
  numPeopleInput.innerHTML = "$0";
  removeClass(tipButtons);
  selectedPercentage = 0;
  bill = 0;
  numPeople = 0;
  resetWarnings();
};

const displayTipTotal = (total, people, perc) => {
  console.log("Display Tip", perc);
  let tipPerPerson = 0;
  let totalPerPerson = 0;
  tipPerPerson = parseFloat(((total * (perc / 100)) / people).toFixed(2));
  totalPerPerson = parseFloat((total / people + tipPerPerson).toFixed(2));
  console.log(total, people, perc);
  totalTip.innerHTML = `$ ${tipPerPerson}`;
  totalAmount.innerHTML = `$ ${totalPerPerson}`;
};

// Checking input values are not 0

function validateForms() {
  totalTip.innerHTML = "$0";
  totalAmount.innerHTML = "$0";
  switch (true) {
    case bill == 0 && numPeople == 0:
      numPeopleWarning.style.display = "inline";
      numPeopleInput.style.border = "2px solid red";
      billWarning.style.display = "inline";
      billInput.style.border = "2px solid red";
      return false;

    case bill == 0:
      billWarning.style.display = "inline";
      billInput.style.border = "2px solid red";
      numPeopleWarning.style.display = "";
      numPeopleInput.style.border = "";
      return false;

    case numPeople == 0:
      numPeopleWarning.style.display = "inline";
      numPeopleInput.style.border = "2px solid red";
      billWarning.style.display = "";
      billInput.style.border = "";
      return false;

    default:
      resetWarnings();
      return true;
  }
}

//Retrieve values

function retrieveInput() {
  bill = billInput.value;
  numPeople = numPeopleInput.value;
}

// Tip Percentage Button Function

function calcAmount() {
  retrieveInput();
  if (validateForms()) {
    displayTipTotal(bill, numPeople, tipPercentage);
  }
}

function tipButtonEvent() {
  removeClass(tipButtons);
  customField.value = "";
  this.classList.add("selected");
  tipPercentage = parseFloat(this.innerHTML);
  calcAmount();
}

//Event Listeners

tipButtons.forEach((tip) => {
  tip.addEventListener("click", tipButtonEvent);
});

customField.addEventListener("input", () => {
  removeClass(tipButtons);
  tipPercentage = parseFloat(customField.value);
  calcAmount();
});

resetBtn.addEventListener("click", resetCalc);

billInput.addEventListener("input", calcAmount);
numPeopleInput.addEventListener("input", calcAmount);

//Initialise calculator

resetCalc();
