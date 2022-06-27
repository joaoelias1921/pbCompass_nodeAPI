"use strict";
//checks inputs for empty values
function validateInput(input) {
    let regex = /^[a-zA-Z0-9 ]*$/;
    if (input.value == "" || !regex.test(input.value)) {
        input.value = "";
        input.style.border = "2px solid red";
    }
    else {
        input.style.border = null;
    }
}
//checks the name for invalid characters
//also sets the first letter of each name to upper case
function validateName(name) {
    let regex = /^[ãâáôõóêéíúa-zA-Z ]*$/;
    if (!regex.test(name.value) || name.value == "") {
        name.value = "";
        name.style.border = "2px solid red";
    }
    else {
        let nameArray = name.value.split(" ");
        for (let i = 0; i < nameArray.length; i++) {
            if (nameArray[i].charAt(1)) {
                nameArray[i] = `${nameArray[i].charAt(0).toUpperCase()}${nameArray[i].slice(1)}`;
            }
        }
        name.style.border = null;
        name.value = nameArray.join(" ");
    }
}
//validates cpf length
function validateCPF(cpf) {
    if (cpf.value.length != 14) {
        cpf.value = "";
        cpf.style.border = "2px solid red";
    }
    else {
        cpf.style.border = null;
    }
}
//calculates age and verifies if its > 18
function validateAge(date) {
    let userinput = `${date.value.split("-")[0]}-${date.value.split("-")[1]}-${date.value.split("-")[2]}`;
    let dob = new Date(userinput);
    //calculate month difference from current date in time  
    let month_diff = Date.now() - dob.getTime();
    //convert the calculated difference in date format  
    let age_dt = new Date(month_diff);
    //extract year from date      
    let yearFromDate = age_dt.getUTCFullYear();
    //calculate the age of the user  
    let age = Math.abs(yearFromDate - 1970);
    //checks if user is 18 years old or more
    if (age < 18 || date.value == "") {
        date.value = "";
        date.style.border = "2px solid red";
    }
    else {
        date.style.border = null;
    }
}
//checks if the email contains ".com"
function validateEmail(email) {
    if (email.value == "") {
        email.style.border = "2px solid red";
    }
    else if (!email.value.includes(".com") || !email.value.includes("@")) {
        email.value = "";
        email.style.border = "2px solid red";
    }
    else {
        email.style.border = null;
    }
}
function validatePassword(password) {
    if (password.value.length < 6 || password.value == "") {
        password.value = "";
        password.style.border = "2px solid red";
    }
    else {
        password.style.border = null;
    }
}
function validateLocations(input) {
    let regex = /^[a-zA-Z ]*$/;
    if (input.value == "" || !regex.test(input.value)) {
        input.value = "";
        input.style.border = "2px solid red";
    }
    else {
        input.style.border = null;
    }
}
function validateZipCode(zipcode) {
    if (zipcode.value.length < 9 || zipcode.value == "") {
        zipcode.value = "";
        zipcode.style.border = "2px solid red";
    }
    else {
        zipcode.style.border = null;
    }
}
function validateForm() {
    var _a;
    let valid = true;
    let inputs = (_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].style.border = "2px solid red";
            valid = false;
        }
        else {
            inputs[i].style.border = "null";
        }
    }
    return valid;
}
function validateModalForm() {
    var _a;
    let valid = true;
    let inputs = (_a = document.querySelector(".modalInput")) === null || _a === void 0 ? void 0 : _a.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].style.border = "2px solid red";
            valid = false;
        }
        else {
            inputs[i].style.border = "null";
        }
    }
    return valid;
}
