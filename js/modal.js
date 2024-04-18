(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  /**
   * Scroll to section
   */
  function scrollToSection() {
    function smoothScroll(targetEl, duration) {
      let target = document.querySelector(targetEl);
      if (!target) {
        console.log('елемент куди скролити не знайдено:', targetEl);
        return;
      }
      let targetPosition = target.getBoundingClientRect().top;
      let startPosition = window.pageYOffset;
      let startTime = null;
      const ease = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
      const animation = function (currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
    }
    const links = document.querySelectorAll('a.scroll-to');
    if (links) {
      links.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const currentTarget = this.getAttribute('href');
          !refs.modal.classList.contains('is-hidden')
            ? refs.modal.classList.add('is-hidden')
            : null;
          smoothScroll(currentTarget, 1000);
        });
      });
    }
  }
  scrollToSection();

  /**
   *  modal for mob-menu
   */

  let headerburger = document.querySelector('.header-burger');
  // let mobordermenu = document.querySelector('.mob-order-menu');
  let mobmenu = document.querySelector('.mob-menu');
  let modalbtn = document.querySelector('.modal-btn');

  headerburger.addEventListener('click', () => {
    mobmenu.classList.add('is-open');
  });

  // mobordermenu.addEventListener('click', () => {
  //   backdroporder.classList.add('is-open');
  // });

  modalbtn.addEventListener('click', e => {
    e.preventDefault();
    mobmenu.classList.remove('is-open');
  });
})();
