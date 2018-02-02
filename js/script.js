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
    $(this).find('.mainMatchesSection-header-expandIcon').toggleClass('mainMatchesSection-header-expandIcon_opened');
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
        appendArrows: $('.wrapper_mainSlider'),
        dots: true,
        customPaging: function (slider, i) {
            var tabBlocks = $('.mainSlider-paging').find('div');
            console.log();
            return '<div class="mainSlider-matchTitle">' + tabBlocks.eq(i).text() + '</div>';
        }
    });
});


$('.mainSlider-matchTitle').on('click', function(){
    var slide = $(this).attr('data-item');
    console.log(slide);
})

$('.js-mobileFilter').on('click', function(){
    if ($(window).width() < 992) {
        $('.js-mobileFilter-content').slideToggle();
        $('.js-resetFilter').slideToggle();
        $(this).toggleClass('js-mobileFilter_opened');
    }
})

$(window).resize(function() {
    var width = $( this ).width();
    if ($(document).width() >= 992) {
        $('.header-navigation').css('display', 'inline-block');
        $('.js-mobileFilter-content').css('display', 'block');
        $('.js-resetFilter').css('display', 'block');
    } else {
        $('.header-navigation').css('display', 'none');
        $('.js-mobileFilter-content').css('display', 'none');
        $('.js-resetFilter').css('display', 'none');
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

// скрипт двойного фильтра, работают в паре.

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

// конец парного фильтра

$('.betTv-tabItem').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.betTv-tabItem').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".betTv-grid-sorting" ).hide();
    $( ".betTv-grid" ).find(selectedBlock).css( "display", "block" );
})


$('.newsSection-tabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.newsSection-tabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".newsSection-grid-sorting" ).hide();
    $( ".newsSection-grid" ).find(selectedBlock).css( "display", "flex" );
})

// скрипт двойного фильтра со страницы прогнозы на спорт.

$('.prognosisPage-tabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.prognosisPage-tabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".mainSection-content-sorting" ).hide();
    $( ".mainSection-content" ).find(selectedBlock).css( "display", "block" );
})

$('.prognosisPage-secondaryTabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.prognosisPage-secondaryTabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".mainSection-content-sorting-secondary" ).hide();
    $( ".mainSection-content-sorting" ).find(selectedBlock).css( "display", "block" );
})

// конец парного фильтра

// скрипт двойного фильтра со страницы матчи.

$('.matchesSection-tabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.matchesSection-tabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".matchesSection-grid-sorting" ).hide();
    $( ".matchesSection-grid" ).find(selectedBlock).css( "display", "block" );
})

$('.matchesSection-secondaryTabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.matchesSection-secondaryTabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".matchesSection-grid-sorting-secondary" ).hide();
    $( ".matchesSection-grid-sorting" ).find(selectedBlock).css( "display", "block" );
})

// конец парного фильтра

$('.bonusesSection-tabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.bonusesSection-tabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".bonusesSection-grid-sorting" ).hide();
    $( ".bonusesSection-grid" ).find(selectedBlock).css( "display", "flex" );
})


$('.reviewSection-tabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.reviewSection-tabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".reviewSection-grid-sorting" ).hide();
    $( ".reviewSection-grid" ).find(selectedBlock).css( "display", "block" );
})

$('.paymentsSection-tabLink').on('click', function(){
    const tabData = $(this).attr('data-item');
    $('.paymentsSection-tabLink').removeClass('filterBtn_opened');
    $(this).toggleClass('filterBtn_opened');
    const selectedBlock = $("div [data-item='" + tabData +"']");
    $( ".paymentsSection-grid-sorting" ).hide();
    $( ".paymentsSection-grid" ).find(selectedBlock).css( "display", "flex" );
})