$('.hamburger-wrapper').on('click', function(){

    $(this).toggleClass('checked');
    // $('.header-navigation').toggleClass('header-navigation_opened');
    $('.header-navigation').slideToggle();

})