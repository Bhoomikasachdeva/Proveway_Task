// Target the all dropdowns.
let box = document.querySelectorAll('.pair_parent')

//apply and remove the active class
box[0].addEventListener('click', ()=>{
         box[0].classList.add('active')
         box[1].classList.remove('active')
         box[2].classList.remove('active')

})

box[1].addEventListener('click', ()=>{
         box[1].classList.add('active')
         box[0].classList.remove('active')
         box[2].classList.remove('active')

})

box[2].addEventListener('click', ()=>{
         box[2].classList.add('active')
         box[1].classList.remove('active')
         box[0].classList.remove('active')

})