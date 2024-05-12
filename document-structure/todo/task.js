const inputTask = document.getElementById('task__input');
const addTask = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const removeTask = document.querySelectorAll('.task__remove');

addTask.addEventListener('click', (event)=> {
    event.preventDefault();
    if (inputTask.value.trim() === '') {
        inputTask.value = '';
        
    }else{
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
    <div class="task__title">${inputTask.value}</div>
    <a href="#" class="task__remove">&times;</a>
    `;
    tasksList.appendChild(task);
    inputTask.value = '';
    // removeTask.addEventListener('click', ()=> {
    //     task.remove();
    
    
    }
    
}
)

tasksList.addEventListener('click', (event)=> {
    if(event.target.classList.contains('task__remove')) {
        event.target.parentElement.remove();
    }
})


