/* global $, alert, console */

 // Trigger the Gallary Images  : 
 let allItems = document.getElementById('all'),
 mobileItems = document.getElementById('mobile'),
 coffeeItems = document.getElementById('coffee'),
 videoItems = document.getElementById('video'),
 fashionItems = document.getElementById('fashion'),
 allMobiles = document.querySelectorAll('.mobile'),
 allCoffee = document.querySelectorAll('.coffee'),
 allVideo = document.querySelectorAll('.video'),
 allFashion = document.querySelectorAll('.fashion');

 console.log(allCoffee);
const GallaryArray = [allMobiles, allCoffee, allVideo, allFashion]; 

allItems.addEventListener('click', () => {
 GallaryArray.forEach(item => item.forEach(x => x.classList.remove('hideGallaryItems')));
});    

mobileItems.addEventListener('click', () => {
    GallaryArray.forEach(item => item.forEach(x => x.classList.remove('hideGallaryItems')));
    const bla =  GallaryArray.filter(item => item != allMobiles);
    bla.forEach(element => {
    element.forEach(x => x.classList.add('hideGallaryItems')); 
    });
    
});    

coffeeItems.addEventListener('click', () => {
    GallaryArray.forEach(item => item.forEach(x => x.classList.remove('hideGallaryItems')));
const bla =  GallaryArray.filter(item => item != allCoffee);
bla.forEach(element => {
    element.forEach(x => x.classList.add('hideGallaryItems')); 
 });
}); 

videoItems.addEventListener('click', () => {
    GallaryArray.forEach(item => item.forEach(x => x.classList.remove('hideGallaryItems')));
const bla =   GallaryArray.filter(item => item != allVideo);
bla.forEach(element => {
    element.forEach(x => x.classList.add('hideGallaryItems')); 
 });
});

fashionItems.addEventListener('click', () => {
    GallaryArray.forEach(item => item.forEach(x => x.classList.remove('hideGallaryItems')));
const bla =     GallaryArray.filter(item => item != allFashion);
bla.forEach(element => {
    element.forEach(x => x.classList.add('hideGallaryItems')); 
 });
});    

$(function () {

    'use strict';
    //Adjast header height :
    let myHeader = $('.header'),
        mySlider = $('.bxslider');

    myHeader.height($(window).height());
    $(window).resize(function () {

        myHeader.height($(window).height());

        // Make the slider li item center : 
        mySlider.each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
    });

    // links add active class :

    $('.links li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // Make the slider li item center : 
    mySlider.each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });

    mySlider.bxSlider({

        pager: false
    });

    // Smooth scroll to Our Services :
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);
        // console.log($(this).data('value'));
    });

    // Our Custom Slider :
    // self infoke function : 
    (function autoSlider() {

        $('.slider .active').each(function () {

            if(!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());


    // Adjast Shuffle Links :
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // Trigger Nice Scroll :
    $("body").niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: 'none'
    });
    
});


