$(document).ready(function ($) {
    // scroll to------------------
    $('.header__top--nav a').on('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 0
        }, 600);
    });
    //btn to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    //burger---------------------------
    $('.header__burger').click(function (e) {
        $('.header__burger, .header__top--nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.nav-link').on('click', function () {
        $('.header__burger, .header__top--nav').removeClass('active');
        $('body').removeClass('lock');
    });
    //burger------------------------end

//open popup
    $('.callback').on('click', function (e) {
        e.preventDefault();
        $('.callback-from').removeClass('hidden');
        $('body').addClass('lock');
    });

//close popup
    $('.callback-from').on('click', function (e) {
        if ($(e.target).is('.btn-close') || $(e.target).is('.callback-from')) {
            e.preventDefault();
            $(this).addClass('hidden');
            $('body').removeClass('lock');
        }
    });
    $(document).keyup(function (e) {
        if (e.which === '27') {
            $('.modal').addClass('hidden');
        }
    });

    $('#tabs').responsiveTabs({
        startCollapsed: 'true'
    });

});

