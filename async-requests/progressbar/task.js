const form = document.getElementById("form");
const progress = document.getElementById("progress");
const fileInput = document.getElementById('file');








form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const xht =new XMLHttpRequest();


xht.upload.addEventListener('progress',  function(event) {
    const percentLoaded = Math.round((event.loaded / event.total) * 100)

    progress.value = percentLoaded
});

xht.addEventListener('load', function(event) {
    alert("Файл успешно загружен");
});


xht.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
xht.send(formData);


})

  


