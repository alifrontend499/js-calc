$(function () {
    
    var active = false;
    $('.c-small-img').click(function (e) {
        var smImgSrc = $(this).attr('src');
        $(this).parent().addClass('active').siblings().removeClass('active');
        if(active){
            return;
        } 
        active = true;
        $('.c-big-img').attr('src',smImgSrc,function(){
            active = false;
        });
    });
    
});