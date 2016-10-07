$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a:not([href=#top])').each(function () {
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
            updateLocation(target);
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

        var scrollingOver = refElement.offset().top <= scrollPosition + $('nav').outerHeight();
        var notPassed = refElement.offset().top + refElement.outerHeight() > scrollPosition;

        var noActive = true;
        if (scrollingOver && notPassed) {
            console.log(scrollPosition, refElement.offset().top, refElement.outerHeight());
            noActive = false;
            refElement.addClass("active");

            updateLocation(refElement.selector);
        } else {
            refElement.removeClass("active");
        }

        if (noActive) $('#java').addClass("active"); // default
    });
}
function updateLocation(target) {
    if (history.pushState)
        history.pushState(null, null, target);
    else
        location.hash = target;
    target = target && target !== "#top" ? target : "#software";
    document.title = "José R. Pacheco | " + target.substr(1);
    $('.block').removeClass("active");
    $(target).addClass("active");
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
        window.location.hash = "";
        $('#java').addClass="active";
    }
}