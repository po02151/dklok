$(document).ready(function(){
	mainSlider();
    scrollHeader();
    growth_process();
    service_network();
    whistle_blow();
    main_productTab();
    imgMap();
    topBtnOn();
    shareBtn();
});

function shareBtn(){
    $('.shareBtn').click(function(){
        $('.shareBox').toggleClass('active');
    })
}


function topBtnOn(){
    // $(window).scroll(function(){
    //     if($(this).scrollTop() == 0){
    //         $('.topBtn').fadeOut();
    //     }else if($(this).scrollTop() >= 100){
    //         $('.topBtn').fadeIn();
    //     }
    // });
    $(".topBtn").click(function() {
        $('html, body').stop().animate({
            scrollTop : 0
        }, 700);
        return false;
    });
}


function imgMap(){
    $('img[usemap]').rwdImageMaps();
    $("#img").width("100%");
}

function scrollHeader(){
    let lastScroll = 0;
    $(window).on('scroll', function(){
        let scrollTop = $(this).scrollTop();
        if(scrollTop > lastScroll) {
            //down
            $('header').removeClass('fixed');
        } else {
            // up
            $('header').addClass('fixed');
        }
        lastScroll = scrollTop;
    });
}

function growth_process(){
    $('.growth_process .tabBtnBox button').click(function(){
        $('.growth_process .tabBtnBox button').removeClass('active');
        $(this).addClass('active');
        
        if($('.growth_process .tabBtnBox .btn_2020').hasClass('active')){
			$('.growth_process .tabContentBox > ul').removeClass('active');
			$('.growth_process .tabContentBox .tabContent_2020').addClass('active');
		}
		if($('.growth_process .tabBtnBox .btn_2010').hasClass('active')){
			$('.growth_process .tabContentBox > ul').removeClass('active');
			$('.growth_process .tabContentBox .tabContent_2010').addClass('active');
		}
        if($('.growth_process .tabBtnBox .btn_2000').hasClass('active')){
			$('.growth_process .tabContentBox > ul').removeClass('active');
			$('.growth_process .tabContentBox .tabContent_2000').addClass('active');
		}
    })
}

function service_network(){
    $('.tabMenuBox li').click(function(){
        $('.tabMenuBox li').removeClass('active');
        $(this).addClass('active');
        
        if($('.tabMenuBox .seoul').hasClass('active')){
			$('.tabListBox > div').removeClass('active');
			$('.tabListBox .seoul').addClass('active');
		}
        if($('.tabMenuBox .daejeon').hasClass('active')){
			$('.tabListBox > div').removeClass('active');
			$('.tabListBox .daejeon').addClass('active');
		}
        if($('.tabMenuBox .busan').hasClass('active')){
			$('.tabListBox > div').removeClass('active');
			$('.tabListBox .busan').addClass('active');
		}
        if($('.tabMenuBox .ulsan').hasClass('active')){
			$('.tabListBox > div').removeClass('active');
			$('.tabListBox .ulsan').addClass('active');
		}
        if($('.tabMenuBox .gyeongnam').hasClass('active')){
			$('.tabListBox > div').removeClass('active');
			$('.tabListBox .gyeongnam').addClass('active');
		}
    })
}

function whistle_blow(){
    $('.whistle_blow .tabBtnBox button').click(function(){
        $('.whistle_blow .tabBtnBox button').removeClass('active');
        $(this).addClass('active');
        
        if($('.whistle_blow .tabBtnBox .guideToUsageInfoBtn').hasClass('active')){
			$('.whistle_blow .tabContentBox > div').removeClass('active');
			$('.whistle_blow .tabContentBox .guideToUsageInfoContent').addClass('active');
		}
		if($('.whistle_blow .tabBtnBox .reportBtn').hasClass('active')){
			$('.whistle_blow .tabContentBox > div').removeClass('active');
			$('.whistle_blow .tabContentBox .reportContent').addClass('active');
		}
    })
}

function main_productTab(){
    $('.mainPage .tabMenuBox button').click(function(){
        $('.mainPage .tabMenuBox button').removeClass('active');
        $(this).addClass('active');
        
        if($('.mainPage .tabMenuBox .tabMenu_1').hasClass('active')){
			$('.mainPage .right > div').removeClass('active');
			$('.mainPage .right .tabContent_1').addClass('active');
		}
		if($('.mainPage .tabMenuBox .tabMenu_2').hasClass('active')){
			$('.mainPage .right > div').removeClass('active');
			$('.mainPage .right .tabContent_2').addClass('active');
		}
        if($('.mainPage .tabMenuBox .tabMenu_3').hasClass('active')){
			$('.mainPage .right > div').removeClass('active');
			$('.mainPage .right .tabContent_3').addClass('active');
		}
    })
}



function mainSlider(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 3
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
      });
}