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
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-$('nav').outerHeight()+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var mn = $("nav");
    var mns = "sticky-nav";
    var hdr = $('header').height();
    if( $(this).scrollTop() > hdr ) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
        $('nav ul li a').removeClass("active");
    }
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var navHeight = $('nav').outerHeight();
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.selector === "#top") return;
        if (refElement.position().top <= scrollPosition + navHeight && refElement.position().top + refElement.height() > scrollPosition + navHeight) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
            window.location.hash = refElement.selector;
        } else {
            currentLink.removeClass("active");
        }
    });
}