

function openList() {
   const drop = document.getElementsByClassName('dropdown__list');
   drop[0].classList.add('dropdown__list_active');
   const items = Array.from(document.getElementsByClassName('dropdown__item'));
   items.forEach((item) => {
       item.onclick = () => {
        item.getElementsByClassName('dropdown__link')[0].removeAttribute('href');
        value[0].textContent = item.getElementsByClassName('dropdown__link')[0].textContent;
        drop[0].classList.remove('dropdown__list_active');
       }
   })

}

const value = document.getElementsByClassName('dropdown__value');

value[0].addEventListener('click', openList);