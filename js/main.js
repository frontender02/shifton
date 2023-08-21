AOS.init();
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    function bodyLock(){
        body.classList.toggle('lock');
    }

    // Lang 
    const select = document.querySelector('.lang__list');
    const selectBtn = document.querySelector('.lang__btn');
    const optionItem = select.querySelectorAll('.lang__list-item');
    selectBtn.addEventListener('click', () => {
        select.classList.toggle('active')
        selectBtn.classList.toggle('active')
    })
    optionItem.forEach((option) => {
        option.addEventListener('click', () => {
            selectBtn.innerText = option.innerText;
            select.classList.remove('active');
            selectBtn.classList.remove('active')
        })
    })

    // Menu 
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.header__btn-menu');
    if(menu && menuBtn){
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
            bodyLock();
        })
    }
})