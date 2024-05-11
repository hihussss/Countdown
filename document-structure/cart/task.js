const decs = Array.from(document.getElementsByClassName('product__quantity-control_dec'));
const incs = Array.from(document.getElementsByClassName('product__quantity-control_inc'));

const value = Array.from(document.getElementsByClassName('product__quantity-value'));

const cartProduct = document.getElementsByClassName('cart__products');
const productAdds = Array.from(document.getElementsByClassName('product__add'));
const productImage = Array.from(document.getElementsByClassName('product__image'));




productAdds.forEach((add, index) => {
    add.addEventListener('click', () => {
        let count = 0;

        cartProduct[0].innerHTML = `<div class="cart__product" data-id=${count++}><img class="cart__product-image" src=${productImage[index].getAttribute('src')}><div class="cart__product-count">${value[index].textContent}</div></div>`;
        
    })
})





decs.forEach((dec, index) => {
    dec.addEventListener('click', () => {
        value[index].textContent = Number(value[index].textContent) - 1;
        if (value[index].textContent < 0){
            value[index].textContent = 0;
        }
    }) 
})


incs.forEach((inc,index) => {
    inc.addEventListener('click', () => {
        value[index].textContent = Number(value[index].textContent) + 1;
    })
     
})
