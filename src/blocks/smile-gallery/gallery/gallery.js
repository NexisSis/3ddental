
//carousel
(function($) {
    $(function() {
        $('.gallery-carousel').jcarousel(
            {
                wrap: 'both',
                animation: 'slow'
            }
        );
        $('.gallery-pagination').jcarouselPagination({
            'item': function(page, carouselItems) {
                return '<li><a href="#' + page + '">'+page+'</a></li>';
            }
        });
        $('.gallery-control-back')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.gallery-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

    });
})(jQuery);

