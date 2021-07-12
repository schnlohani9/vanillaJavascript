// Using XMLHttpRequest

let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();
request.onload = function () {
    console.log(request.response);
    let response = [{}];
    response = request.response;
    let filteredResponse = response.filter(e => e.completed === true);
    console.log(filteredResponse);
}


// Using fetch api--GET Method

function getFetchData() {
    const response = fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json()).then(data => console.log(data));
}

getFetchData();

// Using fetch api--POST Method
const todo = {
    userId: 1001,
    id: 1,
    title: 'New Title',
    completed: false
}

function postFetchData() {
    const response = fetch("https://jsonplaceholder.typicode.com/todos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(todo)
    }).then(response => response.json()).then(data => console.log(data));
}

postFetchData();
