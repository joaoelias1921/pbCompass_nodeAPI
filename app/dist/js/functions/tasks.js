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
        var _a;
        let ul = document.createElement('ul');
        let description = document.createElement('li');
        let user = document.createElement('li');
        let date = document.createElement('li');
        ul.classList.add("task-ul");
        description.id = "description";
        date.id = "date";
        user.id = "user";
        description.innerHTML = `<span>Description: </span>${task.description}`;
        date.innerHTML = `<span>Task date: </span>${task.date}`;
        user.innerHTML = `<span>User: </span>${task.user.name}`;
        ul.appendChild(description);
        ul.appendChild(date);
        ul.appendChild(user);
        (_a = document.querySelector(".tasks-container")) === null || _a === void 0 ? void 0 : _a.appendChild(ul);
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
const taskSearch = document.getElementById("task-search");
taskSearch.addEventListener("input", function () {
    var _a, _b, _c;
    var taskCards = document.querySelectorAll(".task-ul");
    if (taskSearch.value.length > 0) {
        for (var i = 0; i < taskCards.length; i++) {
            var taskCard = taskCards[i];
            var descLi = taskCard.querySelector("#description");
            var dateLi = taskCard.querySelector("#date");
            var userLi = taskCard.querySelector("#user");
            let expressao = new RegExp(this.value, "i");
            var searchString = (_a = descLi.textContent) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
            searchString += (_b = dateLi.textContent) === null || _b === void 0 ? void 0 : _b.split("date: ")[1];
            searchString += (_c = userLi.textContent) === null || _c === void 0 ? void 0 : _c.split(" ")[1];
            !expressao.test(searchString) ?
                taskCard.classList.add("invisible") :
                taskCard.classList.remove("invisible");
        }
    }
    else {
        for (var i = 0; i < taskCards.length; i++) {
            var taskCard = taskCards[i];
            taskCard.classList.remove("invisible");
        }
    }
});
