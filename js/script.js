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
        autoplay: true,
        autoplaySpeed: 5000, 
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

$('.js-mobileFilter').on('click', function(){
    $('.js-mobileFilter-content').slideToggle();
    $('.js-resetFilter').slideToggle();
    
    $(this).toggleClass('js-mobileFilter_opened');
})

$(window).resize(function() {
    var width = $( this ).width();
    if (width >= 992) {
        $('.header-navigation').css('display', 'inline-block');
    } else {
        $('.header-navigation').css('display', 'none');
    }
});

$('.mainNewsSection-tabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.mainNewsSection-tabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".mainNewsSection-grid-sorting" ).hide();
    $( ".mainNewsSection-grid" ).find(selectedBlock).css( "display", "flex" );
})


$('.prognosisSection-tabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.prognosisSection-tabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".prognosisSection-matchesGrid-sorting" ).hide();
    $( ".prognosisSection-matchesGrid" ).find(selectedBlock).css( "display", "block" );
})


$('.mainPopularNews-tabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.mainPopularNews-tabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".mainPopularNews-grid-sorting" ).hide();
    $( ".mainPopularNews-grid" ).find(selectedBlock).css( "display", "flex" );
})

$('.mainMatchesSection-tabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.mainMatchesSection-tabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".mainMatchesSection-grid-sorting" ).hide();
    $( ".mainMatchesSection-grid" ).find(selectedBlock).css( "display", "block" );
})

$('.mainMatchesSection-secondaryTabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.mainMatchesSection-secondaryTabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".mainMatchesSection-grid-sorting-secondary" ).hide();
    $( ".mainMatchesSection-grid-sorting" ).find(selectedBlock).css( "display", "block" );
})