let todoList = JSON.parse(localStorage.getItem('listtodo')) || [];

const notodos = 
[
     `<p class='no-todos-text'>No Todos to Do</p>`,
     `<p class="no-todos-text"> Enter the TodoDate </p>`,
     `<p class="no-todos-text"> Enter the TodoName </p>`,
     `<p class="no-todos-text"> Enter the TodoName and the TodoDate </p>`
]

document.querySelector('.todoAdd').addEventListener('click', () => {
    addTodo();
    document.querySelector('.todoInput').value = '';
    document.querySelector('.todoInputDate').value = ''
    });

    document.querySelector('.todoReset').addEventListener('click', () => {
    todoList = [];
    localStorage.removeItem('listtodo');
    document.querySelector('.todoListOut').innerHTML = notodos[0];
    setTimeout(() => {
    document.querySelector('.todoListOut').innerHTML = ''
    },5000)
});

function loadOlderTodos()
{
    outputValue();
}

function output()
{
    setTimeout(() => 
    {
        outputValue();
    },3000)
}

function keyenter(value)
{
    if(value === 'Enter')
    {
        const todoname = document.querySelector('.todoInput');
        const tododate = document.querySelector('.todoInputDate');
        const todoname1 = todoname.value;
        const tododate1 = tododate.value;
        if(todoname1 && tododate1)
        {
            addTodo();
        }
        else if(todoname1)
        {
            document.querySelector('.todoListOut').innerHTML = notodos[1];
            output();
        }
        else if(tododate1)
        {
            document.querySelector('.todoListOut').innerHTML = notodos[2];
            output();
        }
        else
        {
            document.querySelector('.todoListOut').innerHTML = notodos[3];
            output();
        }
    }
}

function addTodo()
{
    const todoname = document.querySelector('.todoInput');
    const tododate = document.querySelector('.todoInputDate');
    const todoname1 = todoname.value;
    const tododate1 = tododate.value;
    if(todoname1 && tododate1)
    {
        const inputElement = document.querySelector('.todoInput');
        const inputElementDate = document.querySelector('.todoInputDate');
        const name = inputElement.value;
        const date = inputElementDate.value;
        todoList.push({name,date});
        localStorage.setItem('listtodo',JSON.stringify(todoList));
        outputValue();
        document.querySelector('.todoInput').value = '';
        document.querySelector('.todoInputDate').value = '';
    }
    else if(todoname1)
    {
        document.querySelector('.todoListOut').innerHTML = notodos[1];
        output();
    }
    else if(tododate1)
    {
        document.querySelector('.todoListOut').innerHTML = notodos[2];
        output();
    }
    else
    {
        document.querySelector('.todoListOut').innerHTML = notodos[3];
        output();
    }
}

function outputValue()
{
    if(todoList.length === 0)
    {
        document.querySelector('.todoListOut').innerHTML = notodos[0];
        setTimeout(() => {
        document.querySelector('.todoListOut').innerHTML = ''
        },5000);
        localStorage.removeItem('listtodo');
    }
    else
    {
        let todoListHtml = '';
        todoList.forEach((todoObject, index) =>
        {
            const name= todoObject.name;
            const dueDate = todoObject.date;
            const html = 
            `<div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-button js-delete-button"> delete </button>`;

            todoListHtml += html;

            document.querySelector('.todoListOut').innerHTML = todoListHtml;

            document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => 
            {
                deleteButton.addEventListener('click', () => {
                    todoList.splice(index,1);
                    outputValue();
                })
            });
        });
    }
}