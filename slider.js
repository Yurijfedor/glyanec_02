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
    slidesToScroll: 1, // Кількість слайдів, які прокручуються за один раз
    dots: false,
    prevArrow: $(".prev-clients"), // Селектор кнопки "назад"
    nextArrow: $(".next-clients"), // Селектор кнопки "вперед"
    infinite: true, // Безкінечна прокрутка слайдів
    initialSlide: 0,
  });
});
