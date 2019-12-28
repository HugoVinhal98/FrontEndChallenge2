$(document).ready(function () {
    $(".claim-button").click(function () {
        if ($(".input1").val().length === 0) {
            $(".error1").css({ display: "block" });
            $(".input1").css({ border: "2px solid #FF7979", background: "url(images/icon-error.svg) no-repeat right 15px center" });
        }
        if ($(".input2").val().length === 0) {
            $(".error2").css({ display: "block" });
            $(".input2").css({ border: "2px solid #FF7979", background: "url(images/icon-error.svg) no-repeat right 15px center" });
        }
        if ($(".input3").val().length === 0) {
            $(".error3").css({ display: "block" });
            $(".input3").css({ border: "2px solid #FF7979", background: "url(images/icon-error.svg) no-repeat right 15px center" });
            $('.input3').addClass('input3ph');
            $(".input3").attr("placeholder", "email@example.com");
        }
        if ($(".input4").val().length === 0) {
            $(".error4").css({ display: "block" });
            $(".input4").css({ border: "2px solid #FF7979", background: "url(images/icon-error.svg) no-repeat right 15px center" });
        }

    });
});