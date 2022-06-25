
function fetchData() {
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
        const ul = document.getElementById('users')!;
        let li = document.createElement('li');
        let name = document.createElement('p');
        let cpf = document.createElement('p');
        let birthDate = document.createElement('p');
        let email = document.createElement('p');
        let password = document.createElement('p');
        let address = document.createElement('p');
        let number = document.createElement('p');
        let complement = document.createElement('p');
        let city = document.createElement('p');
        let state = document.createElement('p');
        let country = document.createElement('p');
        let zipCode = document.createElement('p');

    
        name.innerHTML = `${user.name}`;
        cpf.innerHTML = `${user.cpf}`;
        birthDate.innerHTML = `${user.birthDate}`;
        email.innerHTML = `${user.email}`;
        password.innerHTML = `${user.password}`;
        address.innerHTML = `${user.address}`;
        number.innerHTML = `${user.number}`;
        complement.innerHTML = `${user.complement}`;
        city.innerHTML = `${user.city}`;
        state.innerHTML = `${user.state}`;
        country.innerHTML = `${user.country}`;
        zipCode.innerHTML = `${user.zipCode}`;


        li.appendChild(name);
        li.appendChild(cpf);
        li.appendChild(birthDate);
        li.appendChild(email);
        li.appendChild(password);
        li.appendChild(address);
        li.appendChild(number);
        li.appendChild(complement);
        li.appendChild(city);
        li.appendChild(state);
        li.appendChild(country);
        li.appendChild(zipCode);
        ul.appendChild(li);
    });
}

function addUser() {
    const name = document.getElementById('name')!;
    const cpf = document.getElementById('cpf')!;
    const birthDate = document.getElementById('birthDate')!;
    const email = document.getElementById('email')!;
    const password = document.getElementById('password')!;
    const address = document.getElementById('address')!;
    const number = document.getElementById('number')!;
    const complement = document.getElementById('complement')!;
    const city = document.getElementById('city')!;
    const state = document.getElementById('state')!;
    const country = document.getElementById('country')!;
    const zipCode = document.getElementById('zipCode')!;

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