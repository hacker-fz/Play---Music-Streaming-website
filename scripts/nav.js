const hamburger = document.querySelector('.hamburger-icon')
const navlinks = document.querySelector('.nav-links')
const crossbtn = document.querySelector(' .hamburger-icon i')

hamburger.addEventListener('click' , (e) => {
    navlinks.classList.toggle('open')

    const isOpen =  navlinks.classList.contains('open')
    crossbtn.setAttribute('class' , isOpen ? "ri-close-line":"ri-menu-line")
})

navlinks.addEventListener('click'  , (e) => {
    navlinks.classList.remove('open');
    crossbtn.setAttribute('class' , 'ri-menu-line')
})
