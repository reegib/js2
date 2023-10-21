const nextBtn = document.querySelector('.next')
const backBtn = document.querySelector('.back')
const slides = document.querySelector('.slides')
const countS1 = document.querySelectorAll('.slide').length

let width = 1100
let left = 0

nextBtn.addEventListener('click', ()=>{
    left = (left - width)
    if(left > -(countS1*width)){
        slides.style.left = left + 'px'
    }else{
        left = 0;
        slides.style.left = '0px'
    }
})
left = -(countS1 * width)
backBtn.addEventListener('click', ()=>{
    if(left == 0){
       left = -(countS1*width - width);
       slides.style.left = left + 'px'
    }else if(left >= -(countS1*width)){
        left = (left + width);
        slides.style.left = left + 'px'
        console.log(left)
        
    }
})