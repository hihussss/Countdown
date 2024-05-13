const controls = Array.from(document.getElementsByClassName('font-size'))
const book = document.getElementsByClassName('book');
const colorText = document.querySelectorAll('.book__control_color > a');
const colorBg = document.querySelectorAll('.book__control_background > a');
console.log(colorText)

controls.forEach((control,index,controls) => {
    control.addEventListener('click', (event) => {
        event.preventDefault();
        removeActiveClass(controls);
        removeClassBook(controls);
        control.classList.toggle('font-size_active')
    if (event.target.classList.contains('font-size_small')){
        book[0].classList.toggle('book_fs-small')
    }else if (event.target.classList.contains('font-size_big')){
        book[0].classList.toggle('book_fs-big')
    }else{
        book[0].className = 'book';
    }
        
        
    
    })
})


// Удаление классов из книги
function removeClassBook(contr) {
    if (contr[0].classList.contains('font-size')) {   
        for (let name of book[0].classList){
            if (name === 'book_fs-small' || name === 'book_fs-big') {
                book[0].classList.remove(name)
            }
        }
    
    }else if (contr[0].closest('div.book__control_color')) {
        for (let name of book[0].classList){
            if (name === 'book_color-black' || name === 'book_color-gray' || name === 'book_color-whitesmoke') {
                book[0].classList.remove(name)
            }
        }
    }else if (contr[0].closest('div.book__control_background')) {
        for (let name of book[0].classList){
            if (name === 'bg_color_black' || name === 'bg_color_gray' || name === 'bg_color_white') {
                book[0].classList.remove(name)
    }
        }
            
            }
            }
    
    


// Удаление активного класса у кнопки. 
function removeActiveClass(contr) {
if (contr[0].classList.contains('font-size')) {   
for(let i = 0; i < contr.length; i++) {
    contr[i].classList.remove('font-size_active')
}
}else if (contr[0].classList.contains('color')) {
    for(let i = 0; i < contr.length; i++) {
        contr[i].classList.remove('color_active')
    }
}
}

colorText.forEach((text,index,colorText) => {
    text.addEventListener('click', (event) => {
        event.preventDefault();
        removeActiveClass(colorText);
        removeClassBook(colorText);
        text.classList.toggle('color_active')
    if (event.target.classList.contains('text_color_black')){
        book[0].classList.toggle('book_color-black')
    }else if (event.target.classList.contains('text_color_gray')){
        book[0].classList.toggle('book_color-gray')
    }else if (event.target.classList.contains('text_color_whitesmoke')){
        book[0].classList.toggle('book_color-whitesmoke')}
            
    })
})



colorBg.forEach((bg,index,colorBg) => {
    bg.addEventListener('click', (event) => {
        event.preventDefault();
        removeActiveClass(colorBg);
        removeClassBook(colorBg);
        bg.classList.toggle('color_active')
    if (event.target.classList.contains('bg_color_black')){
        book[0].classList.toggle('bg_color_black')
    }else if (event.target.classList.contains('bg_color_gray')){
        book[0].classList.toggle('bg_color_gray')
    }else if (event.target.classList.contains('bg_color_white')){
        book[0].classList.toggle('bg_color_white')}
            
    })
})