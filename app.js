var display_in = document.getElementById("display");
function display(n) {
    // If display currently shows 0, replace it
    if (display_in.value === "0") {
        display_in.value = n;
    } else {
        display_in.value += n;
    }
}
// Clear the entire display
function ClearAll() {
    display_in.value = "";
}
// Clear the current entry on display
function clearEntry() {
    display_in.value = display_in.value.slice(0, -1);
}
// Calculate the result
function calculate() {
        var result = eval(display_in.value);
        display_in.value = result;
}

