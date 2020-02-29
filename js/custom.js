$(function () {
    "use strict";
    // Clients Slider
    $('.c_slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    // Company Slider     
       $('.comp_row').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    // Bootstrap Scroolspy 
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });
    $("#myNavbar a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    // js activation for counterup
    $('.timing').counterUp({
        delay: 2,
        time: 500
    });
    // Sticky Menu Settings
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > .5) {
            $('.full_header').addClass('sticky');
        } else {
            $('.full_header').removeClass('sticky');
        }
    })
    // Portfolio filter Activation
    $(function () {
        $('.filtr-container').filterizr();
    });
    // Light Box Activation js
    $('.test-popup-link').magnificPopup({
        type: 'image'
    });
});