const menuBars = document.querySelector('.menu-bars')
const menuMb = document.querySelector('.menu-mb')
const menuOverlay = document.querySelector('.menu-mb-ovlay')

menuBars.addEventListener('click', function() {
    menuMb.classList.add('active')
})

menuOverlay.addEventListener('click', function() {
    menuMb.classList.remove('active')
})