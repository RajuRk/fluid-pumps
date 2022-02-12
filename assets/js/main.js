$(function() {

    

    "use strict";

    

    //===== Prealoder

    

    $(window).on('load', function(event) {

        $('.preloader').delay(500).fadeOut(500);

    });

    

    

    //===== Sticky

    

    $(window).on('scroll', function(event) {    

        var scroll = $(window).scrollTop();

        if (scroll < 10) {

            $(".navbar-area").removeClass("sticky");

        } else{

            $(".navbar-area").addClass("sticky");

        }

    });

    

     //===== close navbar-collapse when a  clicked

    

    $(".navbar-nav a").on('click', function () {

        $(".navbar-collapse").removeClass("show");

    });

    

    //===== Mobile Menu

    

    $(".navbar-toggler").on('click', function(){

        $(this).toggleClass("active");

    });

    

    $(".navbar-nav a").on('click', function() {

        $(".navbar-toggler").removeClass('active');

    });

    

    

    //===== Section Menu Active



    var scrollLink = $('.page-scroll');

        // Active link switching

        $(window).scroll(function() {

        var scrollbarLocation = $(this).scrollTop();



        scrollLink.each(function() {



          var sectionOffset = $(this.hash).offset().top - 73;



          if ( sectionOffset <= scrollbarLocation ) {

            $(this).parent().addClass('active');

            $(this).parent().siblings().removeClass('active');

          }

        });

    });    

    

    

    //===== Sidebar



    $('[href="#side-menu-right"], .overlay-right').on('click', function (event) {

        $('.sidebar-right, .overlay-right').addClass('open');

    });



    $('[href="#close"], .overlay-right').on('click', function (event) {

        $('.sidebar-right, .overlay-right').removeClass('open');

    });

    

    

    

    //===== Isotope Project 3



    $('.container').imagesLoaded(function () {

        var $grid = $('.grid').isotope({

            // options

            transitionDuration: '1s'

        });



        // filter items on button click

        $('.portfolio-menu ul').on('click', 'li', function () {

            var filterValue = $(this).attr('data-filter');

            $grid.isotope({

                filter: filterValue

            });

        });



        //for menu active class

        $('.portfolio-menu ul li').on('click', function (event) {

            $(this).siblings('.active').removeClass('active');

            $(this).addClass('active');

            event.preventDefault();

        });

    });

    

    

    //  Magnific Popup



    $('.image-popup').magnificPopup({

        type: 'image',

        gallery: {

            enabled: true

        }

    });

    

    //====== Magnific Popup



    $('.video-popup').magnificPopup({

        type: 'iframe'

        // other options

    });

    

    

    //===== Slick



    $('.testimonial-active').slick({

        infinite: true,

        slidesToShow: 3,

        slidesToScroll: 1,

        speed: 800,

        arrows: false,

        dots: true,

        autoplay: true,

        autoplaySpeed: 5000,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 3,

                }

            },

            {

                breakpoint: 992,

                settings: {

                    slidesToShow: 2,

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                }

            },

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 1,

                    arrows: false,

                }

            }

        ]

    });

    

    

    //===== Slick



    $('.testimonial-active-2').slick({

        infinite: true,

        slidesToShow: 2,

        slidesToScroll: 1,

        speed: 800,

        arrows: false,

        dots: true,

        autoplay: true,

        autoplaySpeed: 5000,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 2,

                }

            },

            {

                breakpoint: 992,

                settings: {

                    slidesToShow: 1,

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                }

            },

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 1,

                    arrows: false,

                }

            }

        ]

    });

    

    

    //===== Slick



    $('.client-active').slick({

        infinite: true,

        slidesToShow: 6,

        slidesToScroll: 1,

        speed: 800,

        arrows: false,

        dots: false,

        autoplay: true,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 6,

                }

            },

            {

                breakpoint: 992,

                settings: {

                    slidesToShow: 5,

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 3,

                }

            },

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 2,

                    arrows: false,

                }

            }

        ]

    });

    

    

    //===== Slick



    $('.testimonial-active-4').slick({

        infinite: true,

        slidesToShow: 2,

        slidesToScroll: 1,

        speed: 800,

        arrows: false,

        dots: true,

        autoplay: true,

        autoplaySpeed: 5000,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 2,

                }

            },

            {

                breakpoint: 992,

                settings: {

                    slidesToShow: 2,

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                }

            },

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 1,

                    arrows: false,

                }

            }

        ]

    });



        

    //===== Back to top

    

    // Show or hide the sticky footer button

    $(window).on('scroll', function(event) {

        if($(this).scrollTop() > 600){

            $('.back-to-top').fadeIn(200)

        } else{

            $('.back-to-top').fadeOut(200)

        }

    });

    

    

    //Animate the scroll to yop

    $('.back-to-top').on('click', function(event) {

        event.preventDefault();

        

        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });

    

    

    //=====  AOS

    

    new WOW().init();

    

    

    //===== 





    //Tabs

    /**

 * Created by edesimone on 04/06/16.

 */

window.onload=function() {



    // get tab container

    var container = document.getElementById("tabContainer");

    var tabcon = document.getElementById("tabscontent");

    // set current tab

    var navitem = document.getElementById("tabHeader_1");



    //store which tab we are on

    var ident = navitem.id.split("_")[1];

    //alert(ident);

    navitem.parentNode.setAttribute("data-current",ident);

    //set current tab with class of activetabheader

    navitem.setAttribute("class","tabActiveHeader");



    //hide two tab contents we don't need



    var pages = tabcon.getElementsByClassName("tabpage");

    for (var i = 0; i < pages.length; i++) {

        var comp=i+1;

        if(ident!=comp) {

            pages.item(i).style.display = "none";

        }

    };



    //this adds click event to tabs

    var tabs = container.getElementsByTagName("li");

    for (var i = 0; i < tabs.length; i++) {

        tabs[i].onclick=displayPage;

    }

}



// on click of one of tabs

function displayPage() {

    var current = this.parentNode.getAttribute("data-current");

    //remove class of activetabheader and hide old contents

    document.getElementById("tabHeader_" + current).removeAttribute("class");

    document.getElementById("tabpage_" + current).style.display="none";



    var ident = this.id.split("_")[1];



    //add class of activetabheader to new active tab and show contents

    this.setAttribute("class","tabActiveHeader");

    document.getElementById("tabpage_" + ident).style.display="block";

    this.parentNode.setAttribute("data-current",ident);

}



    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

});

//Whatsapp