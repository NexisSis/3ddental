//menu hover
$(function(){
    $('.main-menu').mouseenter(function() {
        $('.main-menu__hover').addClass('main-menu__hover_visible');
        console.log('main menu mouseEnter');
    });
    $('.main-menu__hover').mouseleave(function () {
        $('.main-menu__hover').removeClass('main-menu__hover_visible');
        console.log('main menu mouseEnter');
    });
});