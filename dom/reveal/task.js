const reveals = Array.from(document.querySelectorAll('.reveal'));



function color(reveals){
    const { top, bottom } = reveals.getBoundingClientRect();


if (bottom>0 && top < window.innerHeight) {
    reveals.classList.add('reveal_active');    
}
}

reveals.forEach((reveal) => {
window.addEventListener('scroll', () => color(reveal))
})