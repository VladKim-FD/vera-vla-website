let position = 0;
let slidesToShow = 3;
const slidesToScroll = 1;

const slider1 = document.querySelector('.slider1');
const slider1Content = document.querySelector('.slider1-content');
const slides1 = document.querySelectorAll('.slider1-slide');

const prev1 = document.querySelector('.slider1-prev');
const next1 = document.querySelector('.slider1-next');

const slidesCount = slides1.length;
const slideWidth = slider1.offsetWidth / slidesToShow;

const movePosition = slidesToScroll * slideWidth;

if(window.screen.availWidth <= 640 + 'px'){
    slidesToShow = 2;
}

slides1.forEach(slide => {
    slide.style.minWidth = slideWidth - 40 + 'px'
})

// const checkBtn = () => {
//     next1.setAttribute('disabled', 
//     position === 0
//     )
//     prev1.setAttribute('disabled',
//      position <= -(slidesCount - slidesToShow ) * slideWidth ) 
// }  

const setPosition = () => {
    slider1Content.style.transform = `translateX(${position}px)`;
    // checkBtn();
}

prev1.addEventListener('click', () => {
    const slidesLeft = Math.abs(position) / slideWidth;
    position += slidesLeft >= movePosition ? movePosition : slidesLeft * slideWidth;;

    setPosition();

    
})
next1.addEventListener('click', () => {
    const slidesLeft = slidesCount -(Math.abs(position) + slidesToShow * slideWidth) / slideWidth;
    position -= slidesLeft >= movePosition ? movePosition : slidesLeft * slideWidth;
    // position -= movePosition;

    setPosition();

    if(window.offsetWidth == 640 + 'px'){
        slidesToShow = 2;
    }
})


// checkBtn()

let position2 = 0;
const slidesToShow2 = 3;
const slidesToScroll2 = 1;

const slider2 = document.querySelector('.slider2');
const slider2Content = document.querySelector('.slider2-content');
const slides2 = document.querySelectorAll('.slider2-slide');

const prev2 = document.querySelector('.slider2-prev');
const next2 = document.querySelector('.slider2-next');

const slidesCount2 = slides2.length;
const slideWidth2 = slider2.offsetWidth / slidesToShow2;

const movePosition2 = slidesToScroll2 * slideWidth2;

slides2.forEach(slide => {
    slide.style.minWidth = slideWidth2 - 40 + 'px'
})

// const checkBtn = () => {
//     next1.setAttribute('disabled', 
//     position === 0
//     )
//     prev1.setAttribute('disabled',
//      position <= -(slidesCount - slidesToShow ) * slideWidth ) 
// }  

const setPosition2 = () => {
    slider2Content.style.transform = `translateX(${position2}px)`;
    // checkBtn();
}

prev2.addEventListener('click', () => {
    const slidesLeft = Math.abs(position2) / slideWidth2;
    position2 += slidesLeft >= movePosition2 ? movePosition2 : slidesLeft * slideWidth2;

    setPosition2();
})
next2.addEventListener('click', () => {
    const slidesLeft = slidesCount2 - (Math.abs(position2) + slidesToShow2 * slideWidth2) / slideWidth2;
    position2 -= slidesLeft >= movePosition2 ? movePosition2 : slidesLeft * slideWidth2;
    // position -= movePosition;

    setPosition2();
})


// checkBtn()

// scroll to Top
const scrollBtn = document.querySelector('.window-scroll');

window.onload = () =>{
    window.onscroll = function() {
      if(window.scrollY > 300){
        progressBar();

        scrollBarAnimation();
        window.scrollY = null;
      }
    }

    window.onscroll = () => {
        if(window.scrollY > 700){
            scrollBtn.classList.add('scroll-active')
        }else{
            scrollBtn.classList.remove('scroll-active')
        }
    }
  }

//   burger Menu
const navbarBtn = document.querySelector('.input');
const phone = document.querySelector('.navbar__phone');

phone.addEventListener('mouseup', function (e) {
    e.stopPropagation();
})
document.addEventListener('mouseup', function (e) {
    if (e.target != navbarBtn) {
        phone.style = `right: -301px; transition : left 0.5s; z-index: 21;`;
        navbarBtn.classList.remove('active');
    }
})

