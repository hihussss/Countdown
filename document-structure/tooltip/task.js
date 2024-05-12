const links = Array.from(document.getElementsByClassName('has-tooltip'));

let div = document.createElement('div');
div.classList.add('tooltip');





links.forEach((link)=>{
    link.addEventListener('click', (event)=>{
        event.preventDefault();
        
    
        if(event.target.getAttribute('title')==div.textContent){
            
                div.classList.toggle('tooltip_active');
            
        }else{
            div.classList.add('tooltip_active');
            const {top, left,height, width} = link.getBoundingClientRect();
            div.style.top = `${top+height}px`;
            div.style.left = `${left}px`;
            div.textContent = link.getAttribute('title');
            link.insertAdjacentElement('afterend', div);
        }
        
    })

    
    

   
})


