$(function () {
    //counting
    (function () {
        var thumbcount = 0, slidecount = 0, clickedItem, clickedItemAttr, prevslide, nextslide;
        $('.c-slider-left > ul > li').each(function () {
            thumbcount++;
            $(this).attr('data-val', thumbcount);
        });
        $('.c-slider-right-inner > ul > li').each(function () {
            slidecount++;
            $(this).attr('id', "slide" + slidecount);
        });
        //SCROLL TO LEFT THE UL
        $('.c-slider-right-inner > ul').animate({
            scrollLeft: '0'
        }, 0);
        //ON PAGE LOAD HIDE SLIDE LI
        $('.c-slider-right-inner > ul > li').fadeOut(0);
        $('.c-slider-right-inner > ul > li.active').fadeIn(0);
        //ON CLICK OF LI PERFORM ACTION
        $('.c-slider-left > ul > li').click(function () {
            if ($(this).hasClass('active')) {
                return;
            } else {
                clickedItemAttr = $(this).attr('data-val');
                //REMOVE CLASSES FROM BUTTON
                $('.c-left').removeClass('no_more');
                $('.c-right').removeClass('no_more');
                $('.c-slider-right-inner > ul > li').fadeOut(0);
                $(this).addClass('active').siblings().removeClass('active');
                $('.c-slider-right-inner > ul').find("#slide" + clickedItemAttr).fadeOut(500, function () {
                    $('.c-slider-right-inner > ul').find("#slide" + clickedItemAttr).fadeIn(500).addClass('active').siblings().removeClass('active');
                });
            }
        });
        //ON CLICK OF BUTTON PERFORM ACTION
        $('.c-btn').click(function () {
            if ($(this).hasClass('c-left')) {
                //disable btns when prev not found
                if ($('.c-slider-left li.active').prev().length == 0) {
                    $(this).addClass('no_more');
                    return;
                } else {
                    prevslide = $('.c-slider-left > ul > li.active').prev();
                    clickedItemAttr = $('.c-slider-left > ul > li.active').prev().attr('data-val');
                    //remove Class when prev not found
                    $(this).removeClass('no_more');
                    $('.c-right').removeClass('no_more');
                    $('.c-slider-right-inner > ul > li').fadeOut(0);
                    $(prevslide).addClass('active').siblings().removeClass('active');
                    $('.c-slider-right-inner > ul').find("#slide" + clickedItemAttr).fadeOut(500, function () {
                        $('.c-slider-right-inner > ul').find("#slide" + clickedItemAttr).fadeIn(500).addClass('active').siblings().removeClass('active');
                    });
                }
            } else {
                //disable btns when next not found
                if ($('.c-slider-left li.active').next().length == 0) {
                    $(this).addClass('no_more');
                    return;
                }
                nextslide = $('.c-slider-left > ul > li.active').next();
                clickedItemAttr = $('.c-slider-left > ul > li.active').next().attr('data-val');
                //remove Class when prev not found
                $(this).removeClass('no_more');
                $('.c-left').removeClass('no_more');
                $('.c-slider-right-inner > ul > li').fadeOut(0);
                $(nextslide).addClass('active').siblings().removeClass('active');
                $('.c-slider-right-inner > ul').find("#slide" + clickedItemAttr).fadeOut(500, function () {
                    $('.c-slider-right-inner > ul').find("#slide" + clickedItemAttr).fadeIn(500).addClass('active').siblings().removeClass('active');
                });
            }
        });
    })();

    $(".zoom_07").elevateZoom({
        zoomType: "lens",
        lensShape: "round",
        lensSize: 200
    });

    $(".fancybox").fancybox();
});