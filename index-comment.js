// Select all the buttons on the page and store them in an array
const button = document.querySelectorAll("button")

// Select the display screen on the page
const screeDisplay = document.querySelector(".screen")

// Initialize an empty array to store the user's calculations
let calculation = []

// Initialize a variable to keep track of the accumulated calculation
let accumulativeCalculation

// Define the function that will be called each time a button is clicked
function calculate(button) {
  // Get the text content of the button that was clicked
  const value = button.textContent

  // If the "CLEAR" button was clicked, reset the calculation and display
  if (value === "CLEAR") {
    calculation = []
    screeDisplay.textContent = "."
  }
  // If the "=" button was clicked, evaluate the accumulated calculation and display the result
  else if (value === "=") {
    console.log(accumulativeCalculation)
    screeDisplay.textContent = eval(accumulativeCalculation)
  }
  // Otherwise, add the clicked button's value to the calculation and update the display
  else {
    calculation.push(value)
    accumulativeCalculation = calculation.join("")
    screeDisplay.textContent = accumulativeCalculation
  }
}

// Add a click event listener to each button on the page that calls the calculate function
button.forEach(button => button.addEventListener('click', () => calculate(button)))
