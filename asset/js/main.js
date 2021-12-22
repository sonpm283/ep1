const menuBars = document.querySelector('.menu-bars')
const menuMb = document.querySelector('.menu-mb')
const menuOverlay = document.querySelector('.menu-mb-ovlay')
const topDown = document.querySelectorAll('.top-down')
const toLeft = document.querySelectorAll('.to-left')
menuBars.addEventListener('click', function() {
    menuMb.classList.add('active')
})

menuOverlay.addEventListener('click', function() {
    menuMb.classList.remove('active')
})

window.onload = function()
{
    topDown.forEach(function(event) {
        event.classList.add('active')
    })
    toLeft.forEach(function(event) {
        event.classList.add('active')
    })
};

window.addEventListener('scroll', function() {
    const content = document.querySelector('.service')
    const contentPosition = content.getBoundingClientRect().top
    const screenPosition = window.innerHeight/1.7
    console.log(contentPosition)
    console.log(screenPosition)
    const homeSectionImg = document.querySelectorAll('.home-section-img')
    const homeSectionContent = document.querySelectorAll('.home-section-content')

    homeSectionContent.forEach(function(e) {
        let homeSectionContentPos = e.getBoundingClientRect().top
        if(homeSectionContentPos < screenPosition) {
            e.classList.add('active')
        }else {
            e.classList.remove('active')
        }
    })
    homeSectionImg.forEach(function(e) {
        let homeSectionImgPos = e.getBoundingClientRect().top
        if(homeSectionImgPos < screenPosition) {
            e.classList.add('active')
        }else {
            e.classList.remove('active')
        }
    })

    if(contentPosition < screenPosition) {
        content.classList.add('active')
    }else {
        content.classList.remove('active')
    }
})

