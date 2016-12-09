$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    autoDelay: 5000
});
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollBot = $(document).height() - $(window).height() - $(window).scrollTop();
        var top = $(window).scrollTop();
        if (scrollBot > 530){
            $(".left-home").removeClass("position-relative").addClass("position-fixed").css("top", 0+'px')

        }else{
            $(".left-home").addClass("position-relative").css("top", 3285+'px');
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



