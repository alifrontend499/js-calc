$(function () {
//    $('.c-slider-left').click(function () {
//        $(this).parent().addClass('active').siblings().removeClass('active');
//    });
});


var li = document.querySelectorAll('.c-small-img');



console.dir(li[0].);

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function (e) {
        this.parentNode.classList.add('hello');
        this.parentNode.nextSibling.classList.remove('hello');
        this.parentNode.previousSibling.classList.remove('hello');
    });
}

