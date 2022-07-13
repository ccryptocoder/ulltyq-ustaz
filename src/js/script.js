window.addEventListener('DOMContentLoaded', () => {
    const popupOpen = Array.from(document.querySelectorAll('[data-popup-open]'));
    const popupClose = document.querySelector('[data-popup-close]');
    const popup = document.querySelector('[data-popup]');

    popupOpen.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('popup_active');
        });
    });

    popupClose.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.remove('popup_active');
    });

    const swiper = new Swiper('.swiper', {
        // Navigation arrows
        navigation: {
          nextEl: '.adv__slider-nav-dt .adv__button-next',
          prevEl: '.adv__slider-nav-dt .adv__button-prev',
        },
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 3,
              spaceBetween: 110
            }
        },
        draggable: true,
    });

    const accItem = Array.from(document.querySelectorAll('[data-acc-item]'));
    const accHead = Array.from(document.querySelectorAll('[data-acc-head]'));
    const accBody = Array.from(document.querySelectorAll('[data-acc-body]'));

    accHead.forEach((head, i) => {
        head.addEventListener('click', () => {
            accItem[i].classList.toggle('faq-acc__item_active');
            if (accBody[i].style.maxHeight) {
                accBody[i].style.maxHeight = null;
              } else {
                accBody[i].style.maxHeight = accBody[i].scrollHeight + "px";
              }
          
        })
    })
});