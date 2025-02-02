const swiper = new Swiper('.swiper', {
    direction: 'horizontal',  // Горизонтальный или вертикальный слайдер
    loop: true,               // Бесконечная прокрутка
    pagination: {
        el: '.swiper-pagination', // Элемент для точек навигации
        clickable: true,         // Точки можно кликать
    },
    navigation: {
        nextEl: '.swiper-button-next', // Кнопка "вперёд"
        prevEl: '.swiper-button-prev', // Кнопка "назад"
    },
});

function toggleSlide(item) {
    document.querySelectorAll(item).forEach((element, i) => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            // Получаем соответствующие элементы по индексу
            const contents = document.querySelectorAll('.catalog-item__content');
            const lists = document.querySelectorAll('.catalog-item__list');
            // Переключаем классы
            contents[i].classList.toggle('catalog-item__content--active');
            lists[i].classList.toggle('catalog-item__list--active');
        });
    });
}

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');