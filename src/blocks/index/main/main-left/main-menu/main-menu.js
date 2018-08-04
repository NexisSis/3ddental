//menu hover
$(function(){
    $('.main-menu').click(function() {
        $('.main-menu__hover').addClass('main-menu__hover_visible');
    });
    $('.main-menu__hover').mouseleave(function () {
        $('.main-menu__hover').removeClass('main-menu__hover_visible');
    });
});