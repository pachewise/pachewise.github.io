var defTitle;
var myName = "José R. Pacheco | ";
$(document).ready(function () {
    defTitle = document.title;
    $(document).on("scroll", onScroll);

    $('nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a:not([href=#top])').each(function (item) {
            $(item).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);

        var offset = $target.offset().top+2;

        if ($(document).scrollTop() < $("#top").outerHeight())
            offset -= $('nav').outerHeight();
        if (target === "#top")
            $('nav').hide();

        console.log("offset", offset);
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

        var scrollingOver = refElement.offset().top <= scrollPosition + $('nav').outerHeight();
        var notPassed = refElement.offset().top + refElement.outerHeight() > scrollPosition;

        console.log(refElement.selector, scrollingOver, notPassed)
        if (scrollingOver && notPassed) {
            console.log(scrollPosition, refElement.offset().top, refElement.outerHeight());
            updateLocation(refElement.selector);
        } else {
            refElement.removeClass("active");
        }

    });
}

function updateLocation(target) {
    var title;
    if (target && !"#top".includes(target)) {
        title = myName + target.substr(1);
        pushState(target);
    } else {
        title = defTitle;
        target = "#java";
        pushState('');
    }
    document.title = title;
    $('.block').removeClass("active");
    console.log(target);
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
        $('#java').addClass("active");

    }
}

function pushState(target) {
    if (history.pushState)
        history.pushState(null, null, target);
    else
        location.hash = target;
}