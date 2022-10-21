// Add a keyup listener on the first input field
const firstnameInput = document.getElementById("firstname");
const firstnameDisplay = document.getElementById("display-firstname");
let spanContent = "";

const putInSpan = (e) => {
    spanContent = e.target.value;
    firstnameDisplay.innerHTML = spanContent;
};

firstnameInput.addEventListener("keyup", putInSpan);

// Add a keyup listener on the second input (the number input)
const ageInput = document.getElementById("age");
const hardTruth = document.getElementById("a-hard-truth");

const isOfAge = (number) => {
    return number >= 18;
};

const isEmpty = (x) => {
    return x == "";
};

const displayHardTruth = (e) => {
    console.log(e.target.value)
    if (!isOfAge(e.target.value) && !isEmpty(e.target.value)) {
        hardTruth.style.visibility = "visible";
    } else {
        hardTruth.style.visibility = "hidden";
    }
};

// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.



// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. 

toggleDarkMode.addEventListener("change", toggleMode);