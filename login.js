// SWITCH TABS
document.querySelectorAll(".auth-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        let target = tab.getAttribute("data-auth");

        document.querySelectorAll(".auth-form").forEach(form => form.classList.remove("active"));
        document.getElementById(target + "Form").classList.add("active");
    });
});

// OPEN / CLOSE FORGET PASSWORD
function openForget() {
    document.querySelectorAll(".auth-form").forEach(f => f.classList.remove("active"));
    document.getElementById("forgetForm").classList.add("active");
}
function closeForget() {
    document.querySelectorAll(".auth-form").forEach(f => f.classList.remove("active"));
    document.getElementById("signinForm").classList.add("active");
}

// UNIVERSAL ERROR FUNCTION
function showError(input, msg) {
    let realPlaceholder = input.placeholder;
    input.value = "";
    input.placeholder = msg;
    input.style.border = "2px solid red";
    input.style.color = "red";

    setTimeout(() => {
        input.placeholder = realPlaceholder;
        input.style.border = "";
        input.style.color = "";
    }, 2000);
}

// VALIDATION FUNCTIONS
function validateName(name) {
    if (name.value.trim() === "") {
        showError(name, "Please fill the field");
        return false;
    }
    return true;
}

function validateEmail(email) {
    let value = email.value.trim();

    if (value === "") {
        showError(email, "Please fill the field");
        return false;
    }
    if (!value.endsWith("@gmail.com")) {
        showError(email, "Enter valid @gmail.com");
        return false;
    }
    return true;
}

function validatePassword(password) {
    let value = password.value.trim();
    let rule = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/;

    if (value === "") {
        showError(password, "Please fill the field");
        return false;
    }
    if (!rule.test(value)) {
        showError(password, "Use A,a,1,@");
        return false;
    }
    return true;
}

// ----------- LIVE VALIDATIONS -----------
document.querySelectorAll("input.name").forEach(input => {
    input.addEventListener("blur", () => validateName(input));
});

document.querySelectorAll("input.email").forEach(input => {
    input.addEventListener("blur", () => validateEmail(input));
});

document.querySelectorAll("input.password").forEach(input => {
    input.addEventListener("blur", () => validatePassword(input));
});

let forgetEmail = document.querySelector(".forget-email");
if (forgetEmail) {
    forgetEmail.addEventListener("blur", () => validateEmail(forgetEmail));
}

// ----------- CORRECTED FORM SUBMISSIONS -----------

// SIGN IN FORM
document.getElementById("signinForm").addEventListener("submit", e => {
    e.preventDefault();

    let email = document.querySelector("#signinForm .email");
    let password = document.querySelector("#signinForm .password");

    // Run all validations
    let valid =
        validateEmail(email) &
        validatePassword(password);

    if (valid) {
        window.location.href = "404.html";
    }
});

// SIGN UP FORM
document.getElementById("signupForm").addEventListener("submit", e => {
    e.preventDefault();

    let name = document.querySelector("#signupForm .name");
    let email = document.querySelector("#signupForm .email");
    let password = document.querySelector("#signupForm .password");

    // Run all validations
    let valid =
        validateName(name) &
        validateEmail(email) &
        validatePassword(password);

    if (valid) {
        window.location.href = "404.html";
    }
});

// RESET PASSWORD — SEND LINK
function sendReset() {
    let email = document.querySelector(".forget-email");

    if (!validateEmail(email)) {
        return;
    }

    window.location.href = "404.html";
}

function goHome() {
    window.location.href = "index.html";
}

