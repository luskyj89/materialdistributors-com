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

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
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
