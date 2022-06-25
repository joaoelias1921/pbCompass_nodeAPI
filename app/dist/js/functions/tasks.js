"use strict";
function fetchData() {
    fetch('http://localhost:3000/tasks')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        listTasks(data);
    });
}
function listTasks(tasks) {
    return tasks.map(function (task) {
        const ul = document.getElementById('tasks');
        let description = document.createElement('li');
        let user = document.createElement('li');
        let date = document.createElement('li');
        user.classList.add("last-li");
        description.innerHTML = `<span>Description: </span>${task.description}`;
        date.innerHTML = `<span>Task date: </span>${task.date}`;
        user.innerHTML = `<span>User: </span>${task.user}`;
        ul.appendChild(description);
        ul.appendChild(date);
        ul.appendChild(user);
    });
}
function addTask() {
    const description = document.getElementById('description');
    const datetime = document.getElementById('time');
    const user = document.getElementById('user');
    let data = {
        description: `${description.value}`,
        date: `${datetime.value}`,
        user: `${user.value}`
    };
    fetch('http://localhost:3000/tasks', {
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
