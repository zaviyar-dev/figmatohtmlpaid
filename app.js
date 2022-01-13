let indexValue = 1
const btn_slide_show = (e)=>{showSlide(indexValue = e)}
const showSlide = (e)=>{
    var slides = document.querySelectorAll('.slides')
    var btns = document.querySelectorAll('.btn-slider')
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = '#fff'
    }
    slides[indexValue - 1].style.display = 'flex'
    btns[indexValue - 1].style.backgroundColor = '#5454d4'
}

const showMenu = ()=>{
    document.getElementsByClassName('responsove-nav')[0].style.top = '0'
}
const hideMenu = ()=>{
    document.getElementsByClassName('responsove-nav')[0].style.top = '-18vw'
}