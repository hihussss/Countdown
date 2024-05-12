const form = document.getElementById("form");
const progress = document.getElementById("progress");








document.forms.form.addEventListener('submit', (event) => {
    event.preventDefault();
    

    const xht =new XMLHttpRequest();

xht.addEventListener('readystatechange', () => {
    if (xht.readyState === xht.DONE) {
setInterval(() => {
    progress.value = progress.value + 0.1;
},1000)
}
});



xht.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

const formData = new FormData(form);

xht.send(formData);


})

  


