$(document).ready(function () {
  $(".slider-advantages").slick({
    slidesToShow: 4, // Кількість відображених слайдів одночасно
    slidesToScroll: 1, // Кількість слайдів, які прокручуються за один раз
    dots: false,
    prevArrow: $(".prev-button"), // Селектор кнопки "назад"
    nextArrow: $(".next-button"), // Селектор кнопки "вперед"
    infinite: true, // Безкінечна прокрутка слайдів
  });
});

$(document).ready(function () {
  $(".slider-clients").slick({
    slidesToShow: 5, // Кількість відображених слайдів одночасно
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1615, // Розмір екрану, на якому змінити параметри
        settings: {
          slidesToShow: 4, // Кількість слайдів на екранах розміру 1024px і менше
        },
      },
      {
        breakpoint: 1320, // Розмір екрану, на якому змінити параметри
        settings: {
          slidesToShow: 2, // Кількість слайдів на екранах розміру 768px і менше
        },
      },
      {
        breakpoint: 400, // Розмір екрану, на якому змінити параметри
        settings: {
          slidesToShow: 1, // Кількість слайдів на екранах розміру 768px і менше
        },
      },
    ], // Кількість слайдів, які прокручуються за один раз
    dots: false,
    prevArrow: $(".prev-clients"), // Селектор кнопки "назад"
    nextArrow: $(".next-clients"), // Селектор кнопки "вперед"
    infinite: true, // Безкінечна прокрутка слайдів
    initialSlide: 0,
  });
});
