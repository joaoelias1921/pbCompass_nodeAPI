"use strict";
//checks inputs for empty values
function validateDescription(input) {
    if (input.value == "") {
        input.style.border = "2px solid red";
    }
    else {
        input.style.border = null;
    }
}
function execDate() {
    let formDateInput = document.getElementById("time");
    let modalDateInput = document.getElementById("timeEdit");
    let actualDate = new Date();
    let dateMonth = (actualDate.getMonth() + 1).toString();
    let dateHours = actualDate.getHours().toString();
    let dateMinutes = actualDate.getMinutes().toString();
    let dateSeconds = actualDate.getSeconds().toString();
    if (dateMonth.length == 1) {
        dateMonth = `0${dateMonth}`;
    }
    if (dateHours.length == 1) {
        dateHours = `0${dateHours}`;
    }
    if (dateMinutes.length == 1) {
        dateMinutes = `0${dateMinutes}`;
    }
    if (dateSeconds.length == 1) {
        dateSeconds = `0${dateSeconds}`;
    }
    let dateString = `${actualDate.getFullYear()}-${dateMonth}-${actualDate.getDate()}T${dateHours}:${dateMinutes}:${dateSeconds}`;
    formDateInput.min = dateString;
    modalDateInput.min = dateString;
}
function validateDate(date) {
    if (date.value == "") {
        date.style.border = "2px solid red";
    }
    else {
        date.style.border = null;
    }
}
function validateUser(user) {
    if (user.value == "") {
        user.style.border = "2px solid red";
    }
    else {
        user.style.border = null;
    }
}
function validateTaskForm() {
    var _a;
    let valid = true;
    let inputs = (_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.querySelectorAll("input");
    let select = document.querySelector("#user");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].style.border = "2px solid red";
            valid = false;
        }
        else {
            inputs[i].style.border = "null";
        }
    }
    if (select.value == "") {
        select.style.border = "2px solid red";
        valid = false;
    }
    else {
        select.style.border = "null";
    }
    return valid;
}
function validateTaskModalForm() {
    var _a;
    let valid = true;
    let inputs = (_a = document.querySelector(".modalInput")) === null || _a === void 0 ? void 0 : _a.querySelectorAll("input");
    let select = document.querySelector("#userEdit");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].style.border = "2px solid red";
            valid = false;
        }
        else {
            inputs[i].style.border = "null";
        }
    }
    if (select.value == "") {
        select.style.border = "2px solid red";
        valid = false;
    }
    else {
        select.style.border = "null";
    }
    return valid;
}