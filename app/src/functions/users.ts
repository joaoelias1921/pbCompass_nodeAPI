
function fetchUsers() {
    fetch('http://localhost:3000/users')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        listUsers(data);
    });
}


function listUsers(users){
    return users.map(function(user) {
        let ul = document.createElement('ul')!;
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

        let edit = document.createElement('button');
        edit.innerHTML = "Edit";
        edit.classList.add("edit-btn")
        edit.setAttribute('onclick', 'editUser(this)');
        edit.setAttribute('id', user._id);
        let remove = document.createElement('button');
        remove.innerHTML = "Remove";
        remove.classList.add("remove-btn");
        remove.setAttribute('onclick', 'removeUser(this)');
        remove.setAttribute('id', user._id);

    
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
        ul.appendChild(edit);
        ul.appendChild(remove);
        document.querySelector(".users-container")?.appendChild(ul);
    });
}

function addUser() {
    const name = document.getElementById('name')! as HTMLInputElement;
    const cpf = document.getElementById('cpf')! as HTMLInputElement;
    const birthDate = document.getElementById('birthDate')! as HTMLInputElement;
    const email = document.getElementById('email')! as HTMLInputElement;
    const password = document.getElementById('password')! as HTMLInputElement;
    const address = document.getElementById('address')! as HTMLInputElement;
    const number = document.getElementById('number')! as HTMLInputElement;
    const complement = document.getElementById('complement')! as HTMLInputElement;
    const city = document.getElementById('city')! as HTMLInputElement;
    const state = document.getElementById('state')! as HTMLInputElement;
    const country = document.getElementById('country')! as HTMLInputElement;
    const zipCode = document.getElementById('zipCode')! as HTMLInputElement;

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
    }

    fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(function(response){
        return response.json();
    })
    .then(function(json) {
        console.log(json);
    });
    
}

function editUser(p: HTMLParamElement) {
    fetch(`http://localhost:3000/users/${p.id}`, {
        method: "GET"
    }).then(function(response){
        return response.json();
    })
    .then(function(data) {
        populateInputUser(data);   
    });
}

function putUserData(p: HTMLParamElement) {
    const name = document.getElementById('nameEdit')! as HTMLInputElement;
    const cpf = document.getElementById('cpfEdit')! as HTMLInputElement;
    const birthDate = document.getElementById('birthDateEdit')! as HTMLInputElement;
    const email = document.getElementById('emailEdit')! as HTMLInputElement;
    const password = document.getElementById('passwordEdit')! as HTMLInputElement;
    const address = document.getElementById('addressEdit')! as HTMLInputElement;
    const number = document.getElementById('numberEdit')! as HTMLInputElement;
    const complement = document.getElementById('complementEdit')! as HTMLInputElement;
    const city = document.getElementById('cityEdit')! as HTMLInputElement;
    const state = document.getElementById('stateEdit')! as HTMLInputElement;
    const country = document.getElementById('countryEdit')! as HTMLInputElement;
    const zipCode = document.getElementById('zipCodeEdit')! as HTMLInputElement;

    let dataEdit = {
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
    }

    fetch(`http://localhost:3000/users/${p.id}`, {
        method: "PUT",
        body: JSON.stringify(dataEdit),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(function(response){
        return response.json();
    })
    .then(function(json) {
        console.log(json);
    });
}

function populateInputUser(data) {
    const name = document.getElementById('nameEdit')! as HTMLInputElement;
    const cpf = document.getElementById('cpfEdit')! as HTMLInputElement;
    const birthDate = document.getElementById('birthDateEdit')! as HTMLInputElement;
    const email = document.getElementById('emailEdit')! as HTMLInputElement;
    const password = document.getElementById('passwordEdit')! as HTMLInputElement;
    const address = document.getElementById('addressEdit')! as HTMLInputElement;
    const number = document.getElementById('numberEdit')! as HTMLInputElement;
    const complement = document.getElementById('complementEdit')! as HTMLInputElement;
    const city = document.getElementById('cityEdit')! as HTMLInputElement;
    const state = document.getElementById('stateEdit')! as HTMLInputElement;
    const country = document.getElementById('countryEdit')! as HTMLInputElement;
    const zipCode = document.getElementById('zipCodeEdit')! as HTMLInputElement;
    const confirm = document.querySelector('[name="editUserConfirm"]')! as HTMLInputElement;
    confirm!.setAttribute('id', data._id);

    name.value = data.name;
    cpf.value = data.cpf;
    birthDate.value = data.birthDate;
    email.value = data.email;
    password.value = data.password;
    address.value = data.address;
    number.value = data.number;
    complement.value = data.complement;
    city.value = data.city;
    state.value = data.state;
    country.value = data.country;
    zipCode.value = data.zipCode;
    
}

function removeUser(p: HTMLParamElement) {

    fetch(`http://localhost:3000/users/${p.id}`, {
        method: "DELETE"
    })
    .then(res => {
        if (res.ok) { 
            console.log("HTTP request successful"); 
            window.location.reload();
        }
        else { console.log("HTTP request unsuccessful") }
        return res;
    })
    .then(function(res){
        return res.json();
    })
    .then(data => listUsers(data))
    .catch(error => console.log(error))

}
const userSearch = document.getElementById("user-search")! as HTMLInputElement;
userSearch.addEventListener("input", function(){
    var userCards = document.querySelectorAll(".user-ul");

    if (userSearch.value.length > 0){
        for (var i = 0; i < userCards.length; i++){
            var userCard = userCards[i] as HTMLElement;
            var allLi = userCard.querySelectorAll("li")!;
            var searchString = "";
            let regex = new RegExp(this.value, "i");

            for(let i = 0; i < allLi.length; i++){
                searchString += allLi[i].textContent?.split(": ")[1] as string;
            }

            !regex.test(searchString) ? 
                userCard.style.display = "none" : 
                    userCard.style.display = "flex";
        }
    }else{
        for (var i = 0; i < userCards.length; i++) {
            var userCard = userCards[i] as HTMLElement;
            userCard.style.display = "flex";
        }
    }
});
