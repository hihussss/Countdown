const controls = Array.from(document.getElementsByClassName('font-size'))
const book = document.getElementsByClassName('book');
console.log(controls)

controls.forEach((control,index) => {
    control.addEventListener('click', (event) => {
    for(let i = 0; i < controls.length; i++) {
        console.log(controls[i])
        controls[i].classList.remove('font-size_active')
    }
        
        control.classList.toggle('font-size_active')
        if (control.classList.contains('font-size_active')) {
        if (control.getAttribute('data-size') === 'small') {
            book[0].classList.toggle('book_fs-small')
        }else if (control.getAttribute('data-size') === 'big') {
            book[0].classList.toggle('book_fs-big')
        }
    }
    })
})