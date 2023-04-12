import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
});


const refs = {
    headerBtn: document.querySelector('.header__btn'),
}

refs.headerBtn.addEventListener('click', onFirstModal);

function onFirstModal() {
    openModal('byNowModal')
}


function openModal(modalId) {
    // Отримуємо модальне вікно за ID
    const modal = document.getElementById(modalId);

    // Перевіряємо, чи існує модальне вікно
    if (!modal) {
        console.error(`Модальне вікно з ID "${modalId}" не знайдено.`);
        return;
    }

    // Додаємо клас "active" до модального вікна
    modal.classList.add('active');

    // Додаємо обробник кліку на кнопку закриття модального вікна
    modal.querySelector('.close__btn').addEventListener('click', closeModal);

    // Додаємо обробник кліку на фон, щоб закривати модальне вікно при кліку на фон
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Забороняємо прокрутку сторінки під час відкриття модального вікна
    document.body.style.overflow = 'hidden';

    function closeModal() {
        // Видаляємо клас "active" з модального вікна
        modal.classList.remove('active');

        // Видаляємо обробник кліку на кнопку закриття модального вікна
        modal.querySelector('.close__btn').removeEventListener('click', closeModal);

        // Видаляємо обробник кліку на фон
        modal.removeEventListener('click', closeModal);

        // Дозволяємо прокрутку сторінки після закриття модального вікна
        document.body.style.overflow = '';
    }
}

// openModal('first-modal')