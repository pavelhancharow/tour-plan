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

  // плагин для ввода телефона
  $('[name=phone]').mask("+7 (999) 999-99-99");

  //обработка формы validate
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
        },
        phone: {
          required: true,
          minlength: 18
        }
      },
      messages: {
        name: {
          required: "* Enter your full name",
          minlength: "* More than 2 letters long"
        },
        email: {
          required: "* Enter your email address",
          email: "* Must be name@domain.com"
        },
        phone: {
          required: "* Enter your phone number",
          minlength: "* More than 18 letters long",
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass(errorClass).addClass(validClass);
      }
    });
  });

  // анимация при scroll
  AOS.init();

  $(function () {
    $(".lazy").lazy();
  });

  $(".map").mousemove(function (event) {
    $(".map__google").append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25228.630595201408!2d-122.43470986132685!3d37.77647271983485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb10ed6d9b5050fa5!2sTwitter!5e0!3m2!1sru!2sby!4v1596692683745!5m2!1sru!2sby" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" class="map__google"></iframe>');
  });
});