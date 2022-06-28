
function fetchTasks() {
    fetch('http://localhost:3000/api/v1/tasks')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        listTasks(data);
    });
}

function listTasks(tasks){
return tasks.map(function(task) {
    let ul = document.createElement('ul')!;
    let description = document.createElement('li');
    let user = document.createElement('li');
    let date = document.createElement('li');
    ul.classList.add("task-ul");
    description.id = "description";
    date.id = "date";
    user.id = "user";

    let edit = document.createElement('button');
    edit.innerHTML = "Edit";
    edit.classList.add("edit-btn")
    edit.setAttribute('onclick', 'editTask(this)');
    edit.setAttribute('id', task._id);
    let remove = document.createElement('button');
    remove.innerHTML = "Remove";
    remove.classList.add("remove-btn");
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
    document.querySelector(".list-none")?.appendChild(ul);
    taskPaginate();
});
}


function addTask() {
    event?.preventDefault();

    if(!validateTaskForm()) {
        let rules = document.querySelector(".task-rules")! as HTMLElement;
        rules.style.display = "flex";
        return;
    }else {
        const description = document.getElementById('description')! as HTMLInputElement;
        const datetime = document.getElementById('time')! as HTMLInputElement;
        const user = document.getElementById('user')! as HTMLInputElement;

        let data = {
            description: `${description.value}`, 
            date: `${datetime.value}`, 
            user: `${user.value}`
        }

        fetch('http://localhost:3000/api/v1/tasks', {
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

        window.location.reload();
    }
}

const taskSearch = document.getElementById("task-search")! as HTMLInputElement;
taskSearch.addEventListener("input", function(){
    var taskCards = document.querySelectorAll(".task-ul");

    if (taskSearch.value.length > 0){
        for (var i = 0; i < taskCards.length; i++){
            var taskCard = taskCards[i] as HTMLElement;
            var descLi = taskCard.querySelector("#description")!;
            var dateLi = taskCard.querySelector("#date")!;
            var userLi = taskCard.querySelector("#user")!;
            let regex = new RegExp(this.value, "i");

            var searchString = descLi.textContent?.split(": ")[1] as string;
            searchString += dateLi.textContent?.split("date: ")[1];
            searchString += userLi.textContent?.split(": ")[1];

            !regex.test(searchString) ? 
                taskCard.style.display = "none" :
                    taskCard.style.display = "flex";
        }
    }else{
        for (var i = 0; i < taskCards.length; i++) {
            var taskCard = taskCards[i] as HTMLElement;
            taskCard.style.display = "flex";
        }
    }
});

function editTask(p: HTMLParamElement) {
    fetch(`http://localhost:3000/api/v1/tasks/${p.id}`, {
        method: "GET"
    }).then(function(response){
        return response.json();
    })
    .then(function(data) {
        populateInputTask(data);
        var modal = document.getElementById("modal")!;
        var cancel = document.getElementById("modalCancel")!;
        modal.style.display = "block";

        cancel.onclick = function() {
            modal.style.display = "none";
        }

    });
}

function putTaskData(p: HTMLParamElement) {
    event?.preventDefault();

    if(!validateTaskModalForm()){
        return;
    }else {
        const description = document.getElementById('descriptionEdit')! as HTMLInputElement;
        const datetime = document.getElementById('timeEdit')! as HTMLInputElement;
        const user = document.getElementById('userEdit')! as HTMLInputElement;

        let dataEdit = {
            description: `${description.value}`, 
            date: `${datetime.value}`, 
            user: `${user.value}`
        }

        fetch(`http://localhost:3000/api/v1/tasks/${p.id}`, {
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

        window.location.reload();
    }
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

    fetch(`http://localhost:3000/api/v1/tasks/${p.id}`, {
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

function populateSelectUser() {
    const select = document.querySelector('#user')!;
    
    fetch('http://localhost:3000/api/v1/users')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        let option;

        for(let i=0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i]._id;
            select.appendChild(option);
        }
    });

}

function populateSelectEditUser() {
    const select = document.querySelector('#userEdit')!;
    
    fetch('http://localhost:3000/api/v1/users')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        let option;

        for(let i=0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i]._id;
            select.appendChild(option);
        }
    });
}

function taskPaginate() {
    var cards = document.querySelectorAll(".task-ul");
    let listArray = Array.from(cards)
    const numberOfItems = listArray.length
    const numberPerPage = 3
    const currentPage = 1
    
    const numberOfPages = Math.ceil(numberOfItems/numberPerPage)
    
    function accomodatePage(clickedPage) {
        if (clickedPage <= 1) { return clickedPage + 1}
        if (clickedPage >= numberOfPages) { return clickedPage -1}
        return clickedPage
    }
    
    function buildPagination(clickedPage) {
        $('.paginator').empty()
        const currPageNum = accomodatePage(clickedPage)
        if (numberOfPages >= 3) {
            for (let i=-1; i<2; i++) {
                $('.paginator').append(`<button class="pagination-btn" value="${currPageNum+i}">${currPageNum+i}</button>`)
            }
        } else {
            for (let i=0; i<numberOfPages; i++) {
                $('.paginator').append(`<button class="pagination-btn" value="${i+1}">${i+1}</button>`)
            }
        }
    }
    
    function buildPage(currPage) {
        const trimStart = (currPage-1)*numberPerPage
        const trimEnd = trimStart + numberPerPage
        $('.content').empty().append(listArray.slice(trimStart, trimEnd))
    }
    
    $(document).ready(function(){
        buildPage(1)
        buildPagination(currentPage)
    
        $('.paginator').on('click', 'button', function() {
            var clickedPage = parseInt($(this).val() as string)
            buildPagination(clickedPage)
            buildPage(clickedPage)
        });
    });
    
    
}


