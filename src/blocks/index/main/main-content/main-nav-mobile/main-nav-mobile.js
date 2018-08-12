//menu hover
$(function(){
    $('.main-nav-mobile__item-1').click(function() {
        $('.main-nav-mobile__call_hover').toggleClass('visible');
        $('.main-nav-mobile__item-1').toggleClass('z-index');

    });
    $(' .main-nav-mobile__nav').click(function() {
        $('.main-nav-mobile__menu_hover').toggleClass('visible');
        $('.main-nav-mobile__nav').toggleClass('z-index');
    });

});