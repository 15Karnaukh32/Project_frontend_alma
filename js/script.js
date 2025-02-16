let bth_header_mob = document.querySelectorAll('.bth-header-mob')
let bth_close = document.querySelectorAll('.close')
let menu_header_mob = document.querySelector('.menu-header-mob')

for (let i = 0; i < bth_header_mob.length; i++){
    bth_header_mob[i].addEventListener('click', () =>{
        menu_header_mob.classList.add('active')
    })
}

bth_close[0].addEventListener('click', () =>{
    menu_header_mob.classList.remove('active')
})


