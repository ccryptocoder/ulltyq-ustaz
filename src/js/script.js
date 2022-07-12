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

});