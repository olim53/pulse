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