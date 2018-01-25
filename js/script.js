$('.hamburger-wrapper').on('click', function(){

    $(this).toggleClass('checked');
    $('.header-navigation').slideToggle();

})

$('.mainSection-content-block').on('click', function(){
    if ($(this).hasClass('checked')) {
        $(this).children('table').fadeOut();
    } else {
        $(this).toggleClass('checked');
        $(this).children('table').fadeIn();
    }
})

$('.filterSectionItem_currency').on('click', function(){
    $('.filterSectionItem-hiddenContent_currency').slideToggle();
})

$('.filterSectionItem_safety').on('click', function(){
    $('.filterSectionItem-hiddenContent_safety').slideToggle();
})