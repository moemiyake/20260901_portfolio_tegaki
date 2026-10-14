
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


// Exhibition(works-item.html の制作実績スライダー)
// カードが少ないとSwiperのループが無効になって止まるため、カードを2セットに増やしておく
const exhibitionTrack = document.querySelector('.mySwiper3 .swiper-wrapper');
if (exhibitionTrack) {
  exhibitionTrack.innerHTML += exhibitionTrack.innerHTML;
}

var swiper3 = new Swiper('.mySwiper3', {
  loop: true,
  slidesPerView: 'auto', // カード幅はCSS(180px)のまま
  spaceBetween: 20,
  // 1枚分(200px)を進める時間。小さいほど速い(SP: 約40px/秒、PC: 約67px/秒)
  speed: window.innerWidth >= 1024 ? 3000 : 5000,
  autoplay: { delay: 0, disableOnInteraction: false },
});
