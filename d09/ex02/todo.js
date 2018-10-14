var ft_list;
var cookie = [];

const newTodo = () => {
    var todo = prompt("Write your new task!!!", '');
    if (todo !== '') {
        addTodo(todo)
    }
}

const deleteTodo = () => {
    if (confirm("Are you sure you complete it?")) {
        this.parentElement.removeChild(this);
    }
}

const addTodo = (todo) => {
    var div = document.createElement("div");
    div.innerHTML = todo;
    div.addEventListener("click", deleteTodo);
    ft_list.insertBefore(div, ft_list.firstChild);
}


window.onload = () => {
    document.querySelector("#new").addEventListener("click", newTodo);
    ft_list = document.querySelector("#ft_list");
    var tmp = document.cookie;
    if (tmp) {
        cookie = JSON.parse(tmp);
        cookie.forEach(function (e) {
            addTodo(e);
        });
    }
};

window.onunload = () => {
    var todo = ft_list.children;
    var newCookie = [];
    for (var i = 0; i < todo.length; i++)
        newCookie.unshift(todo[i].innerHTML);
    document.cookie = JSON.stringify(newCookie);
};
