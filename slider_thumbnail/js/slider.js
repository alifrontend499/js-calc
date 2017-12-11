$(function () {

    $('.c-small-img').click(function (e) {
        if ($(this).parent().hasClass('active')) {
            return;
        }
        var smImgSrc = $(this).attr('src');
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('.c-big-img').fadeOut(200, function () {
            $('.c-big-img').attr('src', smImgSrc);
        }).fadeIn(10);
        $('.c-btn').removeClass('no_more');
    });

    $('.c-btn').click(function () {
        if ($(this).hasClass('c-left')) {
//           disable btns when prev not found
            if ($('.c-slider-left li.active').prev().length == 0) {
                $(this).addClass('no_more');
                return;
            }
//           remove Class when prev not found
            $(this).removeClass('no_more');
            $('.c-right').removeClass('no_more');

            var prevImgSrc = $('.c-slider-left li.active').prev('li').find('img').attr('src');
            $('.c-slider-left li.active').removeClass('active').prev('li').addClass('active');
            $('.c-big-img').fadeOut(200, function () {
                $('.c-big-img').attr('src', prevImgSrc);
//                $('.c-big-img').attr('data-zoom-image', prevImgSrc);
            }).fadeIn(10);
//           alert('prev');
        } else {
//           disable btns when next not found
            if ($('.c-slider-left li.active').next().length == 0) {
                $(this).addClass('no_more');
                return;
            }
//           remove Class when next not found           
            $(this).removeClass('no_more');
            $('.c-left').removeClass('no_more');

            var nextImgSrc = $('.c-slider-left li.active').next('li').find('img').attr('src');
            $('.c-slider-left li.active').removeClass('active').next('li').addClass('active');
            $('.c-big-img').fadeOut(200, function () {
                $('.c-big-img').attr('src', nextImgSrc);
            }).fadeIn(10);
//           alert('next');
        }
    });
});