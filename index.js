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
