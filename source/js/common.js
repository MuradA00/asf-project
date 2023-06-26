const body = document.body,
      burger = document.querySelector('.header__menu'),
      navLinks = document.querySelectorAll('.nav a'),
      menu = document.querySelector('.nav'),
      html = document.documentElement,
      accsItems = document.querySelectorAll('.faq__accs-item'),
      roadmap = document.querySelector('.roadmap'),
      roadmapBlocks = document.querySelectorAll('.roadmap__block'),
      closeBtn = document.querySelector('.menu__close'),
      modalTriggersBtns = document.querySelectorAll('.services__grid-btn'),
      modals = [...document.querySelectorAll('.services__modal')],
      closeBtns = document.querySelectorAll('.services__modal-close'),
      modalLinksToForm = document.querySelectorAll('.services__modal-btn'),
      header = document.querySelector('.header');

function showModal() {
  body.classList.add('locked')
  document.documentElement.classList.add('locked')
}

function hideModal() {
  body.classList.remove('locked')
  document.documentElement.classList.remove('locked')
}

if (modals) {
  closeBtns.forEach(btn => btn.addEventListener('click', () => {
    modals.map(modal => modal.classList.remove('services__modal--active'), hideModal());
  }))

  modalLinksToForm.forEach(btn => {
    btn.addEventListener('click', () =>
    window.location = btn.getAttribute('href'),
     modals.map(modal => {
      modal.classList.remove('services__modal--active');
      hideModal();
     }))
  })

  modalTriggersBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const attr = btn.getAttribute('data-trigger');
      modals.find(modal => {
        if (modal.id === attr) {
          showModal();
          modal.classList.add('services__modal--active');
        }
      })
    })
  })
}

if (header) {
  window.addEventListener('scroll', () => {
    headerTopPosition = header.offsetTop;

    window.pageYOffset > (headerTopPosition + (header.clientHeight / 2)) ? header.classList.add('header--fixed') : header.classList.remove('header--fixed')
  })
}

function closeMenu() {
    menu.classList.remove('nav--active');
    burger.classList.remove('active-burger');
    body.classList.remove('locked')
    html.classList.remove('locked');
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
  body.classList.add('locked')
  if (burger.classList.contains('active-burger')) {
    menu.classList.add('nav--active')
    body.classList.add('locked')
    html.classList.add('locked')

    header.style.setProperty('--header-py', '1rem');


    setTimeout(() => {
      menu.classList.add('show-links')
    }, 500)
  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('locked')
    html.classList.remove('locked');

    header.style.setProperty('--header-py', '.5rem');

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

if (AOS) {
  AOS.init({
    once: true,
    startEvent: 'load',
    offset: 165
  })
}

