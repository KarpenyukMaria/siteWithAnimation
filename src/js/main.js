

$(window).scroll(function () {

    //section1
    var bottomSection1 = $(".section1")[0].getBoundingClientRect().bottom;
    var topSection1 = $(".section1")[0].getBoundingClientRect().top;

    if (topSection1 < $(window).scrollTop() < bottomSection1) {
            doClassesActive(0)
            addClassesAnimationDown(0);

    } else if ($(window).scrollTop() > bottomSection1) {
        doClassesPasive(0);
    }


    //section2
    if ($('.section2').isInViewport()) {
            doClassesActive(1);
            addClassesAnimationDown(1);
    } else {
        doClassesPasive(1);
    }
    //section3

    if ($('.section3').isInViewport()) {

             doClassesActive(2);
             addClassesAnimationDown(2);
    } else {
        doClassesPasive(2);
    }

    //section4
    if ($('.section4').isInViewport()) {
            doClassesActive(3);
            addClassesAnimationDown(3);

    } else {
        doClassesPasive(3);
    }
});





function addClassesAnimationDown(a){

    $('.pointer:eq('+a+')').addClass('start-animation-pointer');
    $('.cloud').addClass('start-animation-cloud');
    $('.navigation-sky-line:eq('+a+')').addClass('start-animation-line');

}
function removeClassesAnimationDown(a){
    $('.pointer:eq('+a+')').removeClass('start-animation-pointer');
    $('.cloud').removeClass('start-animation-cloud');
    $('.navigation-sky-line:eq('+a+')').removeClass('start-animation-line');
}
function addClassesAnimationUp(a){
    $('.pointer:eq('+a+')').addClasses('start-animation-pointerUp');
    $('.cloud').addClass('start-animation-cloud');
    $('.navigation-sky-line:eq('+a+')').addClass('start-animation-line');
}

function doClassesActive(a){
    $('.navigation-item:eq('+a+')').removeClass('passive-navItem');
    $('.navigation-sky:eq('+a+')').removeClass('passive-sky');
}
function doClassesPasive(b){
    $('.navigation-item:eq('+b+')').addClass('passive-navItem');
    $('.navigation-sky:eq('+b+')').addClass('passive-sky');
}

// check if element located in view
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

//check scroll up or down
var lastScroll = 0;
function scrollDetect() {
    let goingDown = false;
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0 && lastScroll <= currentScroll) {
        lastScroll = currentScroll;
        goingDown=true;
        console.log(goingDown)
    } else {
        lastScroll = currentScroll;
        goingDown=false;
        console.log(goingDown)
    }
    return goingDown;
}

