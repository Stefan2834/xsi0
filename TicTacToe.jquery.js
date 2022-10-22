$(document).ready(function() {
$(".nav-icons").click(function() {
    var test = $(".test");
    test.animate({left: "0px"}, 1500, function() {
        $(".loading-line").animate({width: "100%"}, 1800);
    })
    test.animate({left: "0px"}, 2000, function(){
        $(".nav-icons").removeClass("active").css("width", "50px");
        $("#navbar").css({"width":"70px", "border-top-right-radius": "0px", "border-bottom-right-radius":"0px"});
        $(".top").css("width", "40px");
        $(".middle").css("width", "30px");
        $(".bottom").css("width", "40px");
        $("#background").css("opacity", "1");
        $("#line").css("width", "50px");
        Menu = false;
    })
    test.animate({left: "-100vw"}, 1500, function () {
        $(".loading-line").animate({width: "0"}, 1);
    });
})
})