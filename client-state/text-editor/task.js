const edit = document.getElementById('editor');

const textSave = localStorage.getItem('text');



if (textSave){
    edit.value = textSave;
}

edit.addEventListener('change', () => {
    localStorage.setItem('text', edit.value); 
})




