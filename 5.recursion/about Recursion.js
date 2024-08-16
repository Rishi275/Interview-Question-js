

// Recursion - When A function Call Itsel Is called recursion 
function Shivam() {
    Ashish();
}
function Ashish() {
    Manish();
}

function Manish() {
    Rishi();
}

function Rishi() {
    Harshita();
}

function Harshita() {
    console.log("OK Guys, lets Go! For Party");
}
// Shivam();