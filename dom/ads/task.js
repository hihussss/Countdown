
const rotors = document.querySelectorAll('.rotator span');
let count =1

setInterval(() => {

    rotors.forEach(function(elem, index) {
        elem.classList.toggle("rotator__case", count !== index);
      });

      count++;
      if (count >= rotors.length) {
        count = 0;
      }

     
},1000)





