
function fetchData() {
    fetch('http://localhost:3000/tasks')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        listTasks(data);
    });
}

function listTasks(tasks){
return tasks.map(function(task) {
    const ul = document.getElementById('tasks')!;
    let li = document.createElement('li');
    let description = document.createElement('p');
    let user = document.createElement('p');
    let date = document.createElement('p');

    description.innerHTML = `${task.description}`;
    date.innerHTML = `${task.date}`;
    user.innerHTML = `${task.user}`;
    li.appendChild(description);
    li.appendChild(date);
    li.appendChild(user);
    ul.appendChild(li);
});
}


function addTask() {
    const description = document.getElementById('description')!;
    const datetime = document.getElementById('time')!;
    const user = document.getElementById('user')!;

    let data = {
        description: `${description.value}`, 
        date: `${datetime.value}`, 
        user: `${user.value}`
    }

    fetch('http://localhost:3000/tasks', {
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