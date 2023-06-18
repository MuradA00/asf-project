const accsItems = document.querySelectorAll('.faq__accs-item');

accsItems.forEach(item => {
  item.addEventListener('click', function() {
    item.classList.toggle('collapse-hidden')
    const hiddenBlock = this.querySelector('.faq__accs-hidden')
    const hiddenContent = this.querySelector('.faq__accs-content')

    if (this.classList.contains('collapse-hidden')) {
      hiddenBlock.style.maxHeight = `${hiddenContent.scrollHeight}px`;
    }
    if (!this.classList.contains('collapse-hidden')) {
        hiddenBlock.style.maxHeight = 0;
    }
  })
})
