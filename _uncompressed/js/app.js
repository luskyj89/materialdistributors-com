/* ----------------------------------------
   Public Vars
--------------------------------------- */
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

/* ----------------------------------------
   Init
--------------------------------------- */

function init() {

    controlNav.click(function(e){
        e.preventDefault();

        setNav();
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
