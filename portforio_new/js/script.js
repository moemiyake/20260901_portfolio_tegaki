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



// --- .fadein 設定 ---

// ロボットにやって欲しい事を設定
const animateFade = (entries, obs) => {
  // console.log('じゅわっ');

  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(1rem)', 'blur(0)'],
        },
        {
          duration: 1200,
          easing: 'ease',
          fill: 'forwards',
        }
      );

      // 一回ふわっとさせたら、監視の対象外にする。
      obs.unobserve(entry.target);
    }
  });

};

const options = {
  threshold: 0.9,
};

// 監視ロボット fadeObserber を用意
const fadeObserber = new IntersectionObserver(animateFade, options);

// 監視するものを設定
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach(element => {
  fadeObserber.observe(element);
});



// --- .fadein_2 設定 ---

// ロボットにやって欲しいことを書く
const animateFade2 = (entries2, obs2) => {
  // console.log('ふわっ');

  entries2.forEach((entry2) => {
    if (entry2.isIntersecting) {

      entry2.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.5rem)', 'blur(0)'],
          translate: ['0 5rem', 0],

        },
        {
          duration: 1500,
          easing: 'ease',
          fill: 'forwards',
        }
      );

      // 一回ふわっとさせたら、監視の対象外にする。
      obs2.unobserve(entry2.target);
    };
  });
};

const options2 = {
  threshold: 0.8,
};

// 監視ロボットを用意
const fadeObserber2 = new IntersectionObserver(animateFade2, options2);

// 監視するものを設定
const fadeElements2 = document.querySelectorAll('.fadein_2');
fadeElements2.forEach(element2 => {
  fadeObserber2.observe(element2);
});




// --- .fadein_3 設定 ---

// ロボットにやって欲しいことを書く
const animateFade3 = (entries3, obs3) => {
  // console.log('はやふわっ');

  entries3.forEach((entry3) => {
    if (entry3.isIntersecting) {

      entry3.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.5rem)', 'blur(0)'],
          translate: ['0 3rem', 0],

        },
        {
          duration: 800,
          easing: 'ease',
          fill: 'forwards',
        }
      );

      // 一回ふわっとさせたら、監視の対象外にする。
      obs3.unobserve(entry3.target);
    };
  });
};

const options3 = {
  threshold: 0.5,
};

// 監視ロボットを用意
const fadeObserber3 = new IntersectionObserver(animateFade3, options3);

// 監視するものを設定
const fadeElements3 = document.querySelectorAll('.fadein_3');
fadeElements3.forEach(element3 => {
  fadeObserber3.observe(element3);
});


// --- .fadein_4 設定 ---

// ロボットにやって欲しい事を設定
const animateFade4 = (entries4, obs4) => {
  console.log('はやじゅわっ(50%で実行)');

  entries4.forEach((entry4) => {
    if (entry4.isIntersecting) {

      entry4.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(1rem)', 'blur(0)'],
        },
        {
          duration: 800,
          easing: 'ease',
          fill: 'forwards',
        }
      );

      // 一回ふわっとさせたら、監視の対象外にする。
      obs4.unobserve(entry4.target);
    }
  });

};

const options4 = {
  threshold: 0.5,
};

// 監視ロボット fadeObserber を用意
const fadeObserber4 = new IntersectionObserver(animateFade4, options4);

// 監視するものを設定
const fadeElements4 = document.querySelectorAll('.fadein_4');
fadeElements4.forEach(element4 => {
  fadeObserber4.observe(element4);
});