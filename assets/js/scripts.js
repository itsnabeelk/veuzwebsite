
$(function () {

    "use strict";
    var wind = $(window);

        /* ========== YouTubePopUp ========== */

        $("a.vid").YouTubePopUp();

    /* ===============================  half slider  =============================== */

    var halfText = new Swiper('.half-slider .gallery-text .swiper-container', {
        spaceBetween: 100,
        centeredSlides: true,
        slidesPerView: 2,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loopedSlides: 4,
        mousewheel: true,
        speed: 1500,
        breakpoints: {
            0: {
                spaceBetween: 10,
                slidesPerView: 1,
                centeredSlides: false,
            },
            640: {
                spaceBetween: 30,
                slidesPerView: 1,
                centeredSlides: false,
            },
            768: {
                spaceBetween: 50,
                slidesPerView: 1,
                centeredSlides: false,
            },
            1024: {
                spaceBetween: 100,
                slidesPerView: 2,
                centeredSlides: true,
            },
        }
    });

    var halfImg = new Swiper('.half-slider .gallery-img .swiper-container', {
        spaceBetween: 0,
        centeredSlides: true,
        loopedSlides: 4,
        mousewheel: true,
        speed: 1500,
        navigation: {
            nextEl: '.half-slider .swiper-controls .swiper-button-next',
            prevEl: '.half-slider .swiper-controls .swiper-button-prev',
        },
        pagination: {
            el: '.half-slider .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
                    '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
                    'stroke-opacity="1" stroke-width="1px"></circle>' +
                    '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
                    '</svg></span>';
            },

        },
        keyboard: {
            enabled: true,
        },
        thumbs: {
            swiper: halfText
        },
    });

    halfImg.on("slideChangeTransitionStart", function () {
        halfText.slideTo(halfImg.activeIndex);
    });
    halfText.on("transitionStart", function () {
        halfImg.slideTo(halfText.activeIndex);
    });


    


});


/* =============================================================================
-----------------------------  cursor Animation  -----------------------------
============================================================================= */

(function () {
    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');
    const animateit = function (e) {
        const hoverAnim = this.querySelector('.hover-anim');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
        hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
        if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };
    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    $("a, .cursor-pointer").hover(
        function () {
            $(".cursor").addClass("cursor-active");
        }, function () {
            $(".cursor").removeClass("cursor-active");
        }
    );

})();



/* =============================================================================
-----------------------------  Button scroll up   ------------------------------
============================================================================= */

$(document).ready(function () {

    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })

});


$(function () {


    "use strict";

    /* ===============================  fixed-slider  =============================== */

    var slidHeight = $(".fixed-slider").outerHeight();

    $(".main-content").css({
        marginTop: slidHeight
    });



    /* =============================================================================
    -------------------------------  Preloader svg   -------------------------------
    ============================================================================= */

    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
});





