/*-----------------------------------------------------------
* Template Name    : Arshia | Responsive One Page HTML Template
* Author           : Retrina Group
* Version          : 1.0.0
* Created          : June 2020
* File Description : Main js file of the template
*------------------------------------------------------------
*/

// repeated variables
var $window = $(window);
var $root = $('html, body');

$(document).ready(function () {

    "use strict";
    themeOption();
    sidebarMenu();
    ColorPallet();
    PillMenuToggler();
    menuToggler();
    sliderOwlCarousel();
    typedJS();
    skills();
    countUp();
    portfolioPopup();
    clientCarousel();
    BlogCarousel();
    postSidebar();

});

$window.on("load", (function() {
    $("#overlayer").delay(500).fadeOut('slow');
    $(".loader").delay(1000).fadeOut('slow');
    portfolioIsotop();
    scrollToAnchor();
}));

    
/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/

function scrollToAnchor(){
    //getting the anchor link in the URL and deleting the `#`
    var value =  window.location.hash.replace('#','');
    if(value.length > 0){
        var sectionAnchor = '#'+value;
        $("#main > section.active, #menu > li a").removeClass("active");
        $('#main > section'+sectionAnchor).addClass('active');
        $('#menu > li a[href$='+value+']').addClass('active');
    }
}

/*-------------------------
        Theme Option
-------------------------*/
function themeOption(){

    "use strict";

    $('.color-scheme li .dark-scheme').click(function() {
        $("body").addClass('arshia-dark');
        $('.color-scheme li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.color-scheme li .light-scheme').click(function() {
        $("body").removeClass('arshia-dark');
        $('.color-scheme li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.theme-skin li .flat-skin').click(function() {
        $("body").addClass('flat-demo');
        $('.theme-skin li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.theme-skin li .neo-skin').click(function() {
        $("body").removeClass('flat-demo');
        $('.theme-skin li a').removeClass('active');
        $(this).addClass('active');
    });
}

/*-------------------------
        ColorFull Demo
-------------------------*/

var list = document.getElementsByClassName('data-background');

     for (var i = 0; i < list.length; i++) {
       var color = list[i].getAttribute('data-color');
       list[i].style.backgroundColor = "" + color + "";
     }


var allDivs = document.getElementsByClassName('data-text-color');

    for( var i =0; i < allDivs.length; ++i )
    {
        var color = allDivs[i].getAttribute('data-color');
       allDivs[i].style.color = "" + color + "";
    }

var allDivs = document.getElementsByClassName('timeline-border');

for( var i =0; i < allDivs.length; ++i )
{
    var color = allDivs[i].getAttribute('data-color');
   allDivs[i].style.borderRightColor = "" + color + "";
}

/*-------------------------
      Sidebar Menu
-------------------------*/
$("#menu > li a").on("click" , function () {
    $("#main > section.active, #menu > li a").removeClass("active");
    $(this).addClass('active');
    var $id = $(this).attr('href');
    $('#main').children($id).addClass('active');
});


$(".to-contact").on('click', function(){
    $("main > section.active, #menu > li a").removeClass("active");
    $('#menu > li:last-child a').addClass('active');
    var $id=$(this).attr('href');
    $('#main').children($id).addClass('active');
})


/*-------------------------
      Sidebar Menu
-------------------------*/
function sidebarMenu(){

    "use strict";

    var $menuLink = $("#menu > li a");
    var $main = $('#main');

    $menuLink.on("click" , function () {
        $("#main > section.active, #menu > li a").removeClass("active");
        $(this).addClass('active');
        var $id = $(this).attr('href');
        $main.children($id).addClass('active');
    });

    $(".to-contact").on('click', function(){
        $("#main > section.active, #menu > li a").removeClass("active");
        $('#menu > li:last-child a').addClass('active');
        $('#main > section#contact').addClass('active');
    })

    $(".next-page").on("click" , function () {
        if ($("#menu > li a.active").attr('href') !== '#contact'){
            $("#menu > li a.active").each(function (){
                $(this).parents('li').next('li').children('a').each(function(){
                    $(this).addClass('active');
                    var $id=$(this).attr('href');
                    $("#main > section.active").removeClass("active");
                    $main.children($id).addClass('active');
                })
                $(this).removeClass('active');
            })
        } else {
            $("#main > section.active, #menu > li a.active").removeClass("active");
            $("#menu > li:first-child a, main > section:first-child").addClass('active')
        }
    })

    $(".prev-page").on("click" , function () {
        if ($("#menu > li a.active").attr('href') !== '#hero'){
            $("#menu > li a.active").each(function (){
                $(this).parents('li').prev('li').children('a').each(function(){
                    $(this).addClass('active');
                    var $id=$(this).attr('href');
                    $("main > section.active").removeClass("active");
                    $main.children($id).addClass('active');
                })
                $(this).removeClass('active');
            })
        } else {
            $("main > section.active, #menu > li a.active").removeClass("active");
            $("#menu > li:last-child a, main > section:last-child").addClass('active')
        }
    })
}

// -------------------------------------------------------------
//   Color Panel
// -------------------------------------------------------------
function ColorPallet() {

    "use strict";

    $("ul.pattern .color1").click(function () {
        return $("#option-color").attr("href", "assets/css/color/green-color.css")
    });
    $("ul.pattern .color2").click(function () {
        return $("#option-color").attr("href", "assets/css/color/yellow-color.css")
    });
    $("ul.pattern .color3").click(function () {
        return $("#option-color").attr("href", "assets/css/color/golden-color.css")
    });
    $("ul.pattern .color4").click(function () {
        return $("#option-color").attr("href", "assets/css/color/sky-blue-color.css")
    });
    $("ul.pattern .color5").click(function () {
        return $("#option-color").attr("href", "assets/css/color/blue-color.css")
    });
    $("ul.pattern .color6").click(function () {
        return $("#option-color").attr("href", "assets/css/color/purple-color.css")
    });
    $("ul.pattern .color7").click(function () {
        return $("#option-color").attr("href", "assets/css/color/orange-color.css")
    });
    $("ul.pattern .color8").click(function () {
        return $("#option-color").attr("href", "assets/css/color/pink-color.css")
    });
    $("ul.pattern .color9").click(function () {
        return $("#option-color").attr("href", "assets/css/color/red-color.css")
    });
    $("#color-switcher .pallet-button").click(function () {
        $("#color-switcher .color-pallet").toggleClass('show')
    })

}

// /*-------------------------
//     MENU TOGGLER
// -------------------------*/
function PillMenuToggler() {

    "use strict";
    $(".overlay-menu-toggler").click(function(){
        $(".overlay-menu").addClass("show");
    });
    $(".overlay-menu").click(function(){
        $(this).removeClass("show");
    });
}

function  menuToggler() {
    "use strict";
    var $menuToggler = $(".menu-toggler");
    var $header = $('header');
    $menuToggler.click(function () {
        $(this).toggleClass('open').find('i').toggleClass('lni-menu lni-close ');
        $header.toggleClass('open');
        $('.color-scheme, .pallet-button, .color-pallet').toggleClass('hide');
    });
    if ($window.width() < 1200){
        $('header li a').click(function () {
            $header.removeClass('open');
            $('.color-scheme, .pallet-button, .color-pallet').toggleClass('hide');
            $menuToggler.removeClass('open').find('i').removeClass('lni-close').addClass('lni-menu');
        })
    }
}
/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel(){
    $('.hero-03 .owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        nav: false,
        dots: false,
        autoplay:true,
        touchDrag: true,
        smartSpeed: 5000,
        animateOut: 'fadeOut',
        //autoplayHoverPause: true,
    });
    $('#hero-slider').on("translate.owl.carousel", function(){
        setTimeout(function(){
            $('.hero-slide').removeClass("zoom");
        }, 1000)
    });
    $('#hero-slider').on("translated.owl.carousel", function(){
        $('.owl-item.active .hero-slide').addClass("zoom");
    });
}
/*-------------------------
        TYPED JS
-------------------------*/
function typedJS() {

    "use strict";

    var $element = $('.element');
    if ($element.length > 0) {
        var options = {
            strings: $element.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000,
            backSpeed: 50,
            loop: true
        };
        var typed = new Typed(".element", options);
    }
}
/*-------------------------
          Skills
-------------------------*/
function skills() {

    "use strict";
    $('#menu > li a[href="#resume"] , .next-prev-page button').on('click',function (){
        let section = $('section')
        section.each(function(){
            if ($(this).hasClass('active')){
                $('.skillbar').each(function () {
                    $(this).find('.skillbar-bar').animate({
                        width: $(this).attr('data-percent')
                    }, 6000);
                });
            }
        })
    })
}

/*-------------------------
         Count up
-------------------------*/
function countUp() {

    "use strict";
    $('#menu > li a[href="#about"] , .next-prev-page button').on('click',function (){
        let section = $('section');
        section.each(function(){
            if ($(this).hasClass('active')){
                $(this).find('.timer').countTo();
                $('.count-number').removeClass('timer');
            }
        })
    })

}
/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
function portfolioPopup() {

    "use strict";

    if (('.portfolio-items').length > 0) {
        $('.portfolio-items').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled:true,
                    tCounter: '<span class="mfp-counter">%curr% از %total%</span>'
                }
            });
        });
    }
}
/*-------------------------
        ISOTOPE JS
-------------------------*/
function portfolioIsotop() {

    "use strict";

    // init Isotope
    var initial_items = $('#showMore-initials').data("initial");
    var next_items = $('#showMore-initials').data("next");
    var $pfilter = $('#portfolio-filter');
    var $grid = $('.portfolio-items');
    var $showMore = $('#showMore');
    $grid.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
        isOriginLeft:false,
    });
    $pfilter.find('a').on("click",function() {
        var filterValue = $(this).attr('data-filter');
        $pfilter.find('a').removeClass('active');
        $(this).addClass('active');
        $grid.isotope({
            filter: filterValue,
        });
        updateFilterCounts();
        return false;
    });
    function updateFilterCounts() {
        var itemElems = $grid.isotope('getFilteredItemElements');
        var count_items = $(itemElems).length;
        if (count_items > initial_items) {
            $showMore.show();
            $showMore.parent('.button-border').addClass('ml-2 ml-sm-4').removeClass('p-0');
            
        } else {
            $showMore.hide();
            $showMore.parent('.button-border').removeClass('ml-2 ml-sm-4').addClass('p-0');
        }
        if ($('.portfolio-item').hasClass('visible_item')) {
            $('.portfolio-item').removeClass('visible_item');
        }
        var index = 0;

        $(itemElems).each(function() {
            if (index >= initial_items) {
                $(this).addClass('visible_item');
            }
            index++;
        });
        $grid.isotope('layout');
    }
    function showNextItems(pagination) {
        var itemsMax = $('.visible_item').length;
        var itemsCount = 0;
        $('.visible_item').each(function() {
            if (itemsCount < pagination) {
                $(this).removeClass('visible_item');
                itemsCount++;
            }
        });
        if (itemsCount >= itemsMax) {
            $showMore.hide();
            $showMore.parent('.button-border').removeClass('ml-2 ml-sm-4').addClass('p-0');
        }
        $grid.isotope('layout');
    }
    // function that hides items when page is loaded
    function hideItems(pagination) {
        var itemsMax = $('.portfolio-item').length;
        var itemsCount = 0;
        $('.portfolio-item').each(function() {
            if (itemsCount >= pagination) {
                $(this).addClass('visible_item');
            }
            itemsCount++;
        });
        if (itemsCount < itemsMax || initial_items >= itemsMax) {
            $showMore.hide();
            $showMore.parent('.button-border').removeClass('ml-2 ml-sm-4').addClass('p-0');
        }
        $grid.isotope('layout');
    }
    $showMore.on('click', function(e) {
        e.preventDefault();
        showNextItems(next_items);
    });
hideItems(initial_items);
}

/*-------------------------
  Testimonial CAROUSEL JS
-------------------------*/
function clientCarousel() {
    $(".testimonial .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 5,
        nav: false,
        autoplay: false,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 700,
        autoplayHoverPause: false,
        responsiveClass: true,
        rtl: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            992: {
                items: 3,
                nav: false,
            },

        }
    });
}
/*-------------------------
     Blog CAROUSEL JS
-------------------------*/
function BlogCarousel() {

    "use strict";

    $(".blog .owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        autoplay: false,
        loop: true,
        dots: true,
        margin: 30,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,

    });
}

/*-------------------------
    POST SIDEBAR TOGGLER
-------------------------*/
function postSidebar(){
    $('.post-sidebar-toggle').on('click', function(){
        $(this).toggleClass('open');
        $('.post-sidebar').toggleClass('open');
        $('#main > section.active').toggleClass('section-z-index');
    })
}

/*-------------------------
     AJAX CONTACT FORM
-------------------------*/
function validateEmail(email) {

    "use strict";

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function sendEmail() {

    "use strict";

    var name     = $('#name').val();
    var email    = $('#email').val();
    var subject  = $('#subject').val();
    var comments = $('#comments').val();

    if(!name){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('نام خود را وارد کنید');
    } else if(!email){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('ایمیل خود را وارد کنید');
    } else if(!validateEmail(email)){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('ایمیل معتبر نیست');
    } else if(!subject){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('موضوع ایمیل را وارد کنید');
    } else if(!comments){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('متن پیام خود را بنویسید');
    } else {
        $.ajax({
            type: 'POST',
            data: $("#contactForm").serialize(),
            url:  "sendEmail.php",
            beforeSend: function() {
                $('#submit-btn').html('<span class="spinner-border spinner-border-sm"></span> صبرکنید...');
            },
            success: function(data) {
                $('#submit-btn').html('ارسال شد');
                var myObj = JSON.parse(data);
                if(myObj['status']=='Congratulation'){
                    $('#message').toast('show').addClass('bg-success').removeClass('bg-danger bg-warning');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }else if(myObj['status']=='Error'){
                    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }else if(myObj['status']=='Warning'){
                    $('#message').toast('show').addClass('bg-warning').removeClass('bg-success bg-danger');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }
            },
            error: function(xhr) {
                $('#submit-btn').html('ارسال پیام');
                $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                $('.toast-body').html('<strong> خطا : </strong> لطفا دوباره امتحان کنید.');
            },
        });
    }
}