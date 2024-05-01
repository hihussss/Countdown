const img = document.getElementById('cookie');
const span = document.getElementById('clicker__counter');
const span1 = document.getElementById('clicker__speed');
let flag = true;
let start;
let end;
let rezult;



function clicker() { 
    
    if (flag) {
        end = new Date().getTime();
        img.onclick = () => {
            start = new Date().getTime();
            img.width -= 10;
            img.height -= 10;
            
            span.textContent = Number(span.textContent) + 1;
        }
        
         
        flag = false;
        
        
    } else {
        start = new Date().getTime();
        img.onclick = () => {
            end = new Date().getTime();
            img.width += 10;
            img.height += 10;
            
            span.textContent = Number(span.textContent) + 1;
            
        }
        flag = true;
         
    }
      
}



img.addEventListener('click', clicker);
    

rezult = end-start;
rezult = Math.floor(rezult/1000);
console.log(start);
console.log(end);
console.log(rezult);
span1.textContent = Number(span1.textContent)+(1/(rezult)); 







