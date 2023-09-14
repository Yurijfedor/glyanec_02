$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4, // Кількість відображених слайдів одночасно
    slidesToScroll: 1, // Кількість слайдів, які прокручуються за один раз
    dots: false,
    prevArrow: $(".prev-button"), // Селектор кнопки "назад"
    nextArrow: $(".next-button"), // Селектор кнопки "вперед"
    infinite: true, // Безкінечна прокрутка слайдів
  });
});
