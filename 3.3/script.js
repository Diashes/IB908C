/**
 * Created by Amanda on 7/22/2015.
 */

$(document).ready(function(){

    // Ändra en egenskap för ett HTML-elementet
    $("#example1").css("background", "red");

    // Lägga till nytt innehåll till ett HTML-elementet
    $("#example2").click(function(){
        $(this).text("Hello World!");
    });

    // Ta bort ett HTML-element
    $("#example3").click(function(){
        $(this).remove();
    });

    // Utvinna information från ett HTML-element
    $("#example4").click(function(){
        $(this).addClass();
    });

    // Lägga till och ta bort ett klass-attribut från ett HTML-element
    $("#addBorder").click(function(){
        $("#example5").addClass("border");
    });

    $("#removeBorder").click(function(){
        $("#example5").removeClass("border");
    });

    // Mushändelser
    $("#example6").mouseover(function(){
        $(this).css("background", "red");
    });
    $("#example6").mouseout(function(){
        $(this).css("background", "yellow");
    });

    // Dokument och fönsterhändelser
    $("#width").text($(window).width());
    $("#height").text($(window).height());
    $(window).resize(function(){
        $("#width").text($(window).width());
        $("#height").text($(window).height());
    });

    //Formulärhändelser
    $("#example8").focus(function(){
        $(this).css("background-color", "#cccccc");
        $(this).blur(function(){
            $(this).css("background-color", "#ffffff");
        });
    });

    // Tangentbordshändelser
    $(document).keydown(function(e){
        if (e.keyCode == 37) $("#example9").animate({left: "-=5"}, 0);
        if (e.keyCode == 39) $("#example9").animate({left: "+=5"}, 0);
    });

    // Kombinerade jQuery händelser med hover och toggle
    $("#example10-button1").hover(
        function(){
            $("#example10-text1").toggle(50);
        },
        function(){
            $("#example10-text1").toggle(50);
        }
    );

    $("#example10-button2").click(function(){
        $("#example10-text2").toggle(50);
    });

    // Händelse-objektet evt och någon av dess egenskaper
    $(document).mousemove(function(e){
        $("#example11-koordinater").text("Position-X: " + e.pageX + ", Position-Y: " + e.pageY);
    });

    // Stoppa en händelses normala beteende
    $("#example12-button").click(function(e){
        e.preventDefault();
    });

    // Ta bort händelse
    $("#example13-checkbox").click(function() {
        $("#example13-div").html("Klicka!");
        $("#example13-div").click(function(){
            alert("Klickad!");
            $(this).unbind("click");
            $("#example13-checkbox").prop("checked", false);
            $(this).text("Oklickbar...");
        });

    });
});