//resource link: https://www.w3schools.com/jquery/default.asp

$("#hunt-img").hide();
$("#secret-text").hide();
$("#super-secret").hide();
$("#puppies").hide();
$("#popup").hide();
$("#momma-img").hide();
$("#wolfie5,#wolfie6,#wolfie7,#wolfie8,#wolfie9,#wolfie10,#wolfie11,#wolfie12,#wolfie13,#wolfie14,#wolfie15,#wolfie16,#wolfie17,#wolfie18 ").hide();


$("#momma-img").click(function () {

    $("#momma-img").hide();
    $("#hunt-img").show();
});


$("#hunt-img").hide();

$("#hunt-img").click(function () {

    $("#hunt-img").hide();
    $("#momma-img").show();
});

$("#toggle-text").click(function () {

    $("#secret-text").toggle();
    $("#momma-img").show();

});



$("#change-bg-color").click(function () {

    $("#home-screen").css("background-color");
    $("#home-screen").fadeOut();
    $("#body").fadeOut();


});


$("#change-bg-color").click(function () {

    $("#wolfie").css("background-color");
    $("#wolfie").fadeOut();
    $("#body").fadeOut();


});

$("#change-bg-color").click(function () {
    location.reload(true); // 
});




$("#secret-text").click(function () {

    $(".main-img").addClass("animate-img")

    setTimeout(function () {

        $(".main-img").removeClass("animate-img")

    }, 10000);

    $("#super-secret").slideToggle(2000);
});

$("#super-secret").click(function () {

    $("#puppies").fadeIn(1000).delay(1000).slideUp();
    $("#puppies").css("width", "500px")
});

$(".main-img").mouseenter(function () {

    $(".main-img").css("filter", "invert(100%)");

});

$(".main-img").mouseleave(function () {

    $(".main-img").css("filter", "invert(0%)");

});

$(document).keydown(function (event) {

    if (event.which == 65) {
        console.log("Key code: " + event.which);
        $("#popup").toggle();
    }



});


$("#momma-img").click(function () {
    $("#wolfie5").show();
    $("#wolfie6").show();
});
$("#wolfie5").click(function () {
    $("#wolfie7").show();
    $("#wolfie8").show();
});
$("#wolfie6").click(function () {
    $("#wolfie7").show();
    $("#wolfie8").show();
});
$("#wolfie7").click(function () {
    $("#wolfie9").show();
    $("#wolfie10").show();
});
$("#wolfie8").click(function () {
    $("#wolfie9").show();
    $("#wolfie10").show();
});
$("#wolfie9").click(function () {
    $("#wolfie11").show();
    $("#wolfie12").show();
});
$("#wolfie10").click(function () {
    $("#wolfie11").show();
    $("#wolfie12").show();
});
$("#wolfie11").click(function () {
    $("#wolfie13").show();
    $("#wolfie14").show();
});
$("#wolfie12").click(function () {
    $("#wolfie13").show();
    $("#wolfie14").show();
});
$("#wolfie13").click(function () {
    $("#wolfie15").show();
    $("#wolfie16").show();
});
$("#wolfie14").click(function () {
    $("#wolfie15").show();
    $("#wolfie16").show();
});
$("#wolfie15").click(function () {
    $("#wolfie17").show();
    $("#wolfie18").show();
});
$("#wolfie16").click(function () {
    $("#wolfie17").show();
    $("#wolfie18").show();
});
$("#wolfie17").click(function () {
    $("#wolfie5,#wolfie6,#wolfie7,#wolfie8,#wolfie9,#wolfie10,#wolfie11,#wolfie12,#wolfie13,#wolfie14,#wolfie15,#wolfie16,#wolfie17,#wolfie18 ").hide();
});
$("#wolfie18").click(function () {
    $("#wolfie5,#wolfie6,#wolfie7,#wolfie8,#wolfie9,#wolfie10,#wolfie11,#wolfie12,#wolfie13,#wolfie14,#wolfie15,#wolfie16,#wolfie17,#wolfie18 ").hide();
});