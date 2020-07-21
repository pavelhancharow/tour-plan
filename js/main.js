var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [37.77229036108529, -122.4198695],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14
  }, {
    searchControlProvider: 'yandex#search'
  }),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
      }
    }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blackStretchyIcon'
    });

  myMap.geoObjects
    .add(myGeoObject)
    .add(new ymaps.Placemark([37.77229036108529, -122.4198695], {
      balloonContent: 'Hotel Hilton'
    }, {
      preset: 'islands#dotIcon',
      iconColor: '#EC1F46'
    }))
}