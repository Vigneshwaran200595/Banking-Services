function showError(input, msg) {
    let errorTag = input.parentElement.querySelector(".error");
    errorTag.innerHTML = msg;
    input.style.border = "1px solid red";

    setTimeout(() => {
        errorTag.innerHTML = "";
        input.style.border = "";
    }, 2000);
}

function validateField(input) {
    if (input.value.trim() === "") {
        showError(input, "Please fill the field");
        return false;
    }
    return true;
}

function validateEmail(email) {
    let value = email.value.trim();
    if (value === "") return showError(email, "Please fill the field"), false;
    if (!value.endsWith("@gmail.com"))
        return showError(email, "Enter valid @gmail.com"), false;

    return true;
}

function validatePhone(phone) {
    let value = phone.value.trim();
    if (value === "") return showError(phone, "Please fill the field"), false;
    if (!/^[0-9]{10}$/.test(value))
        return showError(phone, "Enter 10 digit mobile"), false;

    return true;
}

function validateAadhaar(aadhaar) {
    let value = aadhaar.value.trim();
    if (value === "") return showError(aadhaar, "Please fill the field"), false;
    if (!/^[0-9]{12}$/.test(value))
        return showError(aadhaar, "Enter 12 digit Aadhaar"), false;

    return true;
}

document.getElementById("accountForm").addEventListener("submit", e => {
    e.preventDefault();

    let name = document.querySelector(".fullname");
    let email = document.querySelector(".email");
    let phone = document.querySelector(".phone");
    let aadhaar = document.querySelector(".aadhaar");
    let address = document.querySelector(".address");
    let type = document.querySelector(".account-type");

    let valid =
        validateField(name) &
        validateEmail(email) &
        validatePhone(phone) &
        validateAadhaar(aadhaar) &
        validateField(address) &
        (type.value === "" ? (showError(type, "Please fill the field"), false) : true);

    if (valid) {
        window.location.href = "404.html";
    }
});
