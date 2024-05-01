const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(index){
    return document.getElementById(`hole${index}`);
}


for (let i = 1; i <= 9; i++) {
    getHole(i).onclick =  () => {
        
        if (getHole(i).className === 'hole hole_has-mole') {
            dead.textContent=Number(dead.textContent)+1;
            if (dead.textContent==10){
                alert('Вы победили');
                dead.textContent=0;
                lost.textContent=0;
                return false;
                
                
            }
            else if (lost.textContent==5){
                alert('Вы проиграли');
                dead.textContent=0;
                lost.textContent=0;
                return false;
            }
            
        } else {
            if (dead.textContent==10){
                alert('Вы победили');
                dead.textContent=0;
                lost.textContent=0;
                return false;
                
            }
            else if (lost.textContent==5){
                alert('Вы проиграли');
                dead.textContent=0;
                lost.textContent=0;
                return false;
            }
            lost.textContent=Number(lost.textContent)+1;
        }
    }
}

