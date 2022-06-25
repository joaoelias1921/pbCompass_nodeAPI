
fetch('http://localhost:3000/tasks')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
