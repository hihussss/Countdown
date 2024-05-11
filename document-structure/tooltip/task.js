const links = Array.from(document.getElementsByClassName('has-tooltip'));

let div = document.createElement('div');
div.classList.add('tooltip');

div.dataset.position = 'bottom';




links.forEach((link)=>{
    link.addEventListener('mouseover', (event)=>{
        
        
        div.classList.add('tooltip_active');
        link.style.position = 'relative';
        div.style.position = 'absolute';
        pos = link.getAttribute('data-position');
        position(pos);
        div.textContent = link.getAttribute('title');
        link.insertBefore(div, link.firstChild);
        
    })

    link.addEventListener('mouseout', (event)=>{
       div.classList.remove('tooltip_active'); 
    })
    

    function position(pos){
        if (pos == "top"){
            div.style.top = (link.offsetTop - 15) + 'px';
    }else if (pos == "bottom"){
        div.style.bottom = (link.offsetTop + 15) + 'px';
    }else if (pos == "left"){
        div.style.left = (link.offsetLeft - 15) + 'px';
    }else if (pos == "right"){
        div.style.right = (link.offsetLeft + 15) + 'px';
    }
    }
})


