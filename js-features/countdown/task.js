const span = document.getElementById('timer');
let count = span.textContent;
let date = new Date(0);


let tictac = setInterval(() => {
    count = Number(count)-1
    date.setSeconds(count)
    let rezult = date.toISOString().slice(11, 19);
    
    span.textContent = rezult
    
    if (span.textContent == "00:00:00") {
        clearInterval(tictac);
        setTimeout(() => alert('Вы победили в конкурсе!'), 500);
        setTimeout(() => {
        location='test1.xlsx'    
        }, 1000);  
        
    
    }
    
}, 1000);



