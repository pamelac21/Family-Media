async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="todo-title"]').value;
    const list = document.querySelector('textarea[name="todo-list"]').value;
   

    const response = await fetch(`/api/todos`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            list
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/todos');
    } else {
        alert(response.statusText);
    }
    console.log(todo);
}


document.querySelector('.new-list-form').addEventListener('submit', newFormHandler);