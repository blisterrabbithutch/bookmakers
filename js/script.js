$('.hamburger-wrapper').on('click', function(){

    $(this).toggleClass('checked');
    $('.header-navigation').slideToggle();

})

$('.mainSection-content-block').on('click', function(){
    if ($(this).hasClass('checked')) {
        $(this).children('table').fadeOut();
    } else {
        $(this).children('table').fadeIn();
    }
    $(this).toggleClass('checked');
    $(this).find('.mainSection-header-expandIcon').toggleClass('mainSection-header-expandIcon_opened');
})

$('.filterSectionItem_currency').on('click', function(){
    $('.filterSectionItem-hiddenContent_currency').slideToggle();
    $(this).find('.filterSection-expandIcon').toggleClass('filterSection-expandIcon_opened');
})

$('.filterSectionItem_safety').on('click', function(){
    $('.filterSectionItem-hiddenContent_safety').slideToggle();
    $(this).find('.filterSection-expandIcon').toggleClass('filterSection-expandIcon_opened');
})