const popup =  document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');


if (getCookie('popup') !== 'close') {
    popup.classList.add('modal_active');
}

close.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    setCookie('popup', 'close');
   
    console.log(document.cookie)
    console.log(getCookie('popup'))
    
})

function setCookie(name,value,options = {}) {
    options = {
        path: '/',
        ...options
    };
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split(';');
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        if (decodeURIComponent(pair[0]) === name) {
            return decodeURIComponent(pair[1]);
        }
    }
}

