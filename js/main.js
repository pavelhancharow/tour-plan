$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button-next',
      prevEl: '.hotel-slider__button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button-next',
      prevEl: '.reviews-slider__button-prev',
    },
    effect: "flip",
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

  // parallax.js
  $('.newsletter').parallax({ imageSrc: 'img/newsletter-bg.jpeg', iosFix: true, androidFix: true });

  // burger
  var menuButtom = $('.navbar-btn');
  var lines = $('.navbar-btn__line');

  menuButtom.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom_active');
    $(lines).toggleClass('navbar-btn__line_active');
  });

  // modal
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  var overlay = $('.modal__overlay');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  overlay.on('click', closeModal);

  function openModal() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find('.modal__overlay').addClass('modal__overlay__visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog__visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay__visible');
    modalDialog.removeClass('modal__dialog__visible');
  }

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".modal__overlay").removeClass("modal__overlay__visible");
      $(".modal__dialog").removeClass("modal__dialog__visible");
    }
  });

  //обработка формы

  $(function () {
    //2. Получить элемент, к которому необходимо добавить маску
    $('[name=phone]').mask("+ 7 (999) 999-99-99");
  });

  $(".form").each(function () {
    $(this).validate({
      element: "form",
      validClass: "input_required",
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "* Enter your full name",
          minlength: "* The name must be at least 2 letters long"
        },
        email: {
          required: "* We need your email address to contact you",
          email: "* Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "* Phone number is required"
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
        $(element.form).find("input[for=" + element.type + "]")
          .addClass(errorClass);
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass(errorClass).addClass(validClass);
        $(element.form).find("input[for=" + element.type + "]")
          .removeClass(errorClass);
      }
    });
  });
});