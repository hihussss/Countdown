const auth = document.getElementById('signin')
const button = document.getElementById('signin__btn')
const form = document.getElementById('signin__form')


if (localStorage.getItem('user_id')) {
    document.getElementById('user_id').textContent= localStorage.getItem('user_id')
    document.getElementById('welcome').classList.add('welcome_active')
}


document.button.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xht = new XMLHttpRequest();
    xht.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xht.send(formData);

    
    
    
    xht.addEventListener('load', () => {
        if (xht.status === 200) {
            const response = JSON.parse(xht.response);
            localStorage.setItem('user_id', response.user_id)
            document.getElementById('user_id').textContent= response.user_id
            document.getElementById('welcome').classList.add('welcome_active')
        
        }else {
            document.getElementById('welcome').textContent = 'Неверные логин или пароль'
        }
    
    })
    
    
    
    
    

})




