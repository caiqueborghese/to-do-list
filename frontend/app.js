const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('task-title').value;

    const response = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });

    const newTask = await response.json();
    addTaskToList(newTask);
});

function addTaskToList(task) {
    const li = document.createElement('li');
    li.textContent = task.title;
    taskList.appendChild(li);
}
