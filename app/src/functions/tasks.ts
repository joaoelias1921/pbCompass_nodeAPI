
function fetchTasks() {
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
    let description = document.createElement('li');
    let user = document.createElement('li');
    let date = document.createElement('li');
    user.classList.add("last-li");

    let edit = document.createElement('button');
    edit.innerHTML = "Edit";
    edit.setAttribute('onclick', 'editTask(this)');
    edit.setAttribute('id', task._id);
    let remove = document.createElement('button');
    remove.innerHTML = "Remove";
    remove.setAttribute('onclick', 'removeTask(this)');
    remove.setAttribute('id', task._id);

    description.innerHTML = `<span>Description: </span>${task.description}`;
    date.innerHTML = `<span>Task date: </span>${task.date}`;
    user.innerHTML = `<span>User: </span>${task.user.name}`;
    ul.appendChild(description);
    ul.appendChild(date);
    ul.appendChild(user);
    ul.appendChild(edit);
    ul.appendChild(remove);
});
}


function addTask() {
    const description = document.getElementById('description')! as HTMLInputElement;
    const datetime = document.getElementById('time')! as HTMLInputElement;
    const user = document.getElementById('user')! as HTMLInputElement;

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


function editTask(p: HTMLParamElement) {
    fetch(`http://localhost:3000/tasks/${p.id}`, {
        method: "GET"
    }).then(function(response){
        return response.json();
    })
    .then(function(data) {
        populateInputTask(data);   
    });
}

function putTaskData(p: HTMLParamElement) {
    const description = document.getElementById('descriptionEdit')! as HTMLInputElement;
    const datetime = document.getElementById('timeEdit')! as HTMLInputElement;
    const user = document.getElementById('userEdit')! as HTMLInputElement;

    let dataEdit = {
        description: `${description.value}`, 
        date: `${datetime.value}`, 
        user: `${user.value}`
    }

    fetch(`http://localhost:3000/tasks/${p.id}`, {
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

function populateInputTask(data) {
    const description = document.getElementById('descriptionEdit')! as HTMLInputElement;
    const datetime = document.getElementById('timeEdit')! as HTMLInputElement;
    const user = document.getElementById('userEdit')! as HTMLInputElement;
    const confirm = document.querySelector('[name="editConfirm"]')! as HTMLInputElement;
    confirm!.setAttribute('id', data._id);

    description.value = data.description;
    datetime.value = data.date;
    user.value = data.user._id;  
}



function removeTask(p: HTMLParamElement) {

    fetch(`http://localhost:3000/tasks/${p.id}`, {
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
    .then(data => listTasks(data))
    .catch(error => console.log(error))

    //window.location.reload();
}