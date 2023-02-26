const button = document.querySelectorAll("button")
const screeDisplay = document.querySelector(".screen")

let calculation = []
let accumulativeCalculation

function calculate(button) {
    const value = button.textContent
    if (value === "CLEAR") {
        calculation = []
        screeDisplay.textContent = "."
    } else if (value === "=") {
        console.log(accumulativeCalculation)
        screeDisplay.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join("")
        screeDisplay.textContent = accumulativeCalculation
    }
}

button.forEach(button => button.addEventListener('click', () => calculate(button)))