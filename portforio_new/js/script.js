
// Swiper 
var swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });



      // header__humbergerを押すと、.is-openがつく。toggleタイプ。バニラJS
      const header = document.querySelector('header');
      header.addEventListener('click', () => {
        header.classList.toggle('is-open');
      });

  var swiper2 = new Swiper('.mySwiper2', {
    effect: 'cards',
  grabCursor: true,
      });