function showUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => showNames(data))
}

function showNames(data){
    const ul = document.getElementById("user-list");
    for(const user of data){
        const li = document.createElement("li");
        li.innerText = user.name;
        ul.appendChild(li);
    }
}