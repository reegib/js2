const accordions =  document.querySelectorAll('.menu-item')
const accordion =  document.querySelectorAll('.container')


accordions.forEach( x => {
    x.addEventListener('click', function(){
        const el = x.lastElementChild
        el.classList.toggle('submenu_active');
        
    })
})

accordion.forEach( x => {
    x.addEventListener('click', function(){
        const img = x.lastElementChild
        img.classList.toggle('img_active')
        
    })
})
