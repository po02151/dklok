$(document).ready(function(){
	mainSlider();
    scrollHeader();
    growth_process();
    businessAreas();
    service_network();
    whistle_blow();
    main_productTab();
    // imgMap();
    product_introduction();

    // productSideBarAccordion();
    // productSideBar();
    catalogueSaveBox();
    product_fileDownload();
    catalogue();
    topBtnOn();
    shareBtn();
    urlCopyBtn();
    promotional_video();
    faqAccordion();
    fileUpload();
    contactUsInput();
    dklokStory();

    // hamburger();
    mobileHeaderAccordion();

    link_scroll();

    list_dotdotdot();

    stickyNav();
    product_hamburger();

    hseSlider();
    mobileLangBtn();
    contactUsAddOption();
    mainPopUpClose();
});

function setCookie(name, value, day){
	name = 'cookie';
	var expire = new Date();
	expire.setDate(expire.getDate() + day);
	cookies = name + '=' + escape(value) + '; path=/';
	if(typeof day != 'undefiend') cookies += ';expires=' + expire.toGMTString();
	document.cookie = cookies;
}
// --------------------------- 쿠키 생성 --------------------------------------

function getCookie(cName,val) {
	var x, y; var val = document.cookie.split(';');
	for (var i = 0; i < val.length; i++) {
		x = val[i].substr(0, val[i].indexOf('='));
		y = val[i].substr(val[i].indexOf('=') + 1);
		x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
		if (x == cName) {
			return unescape(y);
			// unescape로 디코딩 후 값 리턴
		}
	}
}
// --------------------------- 쿠키 가져오기 ------------------------------------

function closePopupOneDay(cookiename){
	setCookie(cookiename, "done" , 1);     // 저장될 쿠키명 , 쿠키 value값 , 기간
	$('.mainPopUp').removeClass('active');
}

function mainPopUpClose(){
	$('.mainPopUpClose').click(function(){
		$('.mainPopUp').removeClass('active');
	})
}


function contactUsAddOption(){
    $("#inquiryType35").change(function(){
        $('.addOptionBox').removeClass('active');
        if($(this).val()){
            $('.addOptionBox1').addClass('active');
        }else if(!$(this).val()){
            $('.addOptionBox1').removeClass('active');
        }

    })

    $("#inquiryType36").change(function(){
        $('.addOptionBox').removeClass('active');
        if($(this).val()){
            $('.addOptionBox2').addClass('active');
        }else if(!$(this).val()){
            $('.addOptionBox2').removeClass('active');
        }

    })

    $("#inquiryType34, #inquiryType37, #inquiryType38, #inquiryType39, #inquiryType40, #inquiryType41").change(function(){
        $('.addOptionBox').removeClass('active');
    })


}

function mobileLangBtn(){
    $('.header_mo .lang_box > button').click(function(){
        $('.header_mo .lang_box .lang_tit').toggleClass('active');
    })
    $('.header_mo .snsBox > button').click(function(){
        $('.header_mo .snsBox > div').toggleClass('active');
    })
}

function product_hamburger(){
    $('.product_hamburger').click(function(){
        $(this).toggleClass('active');
        $('.productSideBar').toggleClass('active');

        if($('.productSideBar').hasClass('active')){
			$('body').addClass('active');
            $('.product_hamburger_BG').addClass('active');
            $('header, .header_mo').removeClass('fixed');
            
            $('.productSideBar .closeBtn').click(function(){
                $('.productSideBar, .product_hamburger, .product_hamburger_BG, body').removeClass('active');
            })
		}else{
			$('body').removeClass('active');
            $('.product_hamburger_BG').removeClass('active');
		}

    })
}

function stickyNav(){
    $(window).resize(function(){ 
        if (window.innerWidth < 1023) {
        
            $('.stickyNavBox > div > div').click(function(){
                $('.stickyNavBox > div > div:hover > span + ul').toggleClass('active');
            })
        /* 스크립트내용*/ 
        
        } 
    }).resize();
}

function list_dotdotdot(){
	$('.dotdot').dotdotdot({
        // configuration goes here
        ellipsis: '...',//말줄임 뭘로 할지
        watch : false, //윈도우 창에따라서 업데이트 할건지, 윈도우가 리사이즈될 때 업데이트할 건지
        wrap : 'letter',//word(단어단위), letter(글 단위), children(자식단위) 자르기
        height  : 35,
        tolerance : 10 //글이 넘치면 얼만큼 height 늘릴건지
    });

    $(window).resize(function(){
        $('.dotdot').dotdotdot({
            // configuration goes here
            ellipsis: '...',//말줄임 뭘로 할지
            watch : false, //윈도우 창에따라서 업데이트 할건지, 윈도우가 리사이즈될 때 업데이트할 건지
            wrap : 'letter',//word(단어단위), letter(글 단위), children(자식단위) 자르기
            height  : 35,
            tolerance : 10 //글이 넘치면 얼만큼 height 늘릴건지
        });
    })
}


// 링크 이동 스크롤 조정
function link_scroll() {
    setTimeout(function() {
        $('html, body').animate({
            scrollTop: $('.stickyNavBox').offset().top
            }, 'slow');
      }, 100);


    // $('html, body').animate({
    //     scrollTop: $('.stickyNavBox').offset().top
    //     }, 'slow');
  }


function hamburger(){
	$('.hamburger').click(function(){
		$('.header_mo').toggleClass('active');
        $('.header_mo .lang_box .lang_tit').removeClass('active');
		if($('.header_mo').hasClass('active')){
			$('body').addClass('active');
            $('.topBtn, .shareBtn, .product_hamburger').addClass('hidden');
            $('.shareBox').removeClass('active');
		}else{
			$('body').removeClass('active');
            $('.topBtn, .shareBtn, .product_hamburger').removeClass('hidden');
		}
	})
}

$(window).bind("pageshow", function (event) {
	if (event.originalEvent.persisted) {
		$('.header_mo').removeClass('active');
        $('body').removeClass('active');
        $('.topBtn, .shareBtn, .product_hamburger').removeClass('hidden');
	}
	else {
		hamburger();
	}
});

function mobileHeaderAccordion(){
    // $('.header_mo > div > ul li a.none').click(function(){
    //     $(this).toggleClass('active');

    //     $(this).nextAll('ul').slideToggle('fast');
    //     $(this).parent().siblings('li').children('ul').slideUp('fast')
    //         .parent('li').find('a.disableLink').removeClass('active');
    //     return false;
    // })
    // depth_2가 없는 메뉴



    $('.header_mo .depth_1 > li > .disableLink').click(function(){
        $(this).addClass('active');
        $('.depth_2 > li').removeClass('active');
        $('.depth_1 .mo_sub_menu').css('display','none');

        if($('.header_mo > div > ul > li > .disableLink1').hasClass('active')){
            $('.disableLink1_sub').addClass('active');
            $('.depth_1').addClass('hidden');
			$('.depth_2').addClass('active');
		}
        if($('.header_mo > div > ul > li > .disableLink2').hasClass('active')){
            $('.disableLink2_sub').addClass('active');
            $('.depth_1').addClass('hidden');
			$('.depth_2').addClass('active');
		}
        if($('.header_mo > div > ul > li > .disableLink3').hasClass('active')){
            $('.disableLink3_sub').addClass('active');
            $('.depth_1').addClass('hidden');
			$('.depth_2').addClass('active');
		}
        if($('.header_mo > div > ul > li > .disableLink4').hasClass('active')){
            $('.disableLink4_sub').addClass('active');
            $('.depth_1').addClass('hidden');
			$('.depth_2').addClass('active');
		}
        if($('.header_mo > div > ul > li > .disableLink5').hasClass('active')){
            $('.disableLink5_sub').addClass('active');
            $('.depth_1').addClass('hidden');
			$('.depth_2').addClass('active');
		}
        if($('.header_mo > div > ul > li > .disableLink6').hasClass('active')){
            $('.disableLink6_sub').addClass('active');
            $('.depth_1').addClass('hidden');
			$('.depth_2').addClass('active');
		}
        if($('.header_mo > div > ul > li > .disableLink7').hasClass('active')){
            $('.disableLink7_sub').addClass('active');
            $('.depth_1').addClass('hidden');
			$('.depth_2').addClass('active');
		}
    })


    $('.depth_2 > li > .mo_sub_menuBox > .disableLink').click(function(){
        $('.header_mo > div > ul > li > .disableLink').removeClass('active');
        $('.depth_1').removeClass('hidden');
        $('.depth_2').removeClass('active');
    })


    $('.header_mo .mo_sub_menuBox .hasChild').click(function(){
        $(this).toggleClass('active');
        $(this).nextAll('ul').slideToggle('fast');
        $(this).parent().siblings('li').children('ul').slideUp('fast')
            .parent('li').find('a.disableLink').removeClass('active');
        return false;

    })
    // depth_2 메뉴 열기
}



function contactUsInput(){
    $(".contactUs .essential").change(function(){
        
        if($(this).val()){
            $(this).addClass('active');
        }else if(!$(this).val()){
            $(this).removeClass('active');
        }

    })
}


function fileUpload(){
    $("#dk_inquiry_pdsFile").change(function(e){
        console.log(e);
        resumeFile = e.target.files[0];
        $("#contactUs_fileName").val(e.target.files[0].name);
        // $('.uploadName').addClass('active');

        if($('#contactUs_fileName').val()){
            $('.uploadName').addClass('active');
        }else if(!$('#contactUs_fileName').val()){
            $('.uploadName').removeClass('active');
        }

    })
}

function faqAccordion(){

    $('.faqListBox .questionBox').click(function(){
        $(this).toggleClass('active');
        $(this).nextAll('div').slideToggle('fast');
        $(this).parent().siblings('li').children('.answerBox').slideUp('fast')
            .parent('li').find('.questionBox').removeClass('active');
        return false;
        
    })
}

function dklokStory(){
    $('.dklokStory .tabMenuBox li').click(function(){
        $('.dklokStory .tabMenuBox li').removeClass('active');
        $(this).addClass('active');
        
        if($('.dklokStory .tabMenuBox .all').hasClass('active')){
			$('.dklokStory .tabListBox > ul').removeClass('active');
			$('.dklokStory .tabListBox .all').addClass('active');
		}
        if($('.dklokStory .tabMenuBox .facebook').hasClass('active')){
			$('.dklokStory .tabListBox > ul').removeClass('active');
			$('.dklokStory .tabListBox .facebook').addClass('active');
		}
        if($('.dklokStory .tabMenuBox .linkedin').hasClass('active')){
			$('.dklokStory .tabListBox > ul').removeClass('active');
			$('.dklokStory .tabListBox .linkedin').addClass('active');
		}
        if($('.dklokStory .tabMenuBox .instagram').hasClass('active')){
			$('.dklokStory .tabListBox > ul').removeClass('active');
			$('.dklokStory .tabListBox .instagram').addClass('active');
		}
        if($('.dklokStory .tabMenuBox .youtube').hasClass('active')){
			$('.dklokStory .tabListBox > ul').removeClass('active');
			$('.dklokStory .tabListBox .youtube').addClass('active');
		}
        list_dotdotdot();
    })
}

function promotional_video(){
    $('.promotinal_video .tabMenuBox li').click(function(){
        $('.promotinal_video .tabMenuBox li').removeClass('active');
        $(this).addClass('active');
        
        if($('.promotinal_video .tabMenuBox .product').hasClass('active')){
			$('.promotinal_video .tabListBox > div').removeClass('active');
			$('.promotinal_video .tabListBox .product').addClass('active');
		}
        if($('.promotinal_video .tabMenuBox .company').hasClass('active')){
			$('.promotinal_video .tabListBox > div').removeClass('active');
			$('.promotinal_video .tabListBox .company').addClass('active');
		}
        if($('.promotinal_video .tabMenuBox .customer').hasClass('active')){
			$('.promotinal_video .tabListBox > div').removeClass('active');
			$('.promotinal_video .tabListBox .customer').addClass('active');
		}
    })
}


function urlCopyBtn(){
    $('.url_copyBtn').click(function(){
        $(this).toggleClass('active');
    })
}

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


function catalogue(){
    $('.catalogue .tabMenuBox li').click(function(){
        $('.catalogue .tabMenuBox li').removeClass('active');
        $(this).addClass('active');
        
        if($('.catalogue .tabMenuBox .instrumentation').hasClass('active')){
			$('.catalogue .tabListBox > div').removeClass('active');
			$('.catalogue .tabListBox .instrumentation').addClass('active');
		}
        if($('.catalogue .tabMenuBox .semiconductor').hasClass('active')){
			$('.catalogue .tabListBox > div').removeClass('active');
			$('.catalogue .tabListBox .semiconductor').addClass('active');
		}
        if($('.catalogue .tabMenuBox .process').hasClass('active')){
			$('.catalogue .tabListBox > div').removeClass('active');
			$('.catalogue .tabListBox .process').addClass('active');
		}
    })
}

function product_fileDownload(){
    $('.model-2d .file-download').click(function(){
        $(this).toggleClass('active');
    })
}

function catalogueSaveBox(){
    $('.product_view .titleBox .btnBox > span').click(function(){
        $(this).toggleClass('active');
        $('.product_view .titleBox .btnBox .saveBox').toggleClass('active');
    })
}

function productSideBar(){
    $('.productSideBar .depth1 > li > a').click(function(){
        $('.productSideBar .depth1 > li > a').removeClass('active');
        $(this).addClass('active');
        
        $(this).nextAll('ul').slideToggle('fast');
        $(this).parent().siblings('li').children('ul').slideUp('fast')
            .parent('li').find('a.disableLink').removeClass('active');
        return false;
        
    })
}

function productSideBarAccordion(){
    $('.productSideBar .depth2 a.disableLink').click(function(){
        $(this).toggleClass('active');
        
        $(this).nextAll('ul').slideToggle('fast');
        $(this).parent().siblings('li').children('ul').slideUp('fast')
            .parent('li').find('a.disableLink').removeClass('active');
        return false;
        
    })
}

// function imgMap(){
//     $('img[usemap]').rwdImageMaps();
//     $("#img").width("100%");
// }

function scrollHeader(){
    let lastScroll = 0;
    if($(window).width() > 768) {
        // window 크기가 768보다  클 때
            $(window).on('scroll', function(){
                let scrollTop = $(this).scrollTop();
                if(scrollTop > lastScroll) {
                    //down
                    $('header, .header_mo').removeClass('fixed');
                } else {
                    // up
                    $('header, .header_mo').addClass('fixed');
                }
                lastScroll = scrollTop;
            });
        }

    // $(window).on('scroll', function(){
    //     let scrollTop = $(this).scrollTop();
    //     if(scrollTop > lastScroll) {
    //         //down
    //         $('header, .header_mo').removeClass('fixed');
    //     } else {
    //         // up
    //         $('header, .header_mo').addClass('fixed');
    //     }
    //     lastScroll = scrollTop;
    // });
}

function businessAreas(){
    $('.businessAreas .tabBtnBox button').click(function(){
        $('.businessAreas .tabBtnBox button').removeClass('active');
        $(this).addClass('active');
        
        if($('.businessAreas .tabBtnBox .introduction').hasClass('active')){
			$('.businessAreas .tabContentBox > div').removeClass('active');
			$('.businessAreas .tabContentBox .introduction').addClass('active');
		}
		if($('.businessAreas .tabBtnBox .related_products').hasClass('active')){
			$('.businessAreas .tabContentBox > div').removeClass('active');
			$('.businessAreas .tabContentBox .related_products').addClass('active');
		}
        if($('.businessAreas .tabBtnBox .related_certificates').hasClass('active')){
			$('.businessAreas .tabContentBox > div').removeClass('active');
			$('.businessAreas .tabContentBox .related_certificates').addClass('active');
		}
    })
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
    $('.service_network .tabMenuBox li').click(function(){
        $('.service_network .tabMenuBox li').removeClass('active');
        $(this).addClass('active');
        
        if($('.service_network .tabMenuBox .seoul').hasClass('active')){
			$('.service_network .tabListBox > div').removeClass('active');
			$('.service_network .tabListBox .seoul').addClass('active');
		}
        if($('.service_network .tabMenuBox .daejeon').hasClass('active')){
			$('.service_network .tabListBox > div').removeClass('active');
			$('.service_network .tabListBox .daejeon').addClass('active');
		}
        if($('.service_network .tabMenuBox .busan').hasClass('active')){
			$('.service_network .tabListBox > div').removeClass('active');
			$('.service_network .tabListBox .busan').addClass('active');
		}
        if($('.service_network .tabMenuBox .ulsan').hasClass('active')){
			$('.service_network .tabListBox > div').removeClass('active');
			$('.service_network .tabListBox .ulsan').addClass('active');
		}
        if($('.service_network .tabMenuBox .gyeongnam').hasClass('active')){
			$('.service_network .tabListBox > div').removeClass('active');
			$('.service_network .tabListBox .gyeongnam').addClass('active');
		}
        if($('.service_network .tabMenuBox .jeonnam').hasClass('active')){
			$('.service_network .tabListBox > div').removeClass('active');
			$('.service_network .tabListBox .jeonnam').addClass('active');
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


function hseSlider(){
    $('.hseSlider').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        appendArrows: $('.arrowBox'),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,

        responsive: [
              {
                breakpoint: 1600,
                settings: {
                    variableWidth: false
                }
              }
            ]

        // fade: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '10px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
      });
}


function mainSlider(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        // fade: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '10px',
              slidesToShow: 1
            }
          },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1
        //     }
        //   }
        ]
      });
}

function product_introduction(){
    // $('.instrumentationBox > a').hover(function() {
    //     $(this).parents('.section_1').addClass('instrumentationWrap');
    //     $('.instrumentationBox > span').addClass('active');
    //   })
    // $('.instrumentationBox > a').mouseleave(function(){
    //     $(this).parents('.section_1').removeClass('instrumentationWrap');
    //     $('.instrumentationBox > span').removeClass('active');
    // });

    $('.semiconductorBox > a').hover(function() {
        $(this).parents('.section_1').removeClass('instrumentationWrap'); 
        $(this).parents('.section_1').addClass('semiconductorWrap'); 
        $('.instrumentationBox').removeClass('active');
        $('.semiconductorBox').addClass('active');
      })
    $('.semiconductorBox > a').mouseleave(function(){
        $(this).parents('.section_1').removeClass('semiconductorWrap');
        $(this).parents('.section_1').addClass('instrumentationWrap');
        $('.semiconductorBox').removeClass('active');
        $('.instrumentationBox').addClass('active');
    });

    $('.processValvesBox > a').hover(function() {
        $(this).parents('.section_1').removeClass('instrumentationWrap'); 
        $(this).parents('.section_1').addClass('processValvesWrap');
        $('.instrumentationBox').removeClass('active');
        $('.processValvesBox').addClass('active');
      })
    $('.processValvesBox > a').mouseleave(function(){
        $(this).parents('.section_1').removeClass('processValvesWrap'); 
        $(this).parents('.section_1').addClass('instrumentationWrap'); 
        $('.processValvesBox').removeClass('active');
        $('.instrumentationBox').addClass('active');
    });
}