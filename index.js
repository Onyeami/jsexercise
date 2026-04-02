let weight = document.getElementById("in").value;  // Get the value from the input
weight = Number(weight); // Convert it to a number
if (weight > 15) {
    alert("Baggage exceeds the 15kg allowance!");
}
else {
    alert("Baggage is within the allowed limit.");
}