var result = 0;

function calculate() {
    var savings = document.getElementById("savings").value;
    var price = document.getElementById("price").value;

    result = Math.floor(price / savings);

    console.log("It will take " + result + " months");

    createUI();
}

function createUI() {
    var resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = "It will take " + result + " months to reach your goal.";
} 