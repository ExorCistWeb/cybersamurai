const WIN_SLIDER = document.querySelector('.win-slider');
if (WIN_SLIDER) {
    new Swiper(WIN_SLIDER, {
        slidesPerView: 4.5,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1630: {
                slidesPerView: 4.5,
            },
            1220: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2.5,
            },
            525: {
                slidesPerView: 2,
            },
            475: {
                slidesPerView: 1.6,
            },
            320: {
                slidesPerView: 1.4,
            },
        }
    })
}

$(document).ready(function() {
    $(".slider-desktop").slick({
        arrows: false,
        dots: true,
        draggable: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: false,
        responsive: [{
                breakpoint: 1760,
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 1510,
                settings: {
                    slidesToShow: 2.1,
                },
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1.7,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1.2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.1,
                },
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],
    });
});

$(document).ready(function() {
    $(".slider-mobile").slick({
        arrows: false,
        dots: true,
        draggable: true,
        swipeToSlide: true,
        infinite: false,
        variableWidth: true,
        respondTo: "slider-wrapper",
        centerMode: true,
    });
});
const $slider = $(".redhill-slider");

if ($slider.length) {
    let currentSlide;
    let slidesCount;
    const sliderCounter = document.createElement("div");
    sliderCounter.classList.add("slider__counter");

    const updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + "/" + slidesCount);
    };

    $slider.on("init", function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on("afterChange", function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
        infinite: false,
        slidesToShow: 1.8,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true,
        arrows: false,
        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 1.5,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1.2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1.6,
                },
            },

            {
                breakpoint: 596,
                settings: {
                    slidesToShow: 2,
                },
            },

            {
                breakpoint: 445,
                settings: {
                    slidesToShow: 1.2,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1.1,
                },
            },
        ],
    });
}