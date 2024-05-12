
const item = document.getElementById('items');
const loader = document.getElementById('loader');
const xht = new XMLHttpRequest();






// xht.onload = function() {
//     // loader.classList.add('loader_active');
//     if (xht.status == 200) {
//         // loader.classList.remove('loader_active');
        
//         console.log(dataList);
        
//         }  
//     }
    
xht.addEventListener('readystatechange', () => {
    loader.classList.add('loader_active');
    if (xht.readyState === xht.DONE) {
        loader.classList.remove('loader_active');
        const data = JSON.parse(xht.responseText);
        const dataLists = data['response']['Valute'];
        console.log(dataLists);
        for(let i in dataLists){
            const hj = dataLists[i];
            
            const code =  hj.CharCode;
            const value = hj.Value;
            
            item.innerHTML += `<div class="item"> <div class="item__code">${code}</div><div class="item__value">${value}</div><div class="item__currency">руб.</div></div>`
        }
    }

})
    

xht.open('GET',"https://students.netoservices.ru/nestjs-backend/slow-get-courses");

xht.send();
    