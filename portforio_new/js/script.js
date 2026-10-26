// Swiper 
document.querySelectorAll('.top__works .mySwiper .top__works__image').forEach((frame) => {
  const image = frame.querySelector('img');
  if (image) {
    frame.style.setProperty('--works-slide-image', `url("${image.src}")`);
  }
});

var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      spaceBetween: 50,
      coverflowEffect: {
        rotate: 12,
        depth: 80,
      },
    },
    1024: {
      slidesPerView: 2.1,
      spaceBetween: 100,
      coverflowEffect: {
        rotate: 8,
        depth: 80,
      },
    },
  },
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



// ハンバーガーメニュー
const header = document.querySelector('header');
const hamburger = document.querySelector('.header__hamburger');
const mobileNavigation = document.querySelector('.header__list--sp');

if (header && hamburger && mobileNavigation) {
  const setMenuOpen = (isOpen) => {
    header.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    mobileNavigation.setAttribute('aria-hidden', String(!isOpen));
    mobileNavigation.inert = !isOpen;
  };

  hamburger.addEventListener('click', () => {
    setMenuOpen(hamburger.getAttribute('aria-expanded') !== 'true');
  });

  mobileNavigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      hamburger.focus();
    }
  });
}

// 「動きを減らす」設定の人にはアニメーションを止める
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

var swiper2 = new Swiper('.mySwiper2', {
  effect: 'cards',
  grabCursor: true,
  speed: prefersReducedMotion ? 0 : 700, // めくる速さ(ms)。初期値300より少しゆっくり
  cardsEffect: {
    rotate: true,
    perSlideOffset: 6, // 後ろのカードをずらす量(初期値8)
    perSlideRotate: window.innerWidth >= 1024 ? 1.5 : 3, // 後ろのカードを傾ける角度(初期値2)。PCは横長なので控えめに
    slideShadows: false, // 黒い影を消して、カードの縁取りで重なりを見せる
  },
  keyboard: { enabled: true }, // 矢印キーでもめくれる
  pagination: {
    el: '.swiper2-pagination',
  },
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