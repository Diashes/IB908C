/**
 * Created by Amanda on 7/25/2015.
 */

$(document).ready(function(){

    $(".glyphicon-th-list").click(function(){
        $("aside").show();
        $(".wrapper").css("margin-left", "15%");
        $(".glyphicon-th-list").css("display", "none");
        $(".glyphicon-remove").css("display", "inline-block");
    });

    $(".glyphicon-remove").click(function(){
        $("aside").hide();
        $(".wrapper").css("margin-left", "0");
        $(".glyphicon-remove").css("display", "none");
        $(".glyphicon-th-list").css("display", "inline-block");
    });

    $("section .btnOpen").each(function(){
        $(this).on("click", function(e){

            $(this).fadeOut();
            $(this).parent().fadeOut(function(){
                $(this).find(".btnClose").fadeIn();
                $(this).find(".section-text").css({"height": "100%"});
                $(this)
                    .prependTo(".expanded-sections")
                    .css({"width": "100%"})
                    .fadeIn();
            });

        });
    });

    $("section .btnClose").each(function(){
        $(this).on("click", function(e){

            $(this).fadeOut();
            $(this).parent().fadeOut(function(){
                $(this).find(".btnOpen").fadeIn();
                $(this).find(".section-text").css({"height": "10em"});
                $(this)
                    .prependTo("article")
                    .css({"width": "24%"})
                    .fadeIn();
            });

        });
    });

    $("header").each(function(){
        $(this).animate({
            opacity:1
        }, 1500, "swing", function(){
            $("section").each(function(){
                $(this).animate({
                    width: "24%",
                    opacity:1
                }, 1000, "swing");
            });
        });
    })

});

