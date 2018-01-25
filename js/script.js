$('.hamburger-wrapper').on('click', function(){

    $(this).toggleClass('checked');
    $('.header-navigation').slideToggle();

})


$('.mainSection-content-block').on('click', function(){
    $(this).toggleClass('checked');
    if ($(this).hasClass('checked')) {
        $(this).children('table').fadeOut();
    } else {
        $(this).children('table').fadeIn();
    }
})