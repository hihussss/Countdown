const decs = Array.from(document.getElementsByClassName('product__quantity-control_dec'));
const incs = Array.from(document.getElementsByClassName('product__quantity-control_inc'));

const value = Array.from(document.getElementsByClassName('product__quantity-value'));

const cartProduct = Array.from(document.getElementsByClassName('cart__products'));

const productAdds = Array.from(document.getElementsByClassName('product__add'));
const productImage = Array.from(document.getElementsByClassName('product__image'));

const productId = Array.from(document.getElementsByClassName('product'))




productAdds.forEach((add, index) => {
    add.addEventListener('click', () => {
        const cards = Array.from(document.getElementsByClassName('cart__product'));
        const productInCard = cards.find((card)=> card.getAttribute('data-id') === productId[index].getAttribute('data-id'));
        console.log(cards)
        console.log(productInCard)
        
        console.log(Number(value[index].textContent))
        
        if(productInCard) {
            productInCard.querySelector('.cart__product-count').textContent = Number(productInCard.querySelector('.cart__product-count').textContent) + Number(value[index].textContent);
        } else {
            cartProduct[0].innerHTML += `<div class="cart__product" data-id=${productId[index].getAttribute('data-id')}><img class="cart__product-image" src=${productImage[index].getAttribute('src')}><div class="cart__product-count">${value[index].textContent}</div><a href="#" class="cart__remove">&times;</a></div>`;
        }
        
        
    })
})

cartProduct[0].addEventListener('click', (event) => {
    if (event.target.classList.contains('cart__remove')) {
        event.target.parentElement.remove();
    }
})





decs.forEach((dec, index) => {
    dec.addEventListener('click', () => {
        value[index].textContent = Number(value[index].textContent) - 1;
        if (value[index].textContent <= 0){
            value[index].textContent = 1;
        }
    }) 
})


incs.forEach((inc,index) => {
    inc.addEventListener('click', () => {
        value[index].textContent = Number(value[index].textContent) + 1;
    })
     
})
