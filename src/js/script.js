$(function() {

    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="next slide"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="prev slide"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {

            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false
            }
          }
        ]
      });

      $('.bottom-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '',
        prevArrow: '',
        responsive: [
          {
            breakpoint: 1024,
            settings: {

            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false
            }
          }
        ]
      });

});

// ! =================================

const appearOnLoad = document.querySelectorAll('.--appear-on-load');
appearOnLoad.forEach((e) => {
  e.classList.add('--active');
});

const serviceBlock = document.querySelector('.services__head'),
      serviceItems = document.querySelector('.services__items'),
      projectInner = document.querySelector('.project__inner'),
      teamInner = document.querySelector('.team__inner'),
      quote = document.querySelector('.quote'),
      footer = document.querySelector('.footer'),
      updoc = document.querySelector('.updoc');

window.onscroll = function() {
  if (document.documentElement.clientWidth <= 640) {
    if ((window.pageYOffset) >= 0) {
      serviceBlock.classList.add('--active');
      serviceItems.classList.add('--active');
    }
    if ((window.pageYOffset) >= 3150) {
      projectInner.classList.add('--active');
    }
    if ((window.pageYOffset) >= 4250) {
      teamInner.classList.add('--active');
    }
    if ((window.pageYOffset) >= 5050) {
      quote.classList.add('--active');
    }
    if ((window.pageYOffset) >= 5500) {
      footer.classList.add('--active');
      updoc.classList.add('--active');
    }
  } else {
    if ((window.pageYOffset) >= 460) {
      serviceBlock.classList.add('--active');
      serviceItems.classList.add('--active');
    }
    if ((window.pageYOffset) >= 1200) {
      projectInner.classList.add('--active');
    }
    if ((window.pageYOffset) >= 1600) {
      teamInner.classList.add('--active');
    }
    if ((window.pageYOffset) >= 2100) {
      quote.classList.add('--active');
    }
    if ((window.pageYOffset) >= 2500) {
      footer.classList.add('--active');
      updoc.classList.add('--active');
    }
  }
  
}