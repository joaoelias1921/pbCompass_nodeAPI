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
        let dateString = date.value.split("T")[0];
        let hoursString = date.value.split("T")[1];
        let year = parseInt(dateString.split("-")[0]);
        let month = parseInt(dateString.split("-")[1]);
        let day = parseInt(dateString.split("-")[2]);
        let hours = parseInt(hoursString.split(":")[0]);
        let minutes = parseInt(hoursString.split(":")[1]);
        let currentDate = new Date();
        if (year < currentDate.getFullYear()) {
            date.value = "";
            date.style.border = "2px solid red";
        }
        else if (month < (currentDate.getMonth() + 1)) {
            date.value = "";
            date.style.border = "2px solid red";
        }
        else if (day < currentDate.getDate()) {
            date.value = "";
            date.style.border = "2px solid red";
        }
        else if (hours < currentDate.getHours()) {
            date.value = "";
            date.style.border = "2px solid red";
        }
        else if (hours > currentDate.getHours()) {
            date.style.border = null;
            console.log(date.value);
        }
        else if (minutes < currentDate.getMinutes()) {
            date.value = "";
            date.style.border = "2px solid red";
        }
        else {
            date.style.border = null;
        }
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
