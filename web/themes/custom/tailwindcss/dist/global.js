(function($){
    $('.close-menu-bar').click(function() {
        $('#block-tailwindcss-main-menu').hide();
        $('.overlay').toggleClass('show');
    });

    $('.mobile-menu-open').click(function() {
        $('#block-tailwindcss-main-menu').show();
        $('.overlay').toggleClass('show');
    });
})(jQuery);