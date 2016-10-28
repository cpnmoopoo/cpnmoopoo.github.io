(function($) {
    "use strict"

    var $mobileNavToggleBtn = $('.mobile-nav-toggle'),
        $blankATags = $('a[href^="#"]'),
        $body = $('html, body'),
        settings = {
            duration: 1000
        };

    function onBtnclick(e) {
        var $this = $(this),
            $selectors = $('.mobile-nav');
        $selectors.toggleClass('is-open');
    }

    function onBlankAClick(event) {
        var $this = $(this),
            href = $this.attr('href'),
            $target = $(href);

        if ($target.length > 0) {
            event.preventDefault();
            $body.animate({
                scrollTop: target.offset().top
            }, settings.duration);
        }
    }

    $(document).ready(function() {
        $mobileNavToggleBtn.on('click', onBtnclick);
        $blankATags.on('click', onBlankAClick);
    });

})(JQuery);