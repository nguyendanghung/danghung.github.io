$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    autoDelay: 5000
});
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollBot = $(document).height() -  $(window).height() - $(window).scrollTop() - 536;
        if (scrollBot > 0){
            $(".left-home").css({
                'position':'fixed',
                'top':0,
                'bottom':'inherit'
            });
            // $(".left-home").animate({
            //     position: 'fixed',
            //    top: 0
            // });
        }else{
            // $(".left-home").css("position",'absolute').css('bottom',0).css('top','inherit');

            $(".left-home").css({
                position: 'absolute',
                top: 'inherit',
                bottom: 0
            });
        }
    });

    // ----button search---
    $(".top-search button").click(function () {
        if($(this).hasClass("active") === true ){
            $(this).removeClass("active").siblings().addClass("active");
        }else {
            $(this).addClass("active").siblings().removeClass("active");
        }

    });
});



