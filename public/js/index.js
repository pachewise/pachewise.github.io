$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        var offset = $target.offset().top+2;
        if (target === "#top") {
            offset = 0;
            $('nav').hide();
        }
        $('html, body').stop().animate({
            'scrollTop': offset
        }, 500, 'swing', function () {
            window.location.hash = target;
            checkSticky();
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    checkSticky();

    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.selector === "#top") return;
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.block').removeClass("active");
            refElement.addClass("active");
            //window.location.hash = refElement.selector;
        } else {
            refElement.removeClass("active");
        }
    });
}

function checkSticky($t) {
    var mn = $("nav");
    mn.show();
    var mns = "sticky-nav";
    var hdr = $('header').outerHeight();
    if( $(document).scrollTop() > hdr ) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
        $('nav ul li a').removeClass("active");
        window.location.hash = "";
    }
}