const body = document.body,
      burger = document.querySelector('.header__menu'),
      navLinks = document.querySelectorAll('.menu a'),
      menu = document.querySelector('.menu'),
      html = document.documentElement,
      accsItems = document.querySelectorAll('.faq__accs-item'),
      roadmap = document.querySelector('.roadmap'),
      roadmapBlocks = document.querySelectorAll('.roadmap__block'),
      closeBtn = document.querySelector('.menu__close');

if (roadmapBlocks) {

  const blocksOptions = {
    rootMargin: "-20%"
  }

  const BlocksObserver = new IntersectionObserver(
    function(
    entries,
    BlocksObserver
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active-block')
      }
    })
  }, blocksOptions)

  roadmapBlocks.forEach(block => {
    block.classList.remove('active-block')
    BlocksObserver.observe(block)
  })
}


if (accsItems) {
  accsItems.forEach(item => {
    item.addEventListener('click', function() {

      item.classList.toggle('faq__accs-item--active');

      hiddenBlock = this.querySelector('.faq__accs-hidden');
      hiddenContent = this.querySelector('.faq__accs-content');

      if (item.classList.contains('faq__accs-item--active')) {
        hiddenBlock.style.maxHeight = `${hiddenContent.scrollHeight}px`;
      } else {
        hiddenBlock.style.maxHeight = 0;
      }

    })
  })
}

function closeMenu() {
    menu.classList.remove('show-menu');
    burger.classList.remove('active-burger');
    body.classList.remove('body-locked')
    html.classList.remove('body-locked');
    menu.classList.remove('show-links');
}
try {
  document.querySelector('.open-case__open').addEventListener('click', () => winModal.showModal())
} catch(e) {
  console.log(e);
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
  const sliderFirst = new Swiper('.slider__body--first', {
    slidesPerView: 2,

    autoplay: {
      delay: 5000
    },
    spaceBetween: 10,
    allowTouchMove: false,
    breakpoints: {
      1100: {
        slidesPerView: 3,
      },
      1366: {
        spaceBetween: 20,
        slidesPerView: 5
      }
    }
  });

  const sliderSecond = new Swiper('.slider__body--second', {
    slidesPerView: 2,

    autoplay: {
      delay: 7000
    },
    allowTouchMove: false,
    spaceBetween: 10,
    breakpoints: {
      1100: {
        slidesPerView: 3,
      },
      1366: {
        spaceBetween: 20,
        slidesPerView: 5
      }
    }
  })

  const teamSlider = new Swiper('.team__slider-inner', {
    slidesPerView: 'auto',
    spaceBetween: 19,
    allowTouchMove: false,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: '.team__navigation-item--right',
      prevEl: '.team__navigation-item--left',
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

