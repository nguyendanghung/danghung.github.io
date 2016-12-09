$('.bxslider').bxSlider({
    // auto: true,
    autoControls: true,
    // autoDelay: 5000
});
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollBot = $(document).height() - 2 * $(window).height() - $(window).scrollTop();
        var top = $(".right-home").height();
        if (scrollBot > 0){
            $(".left-home").removeClass("position-relative").addClass("position-fixed");
        }else{
            $(".left-home").addClass("position-relative").removeClass("position.fixed");
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



