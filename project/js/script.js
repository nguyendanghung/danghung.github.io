$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    autoDelay: 5000
});
$(document).ready(function () {
    var height1 = $(document).height() - 2 * $(window).height() - $(window).scrollTop();
    var top1 = $(window).scrollTop();
    // alert(top1);
    if (height1 < 0){
        alert('rwerwe');
        $('.left-home').removeClass('position-fixed').addClass('position-relative').css("top", top1+"px");
    }else {
        $('.left-home').addClass('position-fixed');
    }

    // ----button search---
    $(".top-search button").click(function () {
        if($(this).hasClass("active") === true ){
            $(this).removeClass("active").siblings().addClass("active");
        }else {
            $(this).addClass("active").siblings().removeClass("active");
        }

    })
});



