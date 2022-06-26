"use strict";
function fetchUsers() {
    fetch('http://localhost:3000/users')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        listUsers(data);
    });
}
function listUsers(users) {
    return users.map(function (user) {
        var _a;
        let ul = document.createElement('ul');
        let name = document.createElement('li');
        let cpf = document.createElement('li');
        let birthDate = document.createElement('li');
        let email = document.createElement('li');
        let password = document.createElement('li');
        let address = document.createElement('li');
        let number = document.createElement('li');
        let complement = document.createElement('li');
        let city = document.createElement('li');
        let state = document.createElement('li');
        let country = document.createElement('li');
        let zipCode = document.createElement('li');
        ul.classList.add("user-ul");
        name.innerHTML = `<span>Name: </span>${user.name}`;
        cpf.innerHTML = `<span>CPF: </span>${user.cpf}`;
        birthDate.innerHTML = `<span>Birthdate: </span>${user.birthDate}`;
        email.innerHTML = `<span>Email: </span>${user.email}`;
        password.innerHTML = `<span>Password: </span>${user.password}`;
        address.innerHTML = `<span>Address: </span>${user.address}`;
        number.innerHTML = `<span>Number: </span>${user.number}`;
        complement.innerHTML = `<span>Complement: </span>${user.complement}`;
        city.innerHTML = `<span>City: </span>${user.city}`;
        state.innerHTML = `<span>State: </span>${user.state}`;
        country.innerHTML = `<span>Country: </span>${user.country}`;
        zipCode.innerHTML = `<span>Zip Code: </span>${user.zipCode}`;
        ul.appendChild(name);
        ul.appendChild(cpf);
        ul.appendChild(birthDate);
        ul.appendChild(email);
        ul.appendChild(password);
        ul.appendChild(address);
        ul.appendChild(number);
        ul.appendChild(complement);
        ul.appendChild(city);
        ul.appendChild(state);
        ul.appendChild(country);
        ul.appendChild(zipCode);
        (_a = document.querySelector(".users-container")) === null || _a === void 0 ? void 0 : _a.appendChild(ul);
    });
}
function addUser() {
    const name = document.getElementById('name');
    const cpf = document.getElementById('cpf');
    const birthDate = document.getElementById('birthDate');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const address = document.getElementById('address');
    const number = document.getElementById('number');
    const complement = document.getElementById('complement');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const country = document.getElementById('country');
    const zipCode = document.getElementById('zipCode');
    let data = {
        name: `${name.value}`,
        cpf: `${cpf.value}`,
        birthDate: `${birthDate.value}`,
        email: `${email.value}`,
        password: `${password.value}`,
        address: `${address.value}`,
        number: `${number.value}`,
        complement: `${complement.value}`,
        city: `${city.value}`,
        state: `${state.value}`,
        country: `${country.value}`,
        zipCode: `${zipCode.value}`
    };
    fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (json) {
        console.log(json);
    });
}
const userSearch = document.getElementById("user-search");
userSearch.addEventListener("input", function () {
    var _a;
    var userCards = document.querySelectorAll(".user-ul");
    if (userSearch.value.length > 0) {
        for (var i = 0; i < userCards.length; i++) {
            var userCard = userCards[i];
            var allLi = userCard.querySelectorAll("li");
            var searchString = "";
            let regex = new RegExp(this.value, "i");
            for (let i = 0; i < allLi.length; i++) {
                searchString += (_a = allLi[i].textContent) === null || _a === void 0 ? void 0 : _a.split(": ")[1];
            }
            !regex.test(searchString) ?
                userCard.style.display = "none" :
                userCard.style.display = "flex";
        }
    }
    else {
        for (var i = 0; i < userCards.length; i++) {
            var userCard = userCards[i];
            userCard.style.display = "flex";
        }
    }
});
