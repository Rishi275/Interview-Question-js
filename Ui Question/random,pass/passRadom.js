let input = document.querySelector("input");
let span = document.querySelector("span")
let btn = document.querySelector(".generate");
let pass = document.querySelector("h1");
let copy = document.querySelector(".copy");

let Inputvalue = '';

input.addEventListener("input", (event) => {
    Inputvalue = event.target.value;
    span.innerHTML = Inputvalue;

});

btn.addEventListener("click", () => {
    pass.innerHTML = RandomPassGenerator();
});


copy.addEventListener("click", () => {
    navigator.clipboard.writeText(pass.innerHTML);
    copy.innerHTML = "copied!";
    setTimeout(() => {
        copy.innerHTML = "copy";
    }, 1000);
});

let RandomPassGenerator = () => {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let password = ''
    let allChars = '';
    let upper = document.querySelector(".upper")
    let lower = document.querySelector(".lower")
    let number = document.querySelector(".number")
    let symbol = document.querySelector(".symbol")

    if (upper.checked || lower.checked || number.checked || symbol.checked) {
        if (upper.checked) {
            allChars += upperCaseChars;
        }
        if (lower.checked) {
            allChars += lowerCaseChars;
        }
        if (number.checked) {
            allChars += numberChars;
        }
        if (symbol.checked) {
            allChars += symbolChars;
        }
        error.style.display = "none"

    } else {
        error.style.display = "flex"
    }


    for (let i = 0; i < Inputvalue; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        let generatePass = allChars[randomIndex]
        password += generatePass;
        // password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return password;
}


console.log(RandomPassGenerator());