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
        $('.callback-form').removeClass('hidden');
        $('body').addClass('lock');
    });
    $('.getConsult').on('click', function (e) {
        e.preventDefault();
        $('.consult-form').removeClass('hidden');
        $('body').addClass('lock');
    });
    $('.question').on('click', function (e) {
        e.preventDefault();
        $('.question-form').removeClass('hidden');
        $('body').addClass('lock');
    });
//close popup
    $('.callback-form').on('click', function (e) {
        if ($(e.target).is('.btn-close') || $(e.target).is('.callback-form')) {
            e.preventDefault();
            $(this).addClass('hidden');
            $('body').removeClass('lock');
        }
    });
    $('.consult-form').on('click', function (e) {
        if ($(e.target).is('.btn-close') || $(e.target).is('.consult-form')) {
            e.preventDefault();
            $(this).addClass('hidden');
            $('body').removeClass('lock');
        }
    });
    $('.question-form').on('click', function (e) {
        if ($(e.target).is('.btn-close') || $(e.target).is('.question-form')) {
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

    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            let range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $('input[type="tel"]').mask('+38 (999) 999-9999');
    // $('input[type="tel"]').click(function(){
    //     $(this).setCursorPosition(5);
    // }).mask('+38 (999) 999-9999');
    // $('input[type="tel"]').mask('+38 (999) 999-99-99');
});

