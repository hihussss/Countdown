
const title = document.getElementById('poll__title');
const answer = document.getElementById('poll__answers');
const button = Array.from(document.getElementsByClassName('poll__answer'));

const xht = new XMLHttpRequest();


xht.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');


xht.send();



xht.addEventListener('readystatechange', () => {

    if (xht.status == 200 && xht.readyState == xht.DONE) {

        console.log(xht.responseText);
        const data = JSON.parse(xht.responseText); 
        const data1 = data['data'];
        const questionTitle = data1['title'];
        const queationsAnswers = data1['answers'];
        console.log(questionTitle)
        console.log(queationsAnswers)
        title.innerHTML = questionTitle;
        queationsAnswers.forEach(item => {
            answer.innerHTML += `<button class="poll__answer">${item}</button>`

            const button = Array.from(document.getElementsByClassName('poll__answer'));
            button.forEach(item => {

                item.addEventListener('click', () => {
                        confirm('Спасибо, ваш голос засчитан!')
                })
            })

        })

    }else if(xht.status == 404 && xht.readyState == xht.DONE){
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }else if(xht.status == 500 && xht.readyState == xht.DONE){
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }
    
    
})

