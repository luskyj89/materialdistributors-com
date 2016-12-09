/* ~~ Public Vars ~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
var controlNav          = $("#control-icon"),
    menuItem            = $(".menu-item");

function setNav() {
    if ( !controlNav.hasClass("active") ) {
        controlNav.addClass("active");
        menuItem.slideDown();
    }
    else {
        controlNav.removeClass("active");
        menuItem.slideUp();
    }
}

/* ~~ Init ~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function init() {

    controlNav.click(function(e){
        e.preventDefault();

        setNav();
    });

    $('.bg-photo-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 1000,
        cssEase: 'linear',
        fade: true,
        pauseOnFocus: true,
        pauseOnHover: false
    });

    //// Product Slider Navigation
    $('.product-item').click(function(e) {
        e.preventDefault();
        var t = $(this);
        var index = $('.product-item').index(t);
        var currentProduct = t.html();

        console.log(currentProduct);

        $('.slider-products').slick('slickGoTo', parseInt(index));
    });

    // On before slide change
    $('.slider-products').on('afterChange', function(event, slick, currentSlide, nextSlide){

      var currentSlide = $('.slider-products').slick('slickCurrentSlide');
      var currentTitle = $('.product-item').eq(currentSlide).html();

      $('#current-product').html(currentTitle);
      $('.product-item').css('color', '#3d8bf5');
      $('.product-item').eq(currentSlide).css('color', '#010446');

    });

    $('.slider-products').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        fade: true
    });

    $('.slider-projects').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        fade: true
    });

    // Smooth scrolling anchors
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top -77
            }, 1000);
            return false;
        }
    }
    });


}

function resizer() {

    if ( $(window).width() > 930 ) {
        menuItem.css("display", "block");
        controlNav.addClass("active");
    }

}

$(window).resize(function(){
    resizer();
});

$(document).ready(function(){

    init();

});
