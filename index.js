alert("This is an inline script!")
let c = () => {
    let i = document.getElementById("in").value;
    let weight = parseFloat(i);

    if (weight > 15) {
        alert("Baggage exceeds the 15kg allowance!");
    } 
    else {
        alert("Baggage is within the allowed limit.");
    }
}
let doIt = () => alert("Not Implemented");

function doIt() {
    let sum = 0;

    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    alert("The sum is: " + sum);
}
