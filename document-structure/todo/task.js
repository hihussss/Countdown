const inputTask = document.getElementById('task__input');
const addTask = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

addTask.addEventListener('click', ()=> {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
    <div class="task__title">${inputTask.value}</div>
    <a href="#" class="task__remove">&times;</a>
    `;
    tasksList.appendChild(task);
    inputTask.value = '';
})


const removeTask = document.querySelectorAll('.task__remove');

for (let i = 0; i < removeTask.length; i++) {
    removeTask[i].addEventListener('click', ()=> {
        removeTask[i].remove();
    })
}