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

$('.mainMatchesSection-content-block').on('click', function(){
    if ($(this).hasClass('checked')) {
        $(this).children('table').fadeOut();
    } else {
        $(this).children('table').fadeIn();
    }
    $(this).toggleClass('checked');
    $(this).find('.mainMatchesSection-header-expandIcon').toggleClass('mainSection-header-expandIcon_opened');
})

$('.filterSectionItem_currency').on('click', function(){
    $('.filterSectionItem-hiddenContent_currency').slideToggle();
    $(this).find('.filterSection-expandIcon').toggleClass('filterSection-expandIcon_opened');
})

$('.filterSectionItem_safety').on('click', function(){
    $('.filterSectionItem-hiddenContent_safety').slideToggle();
    $(this).find('.filterSection-expandIcon').toggleClass('filterSection-expandIcon_opened');
})

$(document).ready(function(){
    $('.mainSlider-carousel').slick({
        // autoplay: true,
        // autoplaySpeed: 5000, 
        dots: true
    });

    function $replaceDots() {
        $( ".slick-dots li:nth-child(1) button" ).replaceWith( "<div data-item='1' class='mainSlider-matchTitle'>Карточки, голы, стычки. В&nbsp;матче&nbsp;«Ницца» — «Монако» будет&nbsp;всe</div>" );
        $( ".slick-dots li:nth-child(2) button" ).replaceWith( "<div data-item='2' class='mainSlider-matchTitle'>Paddy Power: Кого подпишут «шпоры» в зимнее окно</div>" );
        $( ".slick-dots li:nth-child(3) button" ).replaceWith( "<div data-item='3' class='mainSlider-matchTitle'>СК Армении проводит расследование по договорному матчу национального чемпионата</div>" );
        $( ".slick-dots li:nth-child(4) button" ).replaceWith( "<div data-item='4' class='mainSlider-matchTitle'>Роберто Манчини заинтересовался работой со сборной Австралии на&nbsp;ЧМ–2018</div>" );
    }

    $replaceDots();
});


$('.mainSlider-matchTitle').on('click', function(){
    var slide = $(this).attr('data-item');
    console.log(slide);
})

