const body = document.body,
      burger = document.querySelector('.header__menu'),
      navLinks = document.querySelectorAll('.menu a'),
      menu = document.querySelector('.menu'),
      html = document.documentElement,
      accsItems = document.querySelectorAll('.faq__accs-item'),
      roadmap = document.querySelector('.roadmap'),
      roadmapBlocks = document.querySelectorAll('.roadmap__block'),
      closeBtn = document.querySelector('.menu__close');

function closeMenu() {
    menu.classList.remove('show-menu');
    burger.classList.remove('active-burger');
    body.classList.remove('body-locked')
    html.classList.remove('body-locked');
    menu.classList.remove('show-links');
}

function closeMenuByClick() {
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    })
  }
}

closeMenuByClick();

function showMenu() {
  burger.classList.toggle('active-burger');
  body.classList.add('body-locked')
  if (burger.classList.contains('active-burger')) {
    menu.classList.add('show-menu')
    body.classList.add('body-locked')
    html.classList.add('body-locked')

    setTimeout(() => {
      menu.classList.add('show-links')
    }, 500)
  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('body-locked')
    html.classList.remove('body-locked');

    closeMenu();
  }
}

if (burger) {
  burger.addEventListener('click', () => {
    showMenu();
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    closeMenu();
  })
}

if (Swiper) {

const teamSlider = new Swiper('.review__slider-inner', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    watchOverflow: true,
    speed: 700,
    effect: "fade",
    navigation: {
      nextEl: '.review__controls-btn--next',
      prevEl: '.review__controls-btn--prev',
    }
  })
}

// function showModal(modal) {
//   modal.classList.add('show-modal')
//   body.classList.add('body-locked')
//   html.classList.add('body-locked')
//  }

//  function hideModal(modal) {
//   modal.classList.remove('show-modal');
//   body.classList.remove('body-locked')
//   html.classList.remove('body-locked')
//  }

// modalCloseBtn.addEventListener('click', () => hideModal(modal));

// window.addEventListener('click', (e) => {
//    if (e.target === document.querySelector('.modal__container')) {
//     hideModal(modal);
//    }
// })

